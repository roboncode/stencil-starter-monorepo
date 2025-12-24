/**
 * JSX type declarations for Stencil web components.
 * This file augments jsx-dom's JSX namespace with our component types,
 * enabling full auto-completion when writing JSX in stories.
 *
 * AUTO-GENERATED - DO NOT EDIT MANUALLY
 * Run `pnpm generate:jsx-types` to regenerate.
 */

import type { JSX as StencilJSX } from '@components/core';
import type { ReactNode } from 'jsx-dom';

// Helper type that adds children support to web component types (for slot content)
type WithChildren<T> = T & { children?: ReactNode };

// Augment jsx-dom's JSX namespace with Stencil component types
declare module 'jsx-dom' {
  namespace JSX {
    interface IntrinsicElements {
      'my-component': WithChildren<StencilJSX.IntrinsicElements['my-component']>;
      'ui-chip': WithChildren<StencilJSX.IntrinsicElements['ui-chip']>;
      'ui-chip-group': WithChildren<StencilJSX.IntrinsicElements['ui-chip-group']>;
      'ui-input-group': WithChildren<StencilJSX.IntrinsicElements['ui-input-group']>;
      'ui-input-group-addon': WithChildren<StencilJSX.IntrinsicElements['ui-input-group-addon']>;
      'ui-input-group-input': WithChildren<StencilJSX.IntrinsicElements['ui-input-group-input']>;
      'ui-radio': WithChildren<StencilJSX.IntrinsicElements['ui-radio']>;
      'ui-radio-group': WithChildren<StencilJSX.IntrinsicElements['ui-radio-group']>;
      'ui-tab': WithChildren<StencilJSX.IntrinsicElements['ui-tab']>;
      'ui-tab-list': WithChildren<StencilJSX.IntrinsicElements['ui-tab-list']>;
      'ui-tab-panel': WithChildren<StencilJSX.IntrinsicElements['ui-tab-panel']>;
      'ui-tabs': WithChildren<StencilJSX.IntrinsicElements['ui-tabs']>;
      'ui-toggle': WithChildren<StencilJSX.IntrinsicElements['ui-toggle']>;
      'ui-toggle-group': WithChildren<StencilJSX.IntrinsicElements['ui-toggle-group']>;
      'ui-tooltip': WithChildren<StencilJSX.IntrinsicElements['ui-tooltip']>;
    }
  }
}

export {};
