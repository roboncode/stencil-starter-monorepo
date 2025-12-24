/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'web-components/components';

import { defineCustomElement as defineMyComponent } from 'web-components/components/my-component.js';
import { defineCustomElement as defineUiChip } from 'web-components/components/ui-chip.js';
import { defineCustomElement as defineUiChipGroup } from 'web-components/components/ui-chip-group.js';
import { defineCustomElement as defineUiInputGroup } from 'web-components/components/ui-input-group.js';
import { defineCustomElement as defineUiInputGroupAddon } from 'web-components/components/ui-input-group-addon.js';
import { defineCustomElement as defineUiInputGroupInput } from 'web-components/components/ui-input-group-input.js';
import { defineCustomElement as defineUiRadio } from 'web-components/components/ui-radio.js';
import { defineCustomElement as defineUiRadioGroup } from 'web-components/components/ui-radio-group.js';
import { defineCustomElement as defineUiTab } from 'web-components/components/ui-tab.js';
import { defineCustomElement as defineUiTabList } from 'web-components/components/ui-tab-list.js';
import { defineCustomElement as defineUiTabPanel } from 'web-components/components/ui-tab-panel.js';
import { defineCustomElement as defineUiTabs } from 'web-components/components/ui-tabs.js';
import { defineCustomElement as defineUiToggle } from 'web-components/components/ui-toggle.js';
import { defineCustomElement as defineUiToggleGroup } from 'web-components/components/ui-toggle-group.js';
import { defineCustomElement as defineUiTooltip } from 'web-components/components/ui-tooltip.js';
@ProxyCmp({
  defineCustomElementFn: defineMyComponent,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
})
export class MyComponent {
  protected el: HTMLMyComponentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}


