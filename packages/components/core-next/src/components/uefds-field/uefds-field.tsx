import { Component, Prop, h, Host } from '@stencil/core';

export interface FieldMessage {
  text: string;
  variant: 'danger' | 'warning' | 'info';
}

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
            <base-field-label required={this.required}>
              {this.label}
            </base-field-label>
          )}

          {this.instructions && (
            <base-text class="field__instructions">{this.instructions}</base-text>
          )}

          <div class="field__control">
            <slot></slot>
          </div>

          {this.messages && this.messages.length > 0 && (
            <div class="field__messages">
              {this.messages.map(msg => (
                <base-field-message variant={msg.variant}>
                  {msg.text}
                </base-field-message>
              ))}
            </div>
          )}

          {this.support && (
            <base-text class="field__support">{this.support}</base-text>
          )}
        </div>
      </Host>
    );
  }
}
