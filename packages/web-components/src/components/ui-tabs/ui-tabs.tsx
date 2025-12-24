import { Component, Prop, State, Event, EventEmitter, Element, h, Host, Watch, Method } from '@stencil/core';
import { SelectionManager, createSelectionManager, SelectionItem } from '../../utils/selection-manager';

/**
 * @slot - Default slot for ui-tab-list and ui-tab-panel children
 */
@Component({
  tag: 'ui-tabs',
  styleUrl: 'ui-tabs.css',
  shadow: true,
})
export class UiTabs {
  @Element() el: HTMLElement;

  /** Currently selected tab value */
  @Prop({ mutable: true }) value: string;

  /** Default value for uncontrolled mode */
  @Prop() defaultValue: string;

  /** Orientation for keyboard navigation and layout */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Whether tabs activate on focus (automatic) or require selection (manual) */
  @Prop() activationMode: 'automatic' | 'manual' = 'automatic';

  /** Emitted when the selected tab changes */
  @Event() valueChange: EventEmitter<string>;

  @State() internalValue: string = '';

  private selectionManager: SelectionManager;
  private tabListEl: HTMLUiTabListElement | null = null;

  componentWillLoad() {
    this.internalValue = this.value ?? this.defaultValue ?? '';
    this.selectionManager = createSelectionManager({
      multiple: false,
      orientation: this.orientation,
      onSelectionChange: (value) => {
        const newValue = value as string;
        this.internalValue = newValue;
        if (this.value === undefined) {
          // Uncontrolled mode
          this.valueChange.emit(newValue);
        } else {
          // Controlled mode - just emit, parent handles state
          this.valueChange.emit(newValue);
        }
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
      this.syncTabStates();
      this.syncPanelStates();
    }
  }

  @Watch('orientation')
  handleOrientationChange(newOrientation: 'horizontal' | 'vertical') {
    this.selectionManager.updateConfig({ orientation: newOrientation });
  }

  /** Get the selection manager (for child components) */
  @Method()
  async getSelectionManager(): Promise<SelectionManager> {
    return this.selectionManager;
  }

  /** Get the current value */
  @Method()
  async getValue(): Promise<string> {
    return this.internalValue;
  }

  private setupChildren() {
    // Find and setup tab-list
    this.tabListEl = this.el.querySelector('ui-tab-list');
    if (this.tabListEl) {
      this.setupTabList();
    }

    // Initial panel sync
    this.syncPanelStates();
  }

  private setupTabList() {
    const tabs = Array.from(this.el.querySelectorAll('ui-tab')) as HTMLUiTabElement[];

    // Register all tabs with the selection manager
    const items: SelectionItem[] = tabs.map((tab) => ({
      value: tab.value,
      disabled: tab.disabled,
      element: tab,
    }));

    this.selectionManager.setItems(items);
    this.selectionManager.initializeFocus();

    // Set up event listeners on tabs
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => this.handleTabClick(tab.value, tab.disabled));
      tab.addEventListener('keydown', (e) => this.handleTabKeyDown(e as KeyboardEvent));
    });

    // Sync initial states
    this.syncTabStates();
  }

  private handleTabClick(value: string, disabled: boolean) {
    if (disabled) return;

    this.selectionManager.select(value);
    this.syncTabStates();
    this.syncPanelStates();
  }

  private handleTabKeyDown(event: KeyboardEvent) {
    const handled = this.selectionManager.handleKeyDown(event);

    if (handled && this.activationMode === 'automatic') {
      // In automatic mode, selecting happens on focus
      const focusedIndex = this.selectionManager.getFocusedIndex();
      const items = this.selectionManager.getItems();
      const focusedItem = items[focusedIndex];

      if (focusedItem && !focusedItem.disabled) {
        this.selectionManager.select(focusedItem.value);
        this.syncTabStates();
        this.syncPanelStates();
      }
    }
  }

  private syncTabStates() {
    const tabs = Array.from(this.el.querySelectorAll('ui-tab')) as HTMLUiTabElement[];

    tabs.forEach((tab) => {
      const isSelected = this.selectionManager.isSelected(tab.value);
      const tabIndex = this.selectionManager.getTabIndex(tab.value);

      // Update tab attributes
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      tab.setAttribute('tabindex', String(tabIndex));

      if (isSelected) {
        tab.setAttribute('data-selected', '');
      } else {
        tab.removeAttribute('data-selected');
      }
    });
  }

  private syncPanelStates() {
    const panels = Array.from(this.el.querySelectorAll('ui-tab-panel')) as HTMLUiTabPanelElement[];
    const tabs = Array.from(this.el.querySelectorAll('ui-tab')) as HTMLUiTabElement[];

    panels.forEach((panel) => {
      const isActive = panel.value === this.internalValue;

      // Find corresponding tab for ARIA relationship
      const correspondingTab = tabs.find(t => t.value === panel.value);

      if (isActive) {
        panel.setAttribute('data-active', '');
        panel.removeAttribute('hidden');
        panel.setAttribute('tabindex', '0');
      } else {
        panel.removeAttribute('data-active');
        panel.setAttribute('hidden', '');
        panel.setAttribute('tabindex', '-1');
      }

      // Set up ARIA relationships
      if (correspondingTab) {
        const tabId = `tab-${panel.value}`;
        const panelId = `panel-${panel.value}`;
        correspondingTab.id = tabId;
        panel.id = panelId;
        correspondingTab.setAttribute('aria-controls', panelId);
        panel.setAttribute('aria-labelledby', tabId);
      }
    });
  }

  render() {
    return (
      <Host
        class={{
          'tabs': true,
          [`tabs--${this.orientation}`]: true,
        }}
        data-orientation={this.orientation}
      >
        <slot></slot>
      </Host>
    );
  }
}
