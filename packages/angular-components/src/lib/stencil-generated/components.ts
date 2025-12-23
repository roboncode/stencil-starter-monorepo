/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'web-components/components';

import { defineCustomElement as defineMyComponent } from 'web-components/components/my-component.js';
import { defineCustomElement as defineUiInputGroup } from 'web-components/components/ui-input-group.js';
import { defineCustomElement as defineUiInputGroupAddon } from 'web-components/components/ui-input-group-addon.js';
import { defineCustomElement as defineUiInputGroupInput } from 'web-components/components/ui-input-group-input.js';
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


