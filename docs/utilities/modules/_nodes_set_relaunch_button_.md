
# Module: "nodes/set-relaunch-button"

## Index

### Functions

* [setRelaunchButton](_nodes_set_relaunch_button_.md#setrelaunchbutton)

## Functions

###  setRelaunchButton

▸ **setRelaunchButton**(`node`: BaseNode, `key`: string, `options?`: undefined | object): *void*

*Defined in [nodes/set-relaunch-button.ts:10](https://github.com/yuanqing/create-figma-plugin/blob/master/packages/utilities/src/nodes/set-relaunch-button.ts#L10)*

Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
on `node` for the command with the given `relaunchButtonId` as configured
under [**`"relaunchButtons"`**](/docs/configuration.md#relaunchbuttons) in
`package.json`. `description` is the text displayed below the relaunch
button in the Figma UI.

See the [recipe for configuring relaunch buttons](/docs/recipes/relaunch-buttons.md#readme).

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |
`key` | string |
`options?` | undefined &#124; object |

**Returns:** *void*
