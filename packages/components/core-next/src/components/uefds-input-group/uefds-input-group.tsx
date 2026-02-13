import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'uefds-input-group',
  styleUrl: 'uefds-input-group.css',
  scoped: true,
})
export class UefdsInputGroup {
  @Element() el: HTMLElement;

  @Prop({ reflect: true }) size: 'sm' | 'base' | 'lg' = 'base';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) error: boolean = false;

  render() {
    return (
      <Host>
        <base-input-group size={this.size} disabled={this.disabled} error={this.error}>
          <slot name="addon-start"></slot>
          <slot></slot>
          <slot name="addon-end"></slot>
        </base-input-group>
      </Host>
    );
  }
}
