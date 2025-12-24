# ui-tabs



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                              | Type                         | Default        |
| ---------------- | ----------------- | ------------------------------------------------------------------------ | ---------------------------- | -------------- |
| `activationMode` | `activation-mode` | Whether tabs activate on focus (automatic) or require selection (manual) | `"automatic" \| "manual"`    | `'automatic'`  |
| `defaultValue`   | `default-value`   | Default value for uncontrolled mode                                      | `string`                     | `undefined`    |
| `orientation`    | `orientation`     | Orientation for keyboard navigation and layout                           | `"horizontal" \| "vertical"` | `'horizontal'` |
| `value`          | `value`           | Currently selected tab value                                             | `string`                     | `undefined`    |


## Events

| Event         | Description                           | Type                  |
| ------------- | ------------------------------------- | --------------------- |
| `valueChange` | Emitted when the selected tab changes | `CustomEvent<string>` |


## Methods

### `getSelectionManager() => Promise<SelectionManager>`

Get the selection manager (for child components)

#### Returns

Type: `Promise<SelectionManager>`



### `getValue() => Promise<string>`

Get the current value

#### Returns

Type: `Promise<string>`




## Slots

| Slot | Description                                            |
| ---- | ------------------------------------------------------ |
|      | Default slot for ui-tab-list and ui-tab-panel children |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
