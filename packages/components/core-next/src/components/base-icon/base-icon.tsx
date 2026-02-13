import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'base-icon',
  styleUrl: 'base-icon.css',
  scoped: true,
})
export class BaseIcon {
  @Prop() name: string;

  render() {
    if (this.name) {
      return <i class={this.name}></i>;
    }
    return <slot></slot>;
  }
}
