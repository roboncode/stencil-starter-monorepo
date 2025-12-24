import type { Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@components/core';

/**
 * Helper types for creating typed Storybook stories for web components.
 * These provide full auto-completion for component properties.
 */

// Re-export component types for convenience
export type { Components };

/**
 * Create a typed Meta for a web component
 * @example
 * const meta: ComponentMeta<'ui-tooltip'> = { ... }
 */
export type ComponentMeta<T extends keyof HTMLElementTagNameMap> = Meta<
  Components[ComponentName<T>]
>;

/**
 * Create a typed Story for a web component
 * @example
 * export const Default: ComponentStory<'ui-tooltip'> = { ... }
 */
export type ComponentStory<T extends keyof HTMLElementTagNameMap> = StoryObj<
  Components[ComponentName<T>]
>;

/**
 * Maps HTML tag names to component interface names
 * e.g., 'ui-tooltip' -> 'UiTooltip'
 */
type ComponentName<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${Capitalize<First>}${ComponentName<Rest>}`
  : Capitalize<T>;

/**
 * Args type for a specific component
 * @example
 * const args: ComponentArgs<'ui-input-group'> = { size: 'lg', disabled: false }
 */
export type ComponentArgs<T extends keyof HTMLElementTagNameMap> = Partial<
  Components[ComponentName<T>]
>;
