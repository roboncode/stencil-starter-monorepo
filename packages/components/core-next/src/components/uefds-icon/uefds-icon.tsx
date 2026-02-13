import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'uefds-icon',
  styleUrl: 'uefds-icon.css',
  scoped: true,
})
export class UefdsIcon {
  @Prop() name: string;
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  render() {
    return (
      <Host class={`icon--${this.size}`}>
        {this.name ? <i class={this.name}></i> : <slot></slot>}
      </Host>
    );
  }
}
