/**
 * SelectionManager - Shared selection logic for selection-based components
 *
 * Handles:
 * - Single and multi-selection state
 * - Keyboard navigation (arrow keys, home/end, enter/space)
 * - Roving tabindex for accessibility
 * - Item registration and focus management
 */

export type SelectionValue = string | string[];

export interface SelectionItem {
  value: string;
  disabled: boolean;
  element: HTMLElement;
}

export interface SelectionManagerConfig {
  /** Allow multiple selections */
  multiple: boolean;
  /** Keyboard navigation direction */
  orientation: 'horizontal' | 'vertical';
  /** Whether keyboard nav loops around at boundaries */
  loop: boolean;
  /** Callback when selection changes */
  onSelectionChange?: (value: SelectionValue) => void;
  /** Callback when focus changes */
  onFocusChange?: (index: number, item: SelectionItem | null) => void;
}

/**
 * Manages selection state and keyboard navigation for selection-based components
 */
export class SelectionManager {
  private config: SelectionManagerConfig;
  private selectedValues: Set<string>;
  private focusedIndex: number;
  private items: SelectionItem[];

  constructor(config: Partial<SelectionManagerConfig> = {}) {
    this.config = {
      multiple: false,
      orientation: 'horizontal',
      loop: true,
      ...config,
    };
    this.selectedValues = new Set();
    this.focusedIndex = -1;
    this.items = [];
  }

  // ============================================
  // Item Registration
  // ============================================

  /**
   * Register a selectable item
   */
  registerItem(item: SelectionItem): void {
    const existingIndex = this.items.findIndex(i => i.value === item.value);
    if (existingIndex >= 0) {
      this.items[existingIndex] = item;
    } else {
      this.items.push(item);
    }
  }

  /**
   * Unregister an item by value
   */
  unregisterItem(value: string): void {
    const index = this.items.findIndex(i => i.value === value);
    if (index >= 0) {
      this.items.splice(index, 1);
      // Adjust focused index if needed
      if (this.focusedIndex >= this.items.length) {
        this.focusedIndex = Math.max(0, this.items.length - 1);
      }
    }
  }

  /**
   * Update all items at once
   */
  setItems(items: SelectionItem[]): void {
    this.items = [...items];
    // Reset focused index if out of bounds
    if (this.focusedIndex >= this.items.length) {
      this.focusedIndex = this.items.length > 0 ? 0 : -1;
    }
  }

  /**
   * Get all registered items
   */
  getItems(): SelectionItem[] {
    return [...this.items];
  }

  /**
   * Get item by value
   */
  getItem(value: string): SelectionItem | undefined {
    return this.items.find(i => i.value === value);
  }

  // ============================================
  // Selection Logic
  // ============================================

  /**
   * Select an item by value
   */
  select(value: string): SelectionValue {
    const item = this.getItem(value);
    if (!item || item.disabled) {
      return this.getValue();
    }

    if (this.config.multiple) {
      this.selectedValues.add(value);
    } else {
      this.selectedValues.clear();
      this.selectedValues.add(value);
    }

    this.notifySelectionChange();
    return this.getValue();
  }

  /**
   * Deselect an item by value
   */
  deselect(value: string): SelectionValue {
    this.selectedValues.delete(value);
    this.notifySelectionChange();
    return this.getValue();
  }

  /**
   * Toggle selection of an item
   */
  toggle(value: string): SelectionValue {
    const item = this.getItem(value);
    if (!item || item.disabled) {
      return this.getValue();
    }

    if (this.isSelected(value)) {
      // In single-select mode, don't allow deselecting the only selected item
      // unless there are other items to select
      if (!this.config.multiple && this.selectedValues.size === 1) {
        return this.getValue();
      }
      return this.deselect(value);
    } else {
      return this.select(value);
    }
  }

  /**
   * Select all non-disabled items (multi-select only)
   */
  selectAll(): SelectionValue {
    if (!this.config.multiple) {
      return this.getValue();
    }

    this.items.forEach(item => {
      if (!item.disabled) {
        this.selectedValues.add(item.value);
      }
    });

    this.notifySelectionChange();
    return this.getValue();
  }

  /**
   * Deselect all items
   */
  deselectAll(): SelectionValue {
    this.selectedValues.clear();
    this.notifySelectionChange();
    return this.getValue();
  }

  /**
   * Check if a value is selected
   */
  isSelected(value: string): boolean {
    return this.selectedValues.has(value);
  }

  // ============================================
  // Value Management
  // ============================================

  /**
   * Set the selection value(s)
   */
  setValue(value: SelectionValue): void {
    this.selectedValues.clear();

    if (Array.isArray(value)) {
      if (this.config.multiple) {
        value.forEach(v => this.selectedValues.add(v));
      } else if (value.length > 0) {
        this.selectedValues.add(value[0]);
      }
    } else if (value) {
      this.selectedValues.add(value);
    }
  }

  /**
   * Get the current selection value(s)
   */
  getValue(): SelectionValue {
    const values = Array.from(this.selectedValues);
    return this.config.multiple ? values : (values[0] || '');
  }

  /**
   * Get selected values as an array
   */
  getSelectedValues(): string[] {
    return Array.from(this.selectedValues);
  }

  // ============================================
  // Keyboard Navigation
  // ============================================

