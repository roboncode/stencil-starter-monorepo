# uefds-button



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                                                      | Default        |
| ----------- | ------------ | ----------- | --------------------------------------------------------- | -------------- |
| `busy`      | `busy`       |             | `boolean`                                                 | `false`        |
| `color`     | `color`      |             | `"danger" \| "info" \| "success" \| "theme" \| "warning"` | `'theme'`      |
| `direction` | `direction`  |             | `"horizontal" \| "vertical"`                              | `'horizontal'` |
| `disabled`  | `disabled`   |             | `boolean`                                                 | `false`        |
| `iconEnd`   | `icon-end`   |             | `string`                                                  | `undefined`    |
| `iconStart` | `icon-start` |             | `string`                                                  | `undefined`    |
| `size`      | `size`       |             | `"lg" \| "md" \| "sm"`                                    | `'md'`         |
| `text`      | `text`       |             | `string`                                                  | `undefined`    |
| `type`      | `type`       |             | `"button" \| "clear" \| "reset" \| "submit"`              | `'button'`     |
| `variant`   | `variant`    |             | `"link" \| "outline" \| "solid" \| "subtle"`              | `'solid'`      |


## Events

| Event         | Description | Type                      |
| ------------- | ----------- | ------------------------- |
| `buttonClick` |             | `CustomEvent<MouseEvent>` |


## Dependencies

### Depends on

- [uefds-icon](../uefds-icon)

### Graph
```mermaid
graph TD;
  uefds-button --> uefds-icon
  style uefds-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
