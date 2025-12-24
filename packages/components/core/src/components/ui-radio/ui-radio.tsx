import { Component, Prop, Element, h, Host } from '@stencil/core';

/**
 * Custom styled radio option (NOT using native radio input)
 * @slot - Default slot for label content
 * @slot description - Optional description text below label
 * @slot indicator - Custom indicator icon (when indicator="custom")
 */
@Component({
  tag: 'ui-radio',
  styleUrl: 'ui-radio.css',
  shadow: true,
})
export class UiRadio {
  @Element() el: HTMLElement;

  /** Value for this radio option */
  @Prop() value!: string;

  /** Whether this radio is disabled */
  @Prop() disabled: boolean = false;

  /** Indicator style */
  @Prop() indicator: 'dot' | 'check' | 'custom' = 'dot';

  render() {
    return (
      <Host
        role="radio"
        aria-disabled={this.disabled ? 'true' : undefined}
        data-disabled={this.disabled || undefined}
        class={{
          'radio': true,
          'radio--disabled': this.disabled,
        }}
      >
        <span class="radio-control">
          <span class="radio-indicator">
            {this.indicator === 'dot' && (
              <span class="radio-dot"></span>
            )}
            {this.indicator === 'check' && (
              <i class="fa-solid fa-check"></i>
            )}
            {this.indicator === 'custom' && (
              <slot name="indicator"></slot>
            )}
          </span>
        </span>
        <span class="radio-content">
          <span class="radio-label">
            <slot></slot>
          </span>
          <slot name="description"></slot>
        </span>
      </Host>
    );
  }
}
