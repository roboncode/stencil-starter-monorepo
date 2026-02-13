import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'uefds-form',
  styleUrl: 'uefds-form.css',
  scoped: true,
})
export class UefdsForm {
  render() {
    return (
      <Host>
        <form>
          <slot></slot>
        </form>
      </Host>
    );
  }
}
