import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'uefds-textbox',
  styleUrl: 'uefds-textbox.css',
  scoped: true,
})
export class UefdsTextbox {
  @Prop({ mutable: true }) value: string = '';
  @Prop() placeholder: string;
  @Prop() type: string = 'text';
  @Prop() maxlength: number;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() name: string;
  @Prop() required: boolean = false;

  @Event() textboxInput: EventEmitter<string>;
  @Event() textboxChange: EventEmitter<string>;
  @Event() textboxFocus: EventEmitter<void>;
  @Event() textboxBlur: EventEmitter<void>;

  private handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.textboxInput.emit(this.value);
  };

  private handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.textboxChange.emit(this.value);
  };

  private handleFocus = () => {
    this.textboxFocus.emit();
  };

  private handleBlur = () => {
    this.textboxBlur.emit();
  };

  render() {
    return (
      <Host>
        <input
          class="input"
          type={this.type}
          value={this.value}
          placeholder={this.placeholder}
          maxlength={this.maxlength}
          disabled={this.disabled}
          readOnly={this.readonly}
          name={this.name}
          required={this.required}
          onInput={this.handleInput}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </Host>
    );
  }
}
