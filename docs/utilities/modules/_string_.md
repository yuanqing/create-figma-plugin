
# Module: "string"

## Index

### Functions

* [formatErrorMessage](_string_.md#formaterrormessage)
* [formatSuccessMessage](_string_.md#formatsuccessmessage)
* [formatWarningMessage](_string_.md#formatwarningmessage)
* [pluralize](_string_.md#pluralize)

## Functions

###  formatErrorMessage

▸ **formatErrorMessage**(`message`: string): *string*

*Defined in [string.ts:16](https://github.com/yuanqing/create-figma-plugin/blob/c1a9a79/packages/utilities/src/string.ts#L16)*

Adds a `✘` prefix to the given `message`.

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *string*

___

###  formatSuccessMessage

▸ **formatSuccessMessage**(`message`: string): *string*

*Defined in [string.ts:9](https://github.com/yuanqing/create-figma-plugin/blob/c1a9a79/packages/utilities/src/string.ts#L9)*

Adds a `✔` prefix to the given `message`.

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *string*

___

###  formatWarningMessage

▸ **formatWarningMessage**(`message`: string): *string*

*Defined in [string.ts:23](https://github.com/yuanqing/create-figma-plugin/blob/c1a9a79/packages/utilities/src/string.ts#L23)*

Adds a `⚠` prefix to the given `message`.

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *string*

___

###  pluralize

▸ **pluralize**(`number`: number, `singular`: string, `plural?`: undefined | string): *string*

*Defined in [string.ts:31](https://github.com/yuanqing/create-figma-plugin/blob/c1a9a79/packages/utilities/src/string.ts#L31)*

Returns `singular` if `number` is exactly `1`, else returns `plural`.
`plural` defaults to `${singular}s` if not specified.

**Parameters:**

Name | Type |
------ | ------ |
`number` | number |
`singular` | string |
`plural?` | undefined &#124; string |

**Returns:** *string*
