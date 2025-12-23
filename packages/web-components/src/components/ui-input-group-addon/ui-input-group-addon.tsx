import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ui-input-group-addon',
  styleUrl: 'ui-input-group-addon.css',
  shadow: true,
})
export class UiInputGroupAddon {
  /**
   * Alignment of the addon (inline-start = left, inline-end = right)
   */
  @Prop() align: 'inline-start' | 'inline-end' = 'inline-start';

  /**
   * Visual variant of the addon
   */
  @Prop() variant: 'default' | 'muted' | 'transparent' = 'default';

  /**
   * Whether to render as a clickable button
   */
  @Prop() clickable: boolean = false;

  /**
   * Whether the addon is disabled (when clickable)
   */
  @Prop() disabled: boolean = false;

  render() {
    const Tag = this.clickable ? 'button' : 'div';

    return (
      <Host
        class={{
          'addon': true,
          [`addon--${this.align}`]: true,
          [`addon--${this.variant}`]: true,
          'addon--clickable': this.clickable,
          'addon--disabled': this.disabled,
        }}
      >
        <Tag
          class="addon-content"
          disabled={this.clickable ? this.disabled : undefined}
          type={this.clickable ? 'button' : undefined}
        >
          <slot></slot>
        </Tag>
      </Host>
    );
  }
}
