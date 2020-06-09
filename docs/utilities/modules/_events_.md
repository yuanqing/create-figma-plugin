
# Module: "events"

## Index

### Variables

* [emit](_events_.md#const-emit)

### Functions

* [on](_events_.md#on)
* [once](_events_.md#once)

## Variables

### `Const` emit

• **emit**: *function* = isCommand === true
    ? function (...args) {
        figma.ui.postMessage(args)
      }
    : function (...args) {
        window.parent.postMessage(
          {
            pluginMessage: args
          },
          '*'
        )
      }

*Defined in [events.ts:57](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/events.ts#L57)*

Calling `emit` in the main context invokes the event handler for the
matching `eventName` in your UI. Correspondingly, calling `emit` in your
UI invokes the event handler for the matching `eventName` in the main
context.

All `arguments` passed after `eventName` will be directly applied on the
event handler.

#### Type declaration:

▸ (`eventName`: string, ...`args`: Array‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |
`...args` | Array‹any› |

## Functions

###  on

▸ **on**(`eventName`: string, `eventHandler`: function): *function*

*Defined in [events.ts:17](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/events.ts#L17)*

Registers an `eventHandler` for the given `eventName`.

**Parameters:**

▪ **eventName**: *string*

▪ **eventHandler**: *function*

▸ (...`args`: Array‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Array‹any› |

**Returns:** *function*

A function for deregistering the `eventHandler`

▸ (): *void*

___

###  once

▸ **once**(`eventName`: string, `eventHandler`: function): *function*

*Defined in [events.ts:34](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/events.ts#L34)*

Registers an `eventHandler` that will run at most once for the given
`eventName`.

**Parameters:**

▪ **eventName**: *string*

▪ **eventHandler**: *function*

▸ (...`args`: Array‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Array‹any› |

**Returns:** *function*

A function for deregistering the `eventHandler`

▸ (): *void*
