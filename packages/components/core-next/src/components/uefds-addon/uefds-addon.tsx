import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'uefds-addon',
  styleUrl: 'uefds-addon.css',
  scoped: true,
})
export class UefdsAddon {
  @Prop({ reflect: true }) align: 'start' | 'end' = 'start';
  @Prop({ reflect: true }) variant: 'default' | 'muted' | 'transparent' = 'default';
  @Prop({ reflect: true }) clickable: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;

  render() {
    const classes = {
      'addon': true,
      [`addon--${this.variant}`]: true,
      [`addon--${this.align}`]: true,
      'addon--clickable': this.clickable,
      'addon--disabled': this.disabled,
    };

    if (this.clickable) {
      return (
        <Host>
          <button class={classes} disabled={this.disabled} type="button">
            <slot></slot>
          </button>
        </Host>
      );
    }

    return (
      <Host>
        <div class={classes}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
