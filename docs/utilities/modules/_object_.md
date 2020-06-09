
# Module: "object"

## Index

### Functions

* [cloneObject](_object_.md#cloneobject)
* [compareArrays](_object_.md#comparearrays)
* [compareObjects](_object_.md#compareobjects)
* [extractAttributes](_object_.md#extractattributes)

## Functions

###  cloneObject

▸ **cloneObject**(`object`: any): *any*

*Defined in [object.ts:4](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/object.ts#L4)*

Creates a deep copy of the given object.

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any*

___

###  compareArrays

▸ **compareArrays**(`a`: Array‹any›, `b`: Array‹any›): *boolean*

*Defined in [object.ts:32](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/object.ts#L32)*

Performs a *shallow* comparison of arrays `a` and `b`.

**Parameters:**

Name | Type |
------ | ------ |
`a` | Array‹any› |
`b` | Array‹any› |

**Returns:** *boolean*

`true` if `a` and `b` are the same, else `false`

___

###  compareObjects

▸ **compareObjects**(`a`: any, `b`: any): *boolean*

*Defined in [object.ts:49](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/object.ts#L49)*

Performs a *deep* comparison of objects `a` and `b`.

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |
`b` | any |

**Returns:** *boolean*

`true` if `a` and `b` are the same, else `false`

___

###  extractAttributes

▸ **extractAttributes**(`array`: Array‹object›, `attributes`: Array‹string›): *Array‹object›*

*Defined in [object.ts:95](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/object.ts#L95)*

Extracts the specified list of `attributes` from the given `array` of
objects.

**Parameters:**

Name | Type |
------ | ------ |
`array` | Array‹object› |
`attributes` | Array‹string› |

**Returns:** *Array‹object›*

An array of plain objects
