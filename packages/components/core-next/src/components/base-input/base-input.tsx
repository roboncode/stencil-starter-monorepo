import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'base-input',
  styleUrl: 'base-input.css',
  scoped: true,
})
export class BaseInput {
  @Prop({ mutable: true }) value: string = '';
  @Prop() placeholder: string;
  @Prop() type: string = 'text';
  @Prop() maxlength: number;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() name: string;
  @Prop() required: boolean = false;

  @Event() inputInput: EventEmitter<string>;
  @Event() inputChange: EventEmitter<string>;
  @Event() inputFocus: EventEmitter<void>;
  @Event() inputBlur: EventEmitter<void>;

  private handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.inputInput.emit(this.value);
  };

  private handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.inputChange.emit(this.value);
  };

  private handleFocus = () => {
    this.inputFocus.emit();
  };

  private handleBlur = () => {
    this.inputBlur.emit();
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
