# ui-chip-group



<!-- Auto Generated Below -->


## Overview

Chip group for tag/chip-based selection

## Properties

| Property       | Attribute     | Description                                         | Type                         | Default        |
| -------------- | ------------- | --------------------------------------------------- | ---------------------------- | -------------- |
| `defaultValue` | --            | Default values for uncontrolled mode                | `string[]`                   | `undefined`    |
| `disabled`     | `disabled`    | Whether entire group is disabled                    | `boolean`                    | `false`        |
| `multiple`     | `multiple`    | Allow multiple selections (default: true for chips) | `boolean`                    | `true`         |
| `orientation`  | `orientation` | Orientation for keyboard navigation                 | `"horizontal" \| "vertical"` | `'horizontal'` |
| `size`         | `size`        | Size variant                                        | `"base" \| "lg" \| "sm"`     | `'base'`       |
| `value`        | --            | Selected values                                     | `string[]`                   | `undefined`    |


## Events

| Event         | Description                    | Type                    |
| ------------- | ------------------------------ | ----------------------- |
| `chipRemove`  | Emitted when a chip is removed | `CustomEvent<string>`   |
| `valueChange` | Emitted when selection changes | `CustomEvent<string[]>` |


## Methods

### `getSelectionManager() => Promise<SelectionManager>`

Get the selection manager

#### Returns

Type: `Promise<SelectionManager>`



### `getValue() => Promise<string[]>`

Get current values

#### Returns

Type: `Promise<string[]>`




## Slots

| Slot | Description                       |
| ---- | --------------------------------- |
|      | Default slot for ui-chip children |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
