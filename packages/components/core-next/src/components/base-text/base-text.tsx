import { Component, h } from '@stencil/core';

@Component({
  tag: 'base-text',
  styleUrl: 'base-text.css',
  scoped: true,
})
export class BaseText {
  render() {
    return <slot></slot>;
  }
}
