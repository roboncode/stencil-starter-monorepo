import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'uefds-input-group',
  styleUrl: 'uefds-input-group.css',
  scoped: true,
})
export class UefdsInputGroup {
  @Prop({ reflect: true }) size: 'sm' | 'base' | 'lg' = 'base';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) error: boolean = false;

  render() {
    return (
      <Host>
        <div class={{
          'input-group': true,
          [`input-group--${this.size}`]: true,
          'input-group--disabled': this.disabled,
          'input-group--error': this.error,
        }}>
          <slot name="addon-start"></slot>
          <slot></slot>
          <slot name="addon-end"></slot>
        </div>
      </Host>
    );
  }
}
