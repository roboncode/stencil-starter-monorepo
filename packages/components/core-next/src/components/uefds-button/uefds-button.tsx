import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'uefds-button',
  styleUrl: 'uefds-button.css',
  scoped: true,
})
export class UefdsButton {
  @Prop() text: string;
  @Prop() iconStart: string;
  @Prop() iconEnd: string;
  @Prop({ reflect: true }) busy: boolean = false;
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() type: 'button' | 'submit' | 'reset' | 'clear' = 'button';
  @Prop({ reflect: true }) variant: 'outline' | 'solid' | 'subtle' | 'link' = 'solid';
  @Prop({ reflect: true }) color: 'theme' | 'success' | 'warning' | 'danger' | 'info' = 'theme';
  @Prop({ reflect: true }) direction: 'vertical' | 'horizontal' = 'horizontal';
  @Prop({ reflect: true }) disabled: boolean = false;

  render() {
    const buttonType = this.type === 'clear' ? 'button' : this.type;
    const isDisabled = this.disabled || this.busy;

    return (
      <Host
        class={{
          [`btn--${this.size}`]: true,
          [`btn--${this.variant}`]: true,
          [`btn--${this.color}`]: true,
          [`btn--${this.direction}`]: true,
          'btn--busy': this.busy,
        }}
      >
        <base-button type={buttonType} disabled={isDisabled}>
          {this.busy && (
            <base-icon name="fa-solid fa-spinner fa-spin"></base-icon>
          )}
          {!this.busy && this.iconStart && (
            <base-icon name={this.iconStart}></base-icon>
          )}
          {this.text && <base-label>{this.text}</base-label>}
          <slot></slot>
          {!this.busy && this.iconEnd && (
            <base-icon name={this.iconEnd}></base-icon>
          )}
        </base-button>
      </Host>
    );
  }
}