  /**
   * Handle keyboard events for navigation and selection
   */
  handleKeyDown(event: KeyboardEvent): boolean {
    const { orientation } = this.config;
    const isHorizontal = orientation === 'horizontal';

    switch (event.key) {
      case 'ArrowRight':
        if (isHorizontal) {
          event.preventDefault();
          this.focusNext();
          return true;
        }
        break;

      case 'ArrowLeft':
        if (isHorizontal) {
          event.preventDefault();
          this.focusPrevious();
          return true;
        }
        break;

      case 'ArrowDown':
        if (!isHorizontal) {
          event.preventDefault();
          this.focusNext();
          return true;
        }
        break;

      case 'ArrowUp':
        if (!isHorizontal) {
          event.preventDefault();
          this.focusPrevious();
          return true;
        }
        break;

      case 'Home':
        event.preventDefault();
        this.focusFirst();
        return true;

      case 'End':
        event.preventDefault();
        this.focusLast();
        return true;

      case ' ':
      case 'Enter':
        event.preventDefault();
        const focusedItem = this.items[this.focusedIndex];
        if (focusedItem && !focusedItem.disabled) {
          this.toggle(focusedItem.value);
        }
        return true;
    }

    return false;
  }

  /**
   * Move focus to the next non-disabled item
   */
  focusNext(): void {
    const enabledItems = this.getEnabledItemIndices();
    if (enabledItems.length === 0) return;

    const currentIndex = enabledItems.indexOf(this.focusedIndex);
    let nextIndex: number;

    if (currentIndex === -1 || currentIndex === enabledItems.length - 1) {
      nextIndex = this.config.loop ? enabledItems[0] : enabledItems[enabledItems.length - 1];
    } else {
      nextIndex = enabledItems[currentIndex + 1];
    }

    this.setFocusedIndex(nextIndex);
  }

  /**
   * Move focus to the previous non-disabled item
   */
  focusPrevious(): void {
    const enabledItems = this.getEnabledItemIndices();
    if (enabledItems.length === 0) return;

    const currentIndex = enabledItems.indexOf(this.focusedIndex);
    let prevIndex: number;

    if (currentIndex === -1 || currentIndex === 0) {
      prevIndex = this.config.loop ? enabledItems[enabledItems.length - 1] : enabledItems[0];
    } else {
      prevIndex = enabledItems[currentIndex - 1];
    }

    this.setFocusedIndex(prevIndex);
  }

  /**
   * Move focus to the first non-disabled item
   */
  focusFirst(): void {
    const enabledItems = this.getEnabledItemIndices();
    if (enabledItems.length > 0) {
      this.setFocusedIndex(enabledItems[0]);
    }
  }

  /**
   * Move focus to the last non-disabled item
   */
  focusLast(): void {
    const enabledItems = this.getEnabledItemIndices();
    if (enabledItems.length > 0) {
      this.setFocusedIndex(enabledItems[enabledItems.length - 1]);
    }
  }

  /**
   * Get the currently focused index
   */
  getFocusedIndex(): number {
    return this.focusedIndex;
  }

  /**
   * Set the focused index and notify
   */
  setFocusedIndex(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.focusedIndex = index;
      const item = this.items[index];

      // Focus the actual element
      if (item?.element) {
        item.element.focus();
      }

      this.config.onFocusChange?.(index, item || null);
    }
  }

  /**
   * Set focus by value
   */
  focusByValue(value: string): void {
    const index = this.items.findIndex(i => i.value === value);
    if (index >= 0) {
      this.setFocusedIndex(index);
    }
  }

  // ============================================
  // Roving Tabindex
  // ============================================

  /**
   * Get the tabindex for an item (0 for focused, -1 for others)
   */
  getTabIndex(value: string): number {
    const index = this.items.findIndex(i => i.value === value);

    // If nothing is focused yet, make the first enabled item or selected item focusable
    if (this.focusedIndex === -1) {
      // Prefer the selected item
      if (this.isSelected(value)) {
        return 0;
      }
      // Otherwise, first enabled item
      const firstEnabled = this.items.findIndex(i => !i.disabled);
      if (index === firstEnabled) {
        return 0;
      }
    }

    return index === this.focusedIndex ? 0 : -1;
  }

  /**
   * Initialize focus to the selected item or first enabled item
   */
  initializeFocus(): void {
    // Try to focus the first selected item
    const selectedIndex = this.items.findIndex(i => this.isSelected(i.value) && !i.disabled);
    if (selectedIndex >= 0) {
      this.focusedIndex = selectedIndex;
      return;
    }

    // Fall back to first enabled item
    const firstEnabled = this.items.findIndex(i => !i.disabled);
    if (firstEnabled >= 0) {
      this.focusedIndex = firstEnabled;
    }
  }

  // ============================================
  // Configuration
  // ============================================

  /**
   * Update configuration
   */
  updateConfig(config: Partial<SelectionManagerConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Get current configuration
   */
  getConfig(): SelectionManagerConfig {
    return { ...this.config };
  }

  // ============================================
  // Private Helpers
  // ============================================

  private getEnabledItemIndices(): number[] {
    return this.items
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => !item.disabled)
      .map(({ index }) => index);
  }

  private notifySelectionChange(): void {
    this.config.onSelectionChange?.(this.getValue());
  }
}

/**
 * Factory function to create a SelectionManager
 */
export function createSelectionManager(config?: Partial<SelectionManagerConfig>): SelectionManager {
  return new SelectionManager(config);
}
