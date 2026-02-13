# uefds-textbox



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

| Event           | Description | Type                  |
| --------------- | ----------- | --------------------- |
| `textboxBlur`   |             | `CustomEvent<void>`   |
| `textboxChange` |             | `CustomEvent<string>` |
| `textboxFocus`  |             | `CustomEvent<void>`   |
| `textboxInput`  |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [base-input](../base-input)

### Graph
```mermaid
graph TD;
  uefds-textbox --> base-input
  style uefds-textbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
