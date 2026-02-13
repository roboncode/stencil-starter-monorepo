import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'base-button',
  styleUrl: 'base-button.css',
  scoped: true,
})
export class BaseButton {
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop({ reflect: true }) disabled: boolean = false;

  @Event() buttonClick: EventEmitter<MouseEvent>;

  private handleClick = (e: MouseEvent) => {
    if (!this.disabled) {
      this.buttonClick.emit(e);
    }
  };

  render() {
    return (
      <Host>
        <button
          type={this.type}
          disabled={this.disabled}
          onClick={this.handleClick}
          class="button"
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
