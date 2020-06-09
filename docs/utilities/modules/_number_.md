
# Module: "number"

## Index

### Functions

* [evaluateNumericExpression](_number_.md#evaluatenumericexpression)
* [isValidNumericInput](_number_.md#isvalidnumericinput)

## Functions

###  evaluateNumericExpression

▸ **evaluateNumericExpression**(`value`: string): *null | number*

*Defined in [number.ts:42](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/number.ts#L42)*

Evaluates the given numeric `expression`.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *null | number*

The result of evaluating the given `expression`

___

###  isValidNumericInput

▸ **isValidNumericInput**(`value`: string, `integerOnly`: boolean): *boolean*

*Defined in [number.ts:15](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/number.ts#L15)*

Checks if `value` is a numeric expression, as input by a user. “Partial”
inputs are considered valid. Set `integerOnly` to `true` to check that the
expression contains only integers. `integerOnly` defaults to `false` if not
specified.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string | - |
`integerOnly` | boolean | false |

**Returns:** *boolean*

`true` if `value` is a valid numeric expression, else `false`
