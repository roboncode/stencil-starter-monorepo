import { Component, Prop, State, Event, EventEmitter, Element, h, Host, Watch, Listen, Method } from '@stencil/core';
import { SelectionManager, createSelectionManager, SelectionItem, SelectionValue } from '../../utils/selection-manager';

/**
 * Toggle group for button-based selection
 * @slot - Default slot for ui-toggle children
 */
@Component({
  tag: 'ui-toggle-group',
  styleUrl: 'ui-toggle-group.css',
  shadow: true,
})
export class UiToggleGroup {
  @Element() el: HTMLElement;

  /** Selected value(s) - string for single, string[] for multiple */
  @Prop({ mutable: true }) value: string | string[];

  /** Default value for uncontrolled mode */
  @Prop() defaultValue: string | string[];

  /** Allow multiple selections */
  @Prop() multiple: boolean = false;

  /** Orientation for layout and keyboard navigation */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Whether entire group is disabled */
  @Prop() disabled: boolean = false;

  /** Visual variant */
  @Prop() variant: 'default' | 'outline' = 'default';

  /** Size variant */
  @Prop() size: 'sm' | 'base' | 'lg' = 'base';

  /** Emitted when selection changes */
  @Event() valueChange: EventEmitter<SelectionValue>;

  @State() internalValue: SelectionValue;

  private selectionManager: SelectionManager;

  componentWillLoad() {
    const defaultVal = this.multiple ? [] : '';
    this.internalValue = this.value ?? this.defaultValue ?? defaultVal;

    this.selectionManager = createSelectionManager({
      multiple: this.multiple,
      orientation: this.orientation,
      onSelectionChange: (value) => {
        this.internalValue = value;
        this.valueChange.emit(value);
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
  handleValueChange(newValue: SelectionValue) {
    if (newValue !== undefined) {
      this.internalValue = newValue;
      this.selectionManager.setValue(newValue);
      this.syncToggleStates();
    }
  }

  @Watch('orientation')
  handleOrientationChange(newOrientation: 'horizontal' | 'vertical') {
    this.selectionManager.updateConfig({ orientation: newOrientation });
  }

  @Watch('multiple')
  handleMultipleChange(newMultiple: boolean) {
    this.selectionManager.updateConfig({ multiple: newMultiple });
    // Reset value when switching modes
    if (newMultiple && typeof this.internalValue === 'string') {
      this.internalValue = this.internalValue ? [this.internalValue] : [];
    } else if (!newMultiple && Array.isArray(this.internalValue)) {
      this.internalValue = this.internalValue[0] || '';
    }
    this.selectionManager.setValue(this.internalValue);
    this.syncToggleStates();
  }

  @Watch('disabled')
  handleDisabledChange() {
    this.syncToggleStates();
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    this.selectionManager.handleKeyDown(event);
    this.syncToggleStates();
  }

  /** Get the selection manager */
  @Method()
  async getSelectionManager(): Promise<SelectionManager> {
    return this.selectionManager;
  }

  /** Get current value */
  @Method()
  async getValue(): Promise<SelectionValue> {
    return this.internalValue;
  }

  private setupChildren() {
    const toggles = Array.from(this.el.querySelectorAll('ui-toggle')) as HTMLUiToggleElement[];

    // Register all toggles with selection manager
    const items: SelectionItem[] = toggles.map((toggle) => ({
      value: toggle.value,
      disabled: toggle.disabled || this.disabled,
      element: toggle,
    }));

    this.selectionManager.setItems(items);
    this.selectionManager.initializeFocus();

    // Set up event listeners
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', () => this.handleToggleClick(toggle.value, toggle.disabled));
    });

    // Sync initial states
    this.syncToggleStates();
  }

  private handleToggleClick(value: string, disabled: boolean) {
    if (disabled || this.disabled) return;

    this.selectionManager.toggle(value);
    this.syncToggleStates();
  }

  private syncToggleStates() {
    const toggles = Array.from(this.el.querySelectorAll('ui-toggle')) as HTMLUiToggleElement[];

    toggles.forEach((toggle) => {
      const isSelected = this.selectionManager.isSelected(toggle.value);
      const tabIndex = this.selectionManager.getTabIndex(toggle.value);
      const isDisabled = toggle.disabled || this.disabled;

      // Update attributes
      toggle.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      toggle.setAttribute('tabindex', String(tabIndex));

      if (isSelected) {
        toggle.setAttribute('data-selected', '');
      } else {
        toggle.removeAttribute('data-selected');
      }

      if (isDisabled) {
        toggle.setAttribute('data-disabled', '');
        toggle.setAttribute('aria-disabled', 'true');
      } else {
        toggle.removeAttribute('data-disabled');
        toggle.removeAttribute('aria-disabled');
      }
    });
  }

  render() {
    return (
      <Host
        role="group"
        aria-orientation={this.orientation}
        aria-disabled={this.disabled ? 'true' : undefined}
        data-orientation={this.orientation}
        data-disabled={this.disabled || undefined}
        class={{
          'toggle-group': true,
          [`toggle-group--${this.orientation}`]: true,
          [`toggle-group--${this.variant}`]: true,
          [`toggle-group--${this.size}`]: true,
          'toggle-group--disabled': this.disabled,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
