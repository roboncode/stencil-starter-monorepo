import { Component, Prop, Event, EventEmitter, h, Host, Element, State, Watch } from '@stencil/core';

@Component({
  tag: 'ui-input-group-input',
  styleUrl: 'ui-input-group-input.css',
  shadow: true,
})
export class UiInputGroupInput {
  @Element() el: HTMLElement;

  /**
   * The input value
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * Placeholder text
   */
  @Prop() placeholder: string = '';

  /**
   * Input type
   */
  @Prop() type: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number' = 'text';

  /**
   * Whether the input is disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * Whether the input is readonly
   */
  @Prop() readonly: boolean = false;

  /**
   * Name attribute for the input
   */
  @Prop() name: string;

  /**
   * Whether the input is required
   */
  @Prop() required: boolean = false;

  /**
   * Autocomplete attribute
   */
  @Prop() autocomplete: string = 'off';

  /**
   * Emitted when the value changes
   */
  @Event() inputChange: EventEmitter<string>;

  /**
   * Emitted when input receives input event
   */
  @Event() inputInput: EventEmitter<string>;

  /**
   * Emitted when input receives focus
   */
  @Event() inputFocus: EventEmitter<void>;

  /**
   * Emitted when input loses focus
   */
  @Event() inputBlur: EventEmitter<void>;

  @State() hasFocus: boolean = false;

  private inputEl: HTMLInputElement;

  @Watch('value')
  valueChanged(newValue: string) {
    if (this.inputEl && this.inputEl.value !== newValue) {
      this.inputEl.value = newValue;
    }
  }

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.inputInput.emit(this.value);
  };

  private handleChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.inputChange.emit(this.value);
  };

  private handleFocus = () => {
    this.hasFocus = true;
    this.inputFocus.emit();
  };

  private handleBlur = () => {
    this.hasFocus = false;
    this.inputBlur.emit();
  };

  /**
   * Sets focus on the input element
   */
  async setFocus() {
    this.inputEl?.focus();
  }

  render() {
    return (
      <Host
        class={{
          'input-wrapper': true,
          'input-wrapper--focused': this.hasFocus,
          'input-wrapper--disabled': this.disabled,
        }}
      >
        <input
          ref={(el) => (this.inputEl = el)}
          class="input"
          type={this.type}
          value={this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          readOnly={this.readonly}
          name={this.name}
          required={this.required}
          autoComplete={this.autocomplete}
          onInput={this.handleInput}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </Host>
    );
  }
}
