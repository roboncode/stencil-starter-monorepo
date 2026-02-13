# uefds-field



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description | Type             | Default     |
| -------------- | -------------- | ----------- | ---------------- | ----------- |
| `instructions` | `instructions` |             | `string`         | `undefined` |
| `label`        | `label`        |             | `string`         | `undefined` |
| `messages`     | --             |             | `FieldMessage[]` | `[]`        |
| `required`     | `required`     |             | `boolean`        | `false`     |
| `support`      | `support`      |             | `string`         | `undefined` |


## Dependencies

### Depends on

- [base-field-label](../base-field-label)
- [base-text](../base-text)
- [base-field-message](../base-field-message)

### Graph
```mermaid
graph TD;
  uefds-field --> base-field-label
  uefds-field --> base-text
  uefds-field --> base-field-message
  base-field-label --> base-label
  base-field-message --> base-icon
  base-field-message --> base-text
  style uefds-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
