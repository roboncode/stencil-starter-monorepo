import { Component, h } from '@stencil/core';

@Component({
  tag: 'base-label',
  styleUrl: 'base-label.css',
  scoped: true,
})
export class BaseLabel {
  render() {
    return <slot></slot>;
  }
}
