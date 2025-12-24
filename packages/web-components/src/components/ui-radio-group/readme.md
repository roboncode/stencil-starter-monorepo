# ui-radio-group



<!-- Auto Generated Below -->


## Overview

Radio group container for single selection

## Properties

| Property       | Attribute       | Description                                    | Type                         | Default      |
| -------------- | --------------- | ---------------------------------------------- | ---------------------------- | ------------ |
| `defaultValue` | `default-value` | Default value for uncontrolled mode            | `string`                     | `undefined`  |
| `disabled`     | `disabled`      | Whether entire group is disabled               | `boolean`                    | `false`      |
| `name`         | `name`          | Name for form submission                       | `string`                     | `undefined`  |
| `orientation`  | `orientation`   | Orientation for layout and keyboard navigation | `"horizontal" \| "vertical"` | `'vertical'` |
| `required`     | `required`      | Required for form validation                   | `boolean`                    | `false`      |
| `size`         | `size`          | Size variant                                   | `"base" \| "lg" \| "sm"`     | `'base'`     |
| `value`        | `value`         | Currently selected value                       | `string`                     | `undefined`  |


## Events

| Event         | Description                    | Type                  |
| ------------- | ------------------------------ | --------------------- |
| `valueChange` | Emitted when selection changes | `CustomEvent<string>` |


## Methods

### `getSelectionManager() => Promise<SelectionManager>`

Get the selection manager

#### Returns

Type: `Promise<SelectionManager>`



### `getValue() => Promise<string>`

Get current value

#### Returns

Type: `Promise<string>`




## Slots

| Slot | Description                        |
| ---- | ---------------------------------- |
|      | Default slot for ui-radio children |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
