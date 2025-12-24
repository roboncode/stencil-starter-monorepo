import { Component, Prop, Element, h, Host } from '@stencil/core';

/**
 * Individual tab trigger
 * @slot - Default slot for tab label content
 * @slot icon-start - Icon before label
 * @slot icon-end - Icon after label
 */
@Component({
  tag: 'ui-tab',
  styleUrl: 'ui-tab.css',
  shadow: true,
})
export class UiTab {
  @Element() el: HTMLElement;

  /** Unique value for this tab (must match corresponding panel) */
  @Prop() value!: string;

  /** Whether the tab is disabled */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host
        role="tab"
        aria-disabled={this.disabled ? 'true' : undefined}
        data-disabled={this.disabled || undefined}
        class={{
          'tab': true,
          'tab--disabled': this.disabled,
        }}
      >
        <slot name="icon-start"></slot>
        <span class="tab-label">
          <slot></slot>
        </span>
        <slot name="icon-end"></slot>
      </Host>
    );
  }
}