@ProxyCmp({
  defineCustomElementFn: defineUiChip,
  inputs: ['disabled', 'removable', 'value', 'variant']
})
@Component({
  selector: 'ui-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'removable', { name: 'value', required: true }, 'variant'],
  outputs: ['remove'],
})
export class UiChip {
  protected el: HTMLUiChipElement;
  @Output() remove = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiChip extends Components.UiChip {
  /**
   * Emitted when remove button is clicked
   */
  remove: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineUiChipGroup,
  inputs: ['defaultValue', 'disabled', 'multiple', 'orientation', 'size', 'value'],
  methods: ['getSelectionManager', 'getValue']
})
@Component({
  selector: 'ui-chip-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'disabled', 'multiple', 'orientation', 'size', 'value'],
  outputs: ['valueChange', 'chipRemove'],
})
export class UiChipGroup {
  protected el: HTMLUiChipGroupElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string[]>>();
  @Output() chipRemove = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiChipGroup extends Components.UiChipGroup {
  /**
   * Emitted when selection changes
   */
  valueChange: EventEmitter<CustomEvent<string[]>>;
  /**
   * Emitted when a chip is removed
   */
  chipRemove: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineUiInputGroup,
  inputs: ['disabled', 'error', 'size']
})
@Component({
  selector: 'ui-input-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'size'],
})
export class UiInputGroup {
  protected el: HTMLUiInputGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiInputGroup extends Components.UiInputGroup {}


@ProxyCmp({
  defineCustomElementFn: defineUiInputGroupAddon,
  inputs: ['align', 'clickable', 'disabled', 'variant']
})
@Component({
  selector: 'ui-input-group-addon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'clickable', 'disabled', 'variant'],
})
export class UiInputGroupAddon {
  protected el: HTMLUiInputGroupAddonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiInputGroupAddon extends Components.UiInputGroupAddon {}


@ProxyCmp({
  defineCustomElementFn: defineUiInputGroupInput,
  inputs: ['autocomplete', 'disabled', 'name', 'placeholder', 'readonly', 'required', 'type', 'value']
})
@Component({
  selector: 'ui-input-group-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'disabled', 'name', 'placeholder', 'readonly', 'required', 'type', 'value'],
  outputs: ['inputChange', 'inputInput', 'inputFocus', 'inputBlur'],
})
export class UiInputGroupInput {
  protected el: HTMLUiInputGroupInputElement;
  @Output() inputChange = new EventEmitter<CustomEvent<string>>();
  @Output() inputInput = new EventEmitter<CustomEvent<string>>();
  @Output() inputFocus = new EventEmitter<CustomEvent<void>>();
  @Output() inputBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiInputGroupInput extends Components.UiInputGroupInput {
  /**
   * Emitted when the value changes
   */
  inputChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when input receives input event
   */
  inputInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when input receives focus
   */
  inputFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when input loses focus
   */
  inputBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineUiRadio,
  inputs: ['disabled', 'indicator', 'value']
})
@Component({
  selector: 'ui-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'indicator', { name: 'value', required: true }],
})
export class UiRadio {
  protected el: HTMLUiRadioElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiRadio extends Components.UiRadio {}


@ProxyCmp({
  defineCustomElementFn: defineUiRadioGroup,
  inputs: ['defaultValue', 'disabled', 'name', 'orientation', 'required', 'size', 'value'],
  methods: ['getSelectionManager', 'getValue']
})
@Component({
  selector: 'ui-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'disabled', 'name', 'orientation', 'required', 'size', 'value'],
  outputs: ['valueChange'],
})
export class UiRadioGroup {
  protected el: HTMLUiRadioGroupElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiRadioGroup extends Components.UiRadioGroup {
  /**
   * Emitted when selection changes
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineUiTab,
  inputs: ['disabled', 'value']
})
@Component({
  selector: 'ui-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', { name: 'value', required: true }],
})
export class UiTab {
  protected el: HTMLUiTabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiTab extends Components.UiTab {}


@ProxyCmp({
  defineCustomElementFn: defineUiTabList,
  inputs: ['stretch', 'variant']
})
@Component({
  selector: 'ui-tab-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['stretch', 'variant'],
})
export class UiTabList {
  protected el: HTMLUiTabListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiTabList extends Components.UiTabList {}


@ProxyCmp({
  defineCustomElementFn: defineUiTabPanel,
  inputs: ['value']
})
@Component({
  selector: 'ui-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: 'value', required: true }],
})
export class UiTabPanel {
  protected el: HTMLUiTabPanelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiTabPanel extends Components.UiTabPanel {}


@ProxyCmp({
  defineCustomElementFn: defineUiTabs,
  inputs: ['activationMode', 'defaultValue', 'orientation', 'value'],
  methods: ['getSelectionManager', 'getValue']
})
@Component({
  selector: 'ui-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activationMode', 'defaultValue', 'orientation', 'value'],
  outputs: ['valueChange'],
})
export class UiTabs {
  protected el: HTMLUiTabsElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiTabs extends Components.UiTabs {
  /**
   * Emitted when the selected tab changes
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineUiToggle,
  inputs: ['disabled', 'value']
})
@Component({
  selector: 'ui-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', { name: 'value', required: true }],
})
export class UiToggle {
  protected el: HTMLUiToggleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiToggle extends Components.UiToggle {}


@ProxyCmp({
  defineCustomElementFn: defineUiToggleGroup,
  inputs: ['defaultValue', 'disabled', 'multiple', 'orientation', 'size', 'value', 'variant'],
  methods: ['getSelectionManager', 'getValue']
})
@Component({
  selector: 'ui-toggle-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'disabled', 'multiple', 'orientation', 'size', 'value', 'variant'],
  outputs: ['valueChange'],
})
export class UiToggleGroup {
  protected el: HTMLUiToggleGroupElement;
  @Output() valueChange = new EventEmitter<CustomEvent<IUiToggleGroupSelectionValue>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { SelectionValue as IUiToggleGroupSelectionValue } from 'web-components/components';

export declare interface UiToggleGroup extends Components.UiToggleGroup {
  /**
   * Emitted when selection changes
   */
  valueChange: EventEmitter<CustomEvent<IUiToggleGroupSelectionValue>>;
}


@ProxyCmp({
  defineCustomElementFn: defineUiTooltip,
  inputs: ['content', 'disabled', 'hideDelay', 'offsetDistance', 'placement', 'showDelay']
})
@Component({
  selector: 'ui-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['content', 'disabled', 'hideDelay', 'offsetDistance', 'placement', 'showDelay'],
})
export class UiTooltip {
  protected el: HTMLUiTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiTooltip extends Components.UiTooltip {}


