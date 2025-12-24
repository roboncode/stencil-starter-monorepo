import { Component, Prop, Element, h, Host } from '@stencil/core';

/**
 * Tab panel content container
 * @slot - Default slot for panel content
 */
@Component({
  tag: 'ui-tab-panel',
  styleUrl: 'ui-tab-panel.css',
  shadow: true,
})
export class UiTabPanel {
  @Element() el: HTMLElement;

  /** Value matching the corresponding tab */
  @Prop() value!: string;

  render() {
    return (
      <Host
        role="tabpanel"
        class="tab-panel"
      >
        <slot></slot>
      </Host>
    );
  }
}
