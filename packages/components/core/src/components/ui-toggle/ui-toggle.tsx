import { Component, Prop, Element, h, Host } from '@stencil/core';

/**
 * Individual toggle button within a toggle group
 * @slot - Default slot for toggle content (text, icon, or both)
 */
@Component({
  tag: 'ui-toggle',
  styleUrl: 'ui-toggle.css',
  shadow: true,
})
export class UiToggle {
  @Element() el: HTMLElement;

  /** Value for this toggle */
  @Prop() value!: string;

  /** Whether this toggle is disabled */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host
        role="button"
        aria-disabled={this.disabled ? 'true' : undefined}
        data-disabled={this.disabled || undefined}
        class={{
          'toggle': true,
          'toggle--disabled': this.disabled,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
