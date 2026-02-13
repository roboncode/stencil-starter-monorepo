import { Component, Prop, h, Host } from '@stencil/core';

export interface FieldMessage {
  text: string;
  variant: 'danger' | 'warning' | 'info';
}

const DEFAULT_ICONS: Record<string, string> = {
  danger: 'fa-solid fa-circle-exclamation',
  warning: 'fa-solid fa-triangle-exclamation',
  info: 'fa-solid fa-circle-info',
};

@Component({
  tag: 'uefds-field',
  styleUrl: 'uefds-field.css',
  scoped: true,
})
export class UefdsField {
  @Prop() label: string;
  @Prop() required: boolean = false;
  @Prop() instructions: string;
  @Prop() support: string;
  @Prop() messages: FieldMessage[] = [];

  render() {
    return (
      <Host>
        <div class="field">
          {this.label && (
            <label class="field-label">
              <span class="field-label__text">{this.label}</span>
              {this.required && <span class="field-label__required">*</span>}
            </label>
          )}

          {this.instructions && (
            <span class="field__instructions">{this.instructions}</span>
          )}

          <div class="field__control">
            <slot></slot>
          </div>

          {this.messages && this.messages.length > 0 && (
            <div class="field__messages">
              {this.messages.map(msg => (
                <div
                  class={`field-message field-message--${msg.variant}`}
                  role={msg.variant === 'danger' ? 'alert' : 'status'}
                >
                  <uefds-icon name={DEFAULT_ICONS[msg.variant]} size="sm"></uefds-icon>
                  <span>{msg.text}</span>
                </div>
              ))}
            </div>
          )}

          {this.support && (
            <span class="field__support">{this.support}</span>
          )}
        </div>
      </Host>
    );
  }
}
