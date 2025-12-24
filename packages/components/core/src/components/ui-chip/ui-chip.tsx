import { Component, Prop, Event, EventEmitter, Element, h, Host } from '@stencil/core';

/**
 * Individual chip/tag for selection or display
 * @slot - Default slot for chip label
 * @slot icon-start - Icon before label
 * @slot icon-end - Icon after label (before remove button)
 */
@Component({
  tag: 'ui-chip',
  styleUrl: 'ui-chip.css',
  shadow: true,
})
export class UiChip {
  @Element() el: HTMLElement;

  /** Value for this chip */
  @Prop() value!: string;

  /** Whether this chip is disabled */
  @Prop() disabled: boolean = false;

  /** Whether this chip can be removed */
  @Prop() removable: boolean = false;

  /** Visual variant */
  @Prop() variant: 'default' | 'primary' | 'success' | 'warning' | 'error' = 'default';

  /** Emitted when remove button is clicked */
  @Event() remove: EventEmitter<string>;

  private handleRemoveClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (!this.disabled) {
      this.remove.emit(this.value);
    }
  };

  render() {
    return (
      <Host
        role="option"
        aria-disabled={this.disabled ? 'true' : undefined}
        data-disabled={this.disabled || undefined}
        class={{
          'chip': true,
          [`chip--${this.variant}`]: true,
          'chip--disabled': this.disabled,
          'chip--removable': this.removable,
        }}
      >
        <slot name="icon-start"></slot>
        <span class="chip-label">
          <slot></slot>
        </span>
        <slot name="icon-end"></slot>
        {this.removable && (
          <button
            type="button"
            class="chip-remove"
            aria-label="Remove"
            disabled={this.disabled}
            onClick={this.handleRemoveClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" width="10" height="10">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
          </button>
        )}
      </Host>
    );
  }
}
