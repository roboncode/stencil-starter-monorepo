import { Component, Prop, h, Host } from '@stencil/core';

const DEFAULT_ICONS: Record<string, string> = {
  danger: 'fa-solid fa-circle-exclamation',
  warning: 'fa-solid fa-triangle-exclamation',
  info: 'fa-solid fa-circle-info',
};

@Component({
  tag: 'base-field-message',
  styleUrl: 'base-field-message.css',
  scoped: true,
})
export class BaseFieldMessage {
  @Prop() variant: 'danger' | 'warning' | 'info' = 'danger';
  @Prop() icon: string;

  render() {
    const iconName = this.icon || DEFAULT_ICONS[this.variant];
    const role = this.variant === 'danger' ? 'alert' : 'status';

    return (
      <Host class={`field-message--${this.variant}`} role={role}>
        <base-icon name={iconName}></base-icon>
        <base-text>
          <slot></slot>
        </base-text>
      </Host>
    );
  }
}
