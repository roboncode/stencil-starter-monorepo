import { Component, Prop, State, Element, h, Watch } from '@stencil/core';
import { computePosition, flip, shift, offset, arrow, autoUpdate, Placement } from '@floating-ui/dom';

@Component({
  tag: 'ui-tooltip',
  styleUrl: 'ui-tooltip.css',
  shadow: true,
})
export class UiTooltip {
  @Element() el: HTMLElement;

  /**
   * The content to display in the tooltip
   */
  @Prop() content: string = '';

  /**
   * The placement of the tooltip relative to the trigger
   */
  @Prop() placement: Placement = 'top';

  /**
   * Delay before showing the tooltip (in ms)
   */
  @Prop() showDelay: number = 0;

  /**
   * Delay before hiding the tooltip (in ms)
   */
  @Prop() hideDelay: number = 0;

  /**
   * Offset from the trigger element (in px)
   */
  @Prop() offsetDistance: number = 8;

  /**
   * Whether the tooltip is disabled
   */
  @Prop() disabled: boolean = false;

  @State() isVisible: boolean = false;

  private tooltipEl: HTMLDivElement;
  private arrowEl: HTMLDivElement;
  private wrapperEl: HTMLDivElement;
  private showTimeout: ReturnType<typeof setTimeout>;
  private hideTimeout: ReturnType<typeof setTimeout>;
  private cleanupAutoUpdate: (() => void) | null = null;

  @Watch('isVisible')
  handleVisibilityChange() {
    if (this.isVisible && this.tooltipEl && this.wrapperEl) {
      this.startAutoUpdate();
    } else {
      this.stopAutoUpdate();
    }
  }

  private startAutoUpdate() {
    if (this.cleanupAutoUpdate) {
      this.cleanupAutoUpdate();
    }

    this.cleanupAutoUpdate = autoUpdate(
      this.wrapperEl,
      this.tooltipEl,
      () => this.updatePosition(),
      {
        ancestorScroll: true,
        ancestorResize: true,
        elementResize: true,
        layoutShift: true,
      }
    );
  }

  private stopAutoUpdate() {
    if (this.cleanupAutoUpdate) {
      this.cleanupAutoUpdate();
      this.cleanupAutoUpdate = null;
    }
  }

  private async updatePosition() {
    if (!this.wrapperEl || !this.tooltipEl) return;

    const { x, y, placement, middlewareData } = await computePosition(
      this.wrapperEl,
      this.tooltipEl,
      {
        strategy: 'fixed',
        placement: this.placement,
        middleware: [
          offset(this.offsetDistance),
          flip(),
          shift({ padding: 8 }),
          arrow({ element: this.arrowEl }),
        ],
      }
    );

    Object.assign(this.tooltipEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });

    // Position the arrow
    if (middlewareData.arrow && this.arrowEl) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];

      Object.assign(this.arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px',
      });
    }
  }

  private handleMouseEnter = () => {
    if (this.disabled) return;

    clearTimeout(this.hideTimeout);
    this.showTimeout = setTimeout(() => {
      this.isVisible = true;
    }, this.showDelay);
  };

  private handleMouseLeave = () => {
    clearTimeout(this.showTimeout);
    this.hideTimeout = setTimeout(() => {
      this.isVisible = false;
    }, this.hideDelay);
  };

  private handleFocus = () => {
    if (this.disabled) return;
    this.isVisible = true;
  };

  private handleBlur = () => {
    this.isVisible = false;
  };

  disconnectedCallback() {
    this.stopAutoUpdate();
    clearTimeout(this.showTimeout);
    clearTimeout(this.hideTimeout);
  }

  render() {
    return (
      <div
        class="tooltip-wrapper"
        ref={(el) => (this.wrapperEl = el)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <slot></slot>
        <div
          class={{
            'tooltip': true,
            'tooltip--visible': this.isVisible,
          }}
          role="tooltip"
          ref={(el) => (this.tooltipEl = el)}
          aria-hidden={!this.isVisible}
        >
          <slot name="content">{this.content}</slot>
          <div class="tooltip-arrow" ref={(el) => (this.arrowEl = el)}></div>
        </div>
      </div>
    );
  }
}
