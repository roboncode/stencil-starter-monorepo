import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'base-field-label',
  styleUrl: 'base-field-label.css',
  scoped: true,
})
export class BaseFieldLabel {
  @Prop() required: boolean = false;

  render() {
    return (
      <Host>
        <label class="field-label">
          <base-label>
            <slot></slot>
          </base-label>
          {this.required && <span class="required-indicator">*</span>}
        </label>
      </Host>
    );
  }
}
