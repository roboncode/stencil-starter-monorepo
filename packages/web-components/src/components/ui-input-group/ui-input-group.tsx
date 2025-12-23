import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ui-input-group',
  styleUrl: 'ui-input-group.css',
  shadow: true,
})
export class UiInputGroup {
  /**
   * Size variant of the input group
   */
  @Prop() size: 'sm' | 'base' | 'lg' = 'base';

  /**
   * Whether the input group is disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * Whether the input group has an error state
   */
  @Prop() error: boolean = false;

  render() {
    return (
      <Host
        class={{
          'input-group': true,
          [`input-group--${this.size}`]: true,
          'input-group--disabled': this.disabled,
          'input-group--error': this.error,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
