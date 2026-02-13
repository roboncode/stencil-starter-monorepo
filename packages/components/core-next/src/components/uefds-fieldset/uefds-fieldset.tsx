import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'uefds-fieldset',
  styleUrl: 'uefds-fieldset.css',
  scoped: true,
})
export class UefdsFieldset {
  render() {
    return (
      <Host>
        <fieldset class="fieldset">
          <slot name="legend"></slot>
          <slot></slot>
        </fieldset>
      </Host>
    );
  }
}
