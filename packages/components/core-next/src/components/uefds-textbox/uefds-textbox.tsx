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

  private handleInput = (e: CustomEvent<string>) => {
    this.value = e.detail;
    this.textboxInput.emit(this.value);
  };

  private handleChange = (e: CustomEvent<string>) => {
    this.value = e.detail;
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
        <base-input
          value={this.value}
          placeholder={this.placeholder}
          type={this.type}
          maxlength={this.maxlength}
          disabled={this.disabled}
          readonly={this.readonly}
          name={this.name}
          required={this.required}
          onInputInput={this.handleInput}
          onInputChange={this.handleChange}
          onInputFocus={this.handleFocus}
          onInputBlur={this.handleBlur}
        ></base-input>
      </Host>
    );
  }
}
