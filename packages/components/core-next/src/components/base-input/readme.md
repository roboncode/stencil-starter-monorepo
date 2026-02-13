# base-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type      | Default     |
| ------------- | ------------- | ----------- | --------- | ----------- |
| `disabled`    | `disabled`    |             | `boolean` | `false`     |
| `maxlength`   | `maxlength`   |             | `number`  | `undefined` |
| `name`        | `name`        |             | `string`  | `undefined` |
| `placeholder` | `placeholder` |             | `string`  | `undefined` |
| `readonly`    | `readonly`    |             | `boolean` | `false`     |
| `required`    | `required`    |             | `boolean` | `false`     |
| `type`        | `type`        |             | `string`  | `'text'`    |
| `value`       | `value`       |             | `string`  | `''`        |


## Events

| Event         | Description | Type                  |
| ------------- | ----------- | --------------------- |
| `inputBlur`   |             | `CustomEvent<void>`   |
| `inputChange` |             | `CustomEvent<string>` |
| `inputFocus`  |             | `CustomEvent<void>`   |
| `inputInput`  |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [uefds-textbox](../uefds-textbox)

### Graph
```mermaid
graph TD;
  uefds-textbox --> base-input
  style base-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
