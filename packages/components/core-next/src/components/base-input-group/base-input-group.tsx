import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'base-input-group',
  styleUrl: 'base-input-group.css',
  scoped: true,
})
export class BaseInputGroup {
  @Prop({ reflect: true }) size: 'sm' | 'base' | 'lg' = 'base';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) error: boolean = false;

  render() {
    return (
      <Host
        data-size={this.size}
        data-disabled={this.disabled ? '' : undefined}
        data-error={this.error ? '' : undefined}
      >
        <div class={{
          'input-group': true,
          [`input-group--${this.size}`]: true,
          'input-group--disabled': this.disabled,
          'input-group--error': this.error,
        }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
