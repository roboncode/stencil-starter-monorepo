import { Component, Prop, State, Event, EventEmitter, Element, h, Host, Watch, Listen, Method } from '@stencil/core';
import { SelectionManager, createSelectionManager, SelectionItem } from '../../utils/selection-manager';

/**
 * Radio group container for single selection
 * @slot - Default slot for ui-radio children
 */
@Component({
  tag: 'ui-radio-group',
  styleUrl: 'ui-radio-group.css',
  shadow: true,
})
export class UiRadioGroup {
  @Element() el: HTMLElement;

  /** Currently selected value */
  @Prop({ mutable: true }) value: string;

  /** Default value for uncontrolled mode */
  @Prop() defaultValue: string;

  /** Name for form submission */
  @Prop() name: string;

  /** Orientation for layout and keyboard navigation */
  @Prop() orientation: 'horizontal' | 'vertical' = 'vertical';

  /** Whether entire group is disabled */
  @Prop() disabled: boolean = false;

  /** Required for form validation */
  @Prop() required: boolean = false;

  /** Size variant */
  @Prop() size: 'sm' | 'base' | 'lg' = 'base';

  /** Emitted when selection changes */
  @Event() valueChange: EventEmitter<string>;

  @State() internalValue: string = '';

  private selectionManager: SelectionManager;

  componentWillLoad() {
    this.internalValue = this.value ?? this.defaultValue ?? '';
    this.selectionManager = createSelectionManager({
      multiple: false,
      orientation: this.orientation,
      onSelectionChange: (value) => {
        const newValue = value as string;
        this.internalValue = newValue;
        this.valueChange.emit(newValue);
      },
    });

    if (this.internalValue) {
      this.selectionManager.setValue(this.internalValue);
    }
  }

  componentDidLoad() {
    this.setupChildren();
  }

  @Watch('value')
  handleValueChange(newValue: string) {
    if (newValue !== undefined && newValue !== this.internalValue) {
      this.internalValue = newValue;
      this.selectionManager.setValue(newValue);
      this.syncRadioStates();
    }
  }

  @Watch('orientation')
  handleOrientationChange(newOrientation: 'horizontal' | 'vertical') {
    this.selectionManager.updateConfig({ orientation: newOrientation });
  }

  @Watch('disabled')
  handleDisabledChange() {
    this.syncRadioStates();
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    this.selectionManager.handleKeyDown(event);
    this.syncRadioStates();
  }

  /** Get the selection manager */
  @Method()
  async getSelectionManager(): Promise<SelectionManager> {
    return this.selectionManager;
  }

  /** Get current value */
  @Method()
  async getValue(): Promise<string> {
    return this.internalValue;
  }

  private setupChildren() {
    const radios = Array.from(this.el.querySelectorAll('ui-radio')) as HTMLUiRadioElement[];

    // Register all radios with selection manager
    const items: SelectionItem[] = radios.map((radio) => ({
      value: radio.value,
      disabled: radio.disabled || this.disabled,
      element: radio,
    }));

    this.selectionManager.setItems(items);
    this.selectionManager.initializeFocus();

    // Set up event listeners
    radios.forEach((radio) => {
      radio.addEventListener('click', () => this.handleRadioClick(radio.value, radio.disabled));
    });

    // Sync initial states
    this.syncRadioStates();
  }

  private handleRadioClick(value: string, disabled: boolean) {
    if (disabled || this.disabled) return;

    this.selectionManager.select(value);
    this.syncRadioStates();
  }

  private syncRadioStates() {
    const radios = Array.from(this.el.querySelectorAll('ui-radio')) as HTMLUiRadioElement[];

    radios.forEach((radio) => {
      const isSelected = this.selectionManager.isSelected(radio.value);
      const tabIndex = this.selectionManager.getTabIndex(radio.value);
      const isDisabled = radio.disabled || this.disabled;

      // Update attributes
      radio.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      radio.setAttribute('tabindex', String(tabIndex));

      if (isSelected) {
        radio.setAttribute('data-selected', '');
      } else {
        radio.removeAttribute('data-selected');
      }

      if (isDisabled) {
        radio.setAttribute('data-disabled', '');
        radio.setAttribute('aria-disabled', 'true');
      } else {
        radio.removeAttribute('data-disabled');
        radio.removeAttribute('aria-disabled');
      }
    });
  }

  render() {
    return (
      <Host
        role="radiogroup"
        aria-orientation={this.orientation}
        aria-disabled={this.disabled ? 'true' : undefined}
        aria-required={this.required ? 'true' : undefined}
        data-orientation={this.orientation}
        data-disabled={this.disabled || undefined}
        class={{
          'radio-group': true,
          [`radio-group--${this.orientation}`]: true,
          [`radio-group--${this.size}`]: true,
          'radio-group--disabled': this.disabled,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
