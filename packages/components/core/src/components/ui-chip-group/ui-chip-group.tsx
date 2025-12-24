import { Component, Prop, State, Event, EventEmitter, Element, h, Host, Watch, Listen, Method } from '@stencil/core';
import { SelectionManager, createSelectionManager, SelectionItem } from '../../utils/selection-manager';

/**
 * Chip group for tag/chip-based selection
 * @slot - Default slot for ui-chip children
 */
@Component({
  tag: 'ui-chip-group',
  styleUrl: 'ui-chip-group.css',
  shadow: true,
})
export class UiChipGroup {
  @Element() el: HTMLElement;

  /** Selected values */
  @Prop({ mutable: true }) value: string[];

  /** Default values for uncontrolled mode */
  @Prop() defaultValue: string[];

  /** Allow multiple selections (default: true for chips) */
  @Prop() multiple: boolean = true;

  /** Orientation for keyboard navigation */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Whether entire group is disabled */
  @Prop() disabled: boolean = false;

  /** Size variant */
  @Prop() size: 'sm' | 'base' | 'lg' = 'base';

  /** Emitted when selection changes */
  @Event() valueChange: EventEmitter<string[]>;

  /** Emitted when a chip is removed */
  @Event() chipRemove: EventEmitter<string>;

  @State() internalValue: string[] = [];

  private selectionManager: SelectionManager;

  componentWillLoad() {
    this.internalValue = this.value ?? this.defaultValue ?? [];

    this.selectionManager = createSelectionManager({
      multiple: this.multiple,
      orientation: this.orientation,
      onSelectionChange: (value) => {
        const newValue = value as string[];
        this.internalValue = newValue;
        this.valueChange.emit(newValue);
      },
    });

    if (this.internalValue.length > 0) {
      this.selectionManager.setValue(this.internalValue);
    }
  }

  componentDidLoad() {
    this.setupChildren();
  }

  @Watch('value')
  handleValueChange(newValue: string[]) {
    if (newValue !== undefined) {
      this.internalValue = newValue;
      this.selectionManager.setValue(newValue);
      this.syncChipStates();
    }
  }

  @Watch('orientation')
  handleOrientationChange(newOrientation: 'horizontal' | 'vertical') {
    this.selectionManager.updateConfig({ orientation: newOrientation });
  }

  @Watch('multiple')
  handleMultipleChange(newMultiple: boolean) {
    this.selectionManager.updateConfig({ multiple: newMultiple });
    if (!newMultiple && this.internalValue.length > 1) {
      // Keep only first selection when switching to single mode
      this.internalValue = [this.internalValue[0]];
      this.selectionManager.setValue(this.internalValue);
    }
    this.syncChipStates();
  }

  @Watch('disabled')
  handleDisabledChange() {
    this.syncChipStates();
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    // Handle backspace to remove focused chip
    if (event.key === 'Backspace' || event.key === 'Delete') {
      const focusedIndex = this.selectionManager.getFocusedIndex();
      const items = this.selectionManager.getItems();
      const focusedItem = items[focusedIndex];

      if (focusedItem) {
        const chipEl = focusedItem.element as HTMLUiChipElement;
        if (chipEl.removable && !chipEl.disabled && !this.disabled) {
          event.preventDefault();
          this.handleChipRemove(focusedItem.value);
          return;
        }
      }
    }

    this.selectionManager.handleKeyDown(event);
    this.syncChipStates();
  }

  /** Get the selection manager */
  @Method()
  async getSelectionManager(): Promise<SelectionManager> {
    return this.selectionManager;
  }

  /** Get current values */
  @Method()
  async getValue(): Promise<string[]> {
    return this.internalValue;
  }

  private setupChildren() {
    const chips = Array.from(this.el.querySelectorAll('ui-chip')) as HTMLUiChipElement[];

    // Register all chips with selection manager
    const items: SelectionItem[] = chips.map((chip) => ({
      value: chip.value,
      disabled: chip.disabled || this.disabled,
      element: chip,
    }));

    this.selectionManager.setItems(items);
    this.selectionManager.initializeFocus();

    // Set up event listeners
    chips.forEach((chip) => {
      chip.addEventListener('click', (e) => {
        // Don't toggle selection if clicking the remove button
        const target = e.target as HTMLElement;
        if (target.closest('.chip-remove')) return;
        this.handleChipClick(chip.value, chip.disabled);
      });

      chip.addEventListener('remove', (e: CustomEvent) => {
        this.handleChipRemove(e.detail);
      });
    });

    // Sync initial states
    this.syncChipStates();
  }

  private handleChipClick(value: string, disabled: boolean) {
    if (disabled || this.disabled) return;

    this.selectionManager.toggle(value);
    this.syncChipStates();
  }

  private handleChipRemove(value: string) {
    // Deselect the chip if it's selected
    if (this.selectionManager.isSelected(value)) {
      this.selectionManager.deselect(value);
    }

    // Emit remove event for parent to handle
    this.chipRemove.emit(value);
  }

  private syncChipStates() {
    const chips = Array.from(this.el.querySelectorAll('ui-chip')) as HTMLUiChipElement[];

    chips.forEach((chip) => {
      const isSelected = this.selectionManager.isSelected(chip.value);
      const tabIndex = this.selectionManager.getTabIndex(chip.value);
      const isDisabled = chip.disabled || this.disabled;

      // Update attributes
      chip.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      chip.setAttribute('tabindex', String(tabIndex));

      if (isSelected) {
        chip.setAttribute('data-selected', '');
      } else {
        chip.removeAttribute('data-selected');
      }

      if (isDisabled) {
        chip.setAttribute('data-disabled', '');
        chip.setAttribute('aria-disabled', 'true');
      } else {
        chip.removeAttribute('data-disabled');
        chip.removeAttribute('aria-disabled');
      }
    });
  }

  render() {
    return (
      <Host
        role="listbox"
        aria-multiselectable={this.multiple ? 'true' : 'false'}
        aria-orientation={this.orientation}
        aria-disabled={this.disabled ? 'true' : undefined}
        data-orientation={this.orientation}
        data-disabled={this.disabled || undefined}
        class={{
          'chip-group': true,
          [`chip-group--${this.orientation}`]: true,
          [`chip-group--${this.size}`]: true,
          'chip-group--disabled': this.disabled,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
