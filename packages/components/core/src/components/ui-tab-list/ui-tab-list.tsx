import { Component, Prop, Element, h, Host } from '@stencil/core';

/**
 * Container for tab triggers
 * @slot - Default slot for ui-tab children
 */
@Component({
  tag: 'ui-tab-list',
  styleUrl: 'ui-tab-list.css',
  shadow: true,
})
export class UiTabList {
  @Element() el: HTMLElement;

  /** Visual variant */
  @Prop() variant: 'default' | 'pills' | 'underline' = 'default';

  /** Whether tabs should stretch to fill container */
  @Prop() stretch: boolean = false;

  render() {
    return (
      <Host
        role="tablist"
        class={{
          'tab-list': true,
          [`tab-list--${this.variant}`]: true,
          'tab-list--stretch': this.stretch,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
