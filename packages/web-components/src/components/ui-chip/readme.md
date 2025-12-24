# ui-chip



<!-- Auto Generated Below -->


## Overview

Individual chip/tag for selection or display

## Properties

| Property             | Attribute   | Description                      | Type                                                          | Default     |
| -------------------- | ----------- | -------------------------------- | ------------------------------------------------------------- | ----------- |
| `disabled`           | `disabled`  | Whether this chip is disabled    | `boolean`                                                     | `false`     |
| `removable`          | `removable` | Whether this chip can be removed | `boolean`                                                     | `false`     |
| `value` _(required)_ | `value`     | Value for this chip              | `string`                                                      | `undefined` |
| `variant`            | `variant`   | Visual variant                   | `"default" \| "error" \| "primary" \| "success" \| "warning"` | `'default'` |


## Events

| Event    | Description                           | Type                  |
| -------- | ------------------------------------- | --------------------- |
| `remove` | Emitted when remove button is clicked | `CustomEvent<string>` |


## Slots

| Slot           | Description                             |
| -------------- | --------------------------------------- |
|                | Default slot for chip label             |
| `"icon-end"`   | Icon after label (before remove button) |
| `"icon-start"` | Icon before label                       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
