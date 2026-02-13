import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

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

  @Event() buttonClick: EventEmitter<MouseEvent>;

  private handleClick = (e: MouseEvent) => {
    if (!this.disabled && !this.busy) {
      this.buttonClick.emit(e);
    }
  };

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
        <button
          type={buttonType}
          disabled={isDisabled}
          onClick={this.handleClick}
          class="button"
        >
          {this.busy && (
            <uefds-icon name="fa-solid fa-spinner fa-spin"></uefds-icon>
          )}
          {!this.busy && this.iconStart && (
            <uefds-icon name={this.iconStart}></uefds-icon>
          )}
          {this.text && <span class="btn__label">{this.text}</span>}
          <slot></slot>
          {!this.busy && this.iconEnd && (
            <uefds-icon name={this.iconEnd}></uefds-icon>
          )}
        </button>
      </Host>
    );
  }
}
