
# Module: "ui"

## Index

### Functions

* [showUI](_ui_.md#showui)

## Functions

###  showUI

▸ **showUI**(`options`: ShowUIOptions, `data`: any): *void*

*Defined in [ui.ts:12](https://github.com/yuanqing/create-figma-plugin/blob/c1a9a79/packages/utilities/src/ui.ts#L12)*

Renders the UI correponding to the command in a modal within the Figma UI.
Specify the width, height, and visibility of the UI via `options`.
Optionally pass on some initialising `data` from the command to the UI.

See the [recipe for adding a UI to a plugin command](/docs/recipes/ui.md#readme).

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ShowUIOptions | - |
`data` | any | {} |

**Returns:** *void*
