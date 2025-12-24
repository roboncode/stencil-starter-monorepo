# ui-input-group-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                   | Type                                                                        | Default     |
| -------------- | -------------- | ----------------------------- | --------------------------------------------------------------------------- | ----------- |
| `autocomplete` | `autocomplete` | Autocomplete attribute        | `string`                                                                    | `'off'`     |
| `disabled`     | `disabled`     | Whether the input is disabled | `boolean`                                                                   | `false`     |
| `name`         | `name`         | Name attribute for the input  | `string`                                                                    | `undefined` |
| `placeholder`  | `placeholder`  | Placeholder text              | `string`                                                                    | `''`        |
| `readonly`     | `readonly`     | Whether the input is readonly | `boolean`                                                                   | `false`     |
| `required`     | `required`     | Whether the input is required | `boolean`                                                                   | `false`     |
| `type`         | `type`         | Input type                    | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`        | `value`        | The input value               | `string`                                                                    | `''`        |


## Events

| Event         | Description                             | Type                  |
| ------------- | --------------------------------------- | --------------------- |
| `inputBlur`   | Emitted when input loses focus          | `CustomEvent<void>`   |
| `inputChange` | Emitted when the value changes          | `CustomEvent<string>` |
| `inputFocus`  | Emitted when input receives focus       | `CustomEvent<void>`   |
| `inputInput`  | Emitted when input receives input event | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
