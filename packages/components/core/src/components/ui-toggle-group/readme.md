# ui-toggle-group



<!-- Auto Generated Below -->


## Overview

Toggle group for button-based selection

## Properties

| Property       | Attribute       | Description                                                  | Type                         | Default        |
| -------------- | --------------- | ------------------------------------------------------------ | ---------------------------- | -------------- |
| `defaultValue` | `default-value` | Default value for uncontrolled mode                          | `string \| string[]`         | `undefined`    |
| `disabled`     | `disabled`      | Whether entire group is disabled                             | `boolean`                    | `false`        |
| `multiple`     | `multiple`      | Allow multiple selections                                    | `boolean`                    | `false`        |
| `orientation`  | `orientation`   | Orientation for layout and keyboard navigation               | `"horizontal" \| "vertical"` | `'horizontal'` |
| `size`         | `size`          | Size variant                                                 | `"base" \| "lg" \| "sm"`     | `'base'`       |
| `value`        | `value`         | Selected value(s) - string for single, string[] for multiple | `string \| string[]`         | `undefined`    |
| `variant`      | `variant`       | Visual variant                                               | `"default" \| "outline"`     | `'default'`    |


## Events

| Event         | Description                    | Type                              |
| ------------- | ------------------------------ | --------------------------------- |
| `valueChange` | Emitted when selection changes | `CustomEvent<string \| string[]>` |


## Methods

### `getSelectionManager() => Promise<SelectionManager>`

Get the selection manager

#### Returns

Type: `Promise<SelectionManager>`



### `getValue() => Promise<SelectionValue>`

Get current value

#### Returns

Type: `Promise<SelectionValue>`




## Slots

| Slot | Description                         |
| ---- | ----------------------------------- |
|      | Default slot for ui-toggle children |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
