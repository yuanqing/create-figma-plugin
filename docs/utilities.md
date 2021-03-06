<!-- THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. -->
# Utilities

`@create-figma-plugin/utilities` is an extensive library of utility functions for common Figma plugin operations. It is meant to complement the [Figma plugin API](https://figma.com/plugin-docs/api/api-overview/).

To install:

```
$ npm install @create-figma-plugin/utilities
```

The utility functions span the following categories:

- [Color](#color)
- [Events](#events)
- [Node](#node)
- [Number](#number)
- [Object](#object)
- [Settings](#settings)
- [String](#string)
- [UI](#ui-2)

## Color

```ts
import {
  convertHexColorToRgbColor,
  convertNamedColorToHexColor,
  convertRgbColorToHexColor,
  isValidHexColor
} from '@create-figma-plugin/utilities'
```

### convertHexColorToRgbColor(hexColor)

Converts the given `hexColor` (eg. `000000`) to RGB format
(eg. `{ r: 0, g: 0, b: 0 }`). Note that each value in the returned
[RGB](https://www.figma.com/plugin-docs/api/RGB/) plain object is
between `0` and `1`.

***Parameters***

- **`hexColor`** (`string`)

***Return type***

Returns an [RGB](https://www.figma.com/plugin-docs/api/RGB/) plain
object, else `null` if `hexColor` was invalid.

```
null | RGB
```

### convertNamedColorToHexColor(namedColor)

Converts the given `namedColor` (eg. `black`) to hexadecimal format
(eg. `000000`).

***Parameters***

- **`namedColor`** (`string`)

***Return type***

Returns a hexadecimal color as an uppercase string, else `null`
if `namedColor` was invalid.

```
null | string
```

### convertRgbColorToHexColor(rgbColor)

Converts the given `rgbColor` (eg. `{ r: 0, g: 0, b: 0 }`) to hexadecimal
format (eg. `000000`). Each value in the given `rgbColor` must be between
`0` and `1`.

***Parameters***

- **`rgbColor`** (`RGB`)

***Return type***

Returns a hexadecimal color as an uppercase string, else `null`
if `rgbColor` was invalid.

```
null | string
```

### isValidHexColor(hexColor)

Returns `true` if `hexColor` is a valid hexadecimal color.

***Parameters***

- **`hexColor`** (`string`)

***Return type***

```
boolean
```

## Events

```ts
import {
  emit,
  on,
  once
} from '@create-figma-plugin/utilities'
```

### emit&lt;Handler&gt;(name, args)

Calling `emit` in the main context invokes the event handler for the
matching event `name` in your UI. Correspondingly, calling `emit` in your
UI invokes the event handler for the matching event `name` in the main
context.

All `args` passed after `name` will be directly
[applied](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
on the event handler.

***Type parameters***

- **`Handler`** (`EventHandler`)

***Parameters***

- **`name`** (`Handler["name"]`)
- **`args`** (`Parameters<Handler["handler"]>`)

***Return type***

```
void
```

### on&lt;Handler&gt;(name, handler)

Registers an event `handler` for the given event `name`.

***Type parameters***

- **`Handler`** (`EventHandler`)

***Parameters***

- **`name`** (`Handler['name']`)
- **`handler`** (`Handler['handler']`)

***Return type***

Returns a function for deregistering the `handler`.

```
() => void
```

### once&lt;Handler&gt;(name, handler)

Registers an event `handler` that will run at most once for the given
event `name`.

***Type parameters***

- **`Handler`** (`EventHandler`)

***Parameters***

- **`name`** (`Handler['name']`)
- **`handler`** (`Handler['handler']`)

***Return type***

Returns a function for deregistering the `handler`.

```
() => void
```

## Node

```ts
import {
  areSiblingNodes,
  collapseLayer,
  computeBoundingBox,
  computeMaximumBounds,
  computeSiblingNodes,
  createImagePaint,
  deduplicateNodes,
  getAbsolutePosition,
  getDocumentComponents,
  getParentNode,
  getSceneNodeById,
  getSelectedNodesOrAllNodes,
  insertAfterNode,
  insertBeforeNode,
  isWithinInstanceNode,
  loadFontsAsync,
  setAbsolutePosition,
  setRelaunchButton,
  sortNodesByCanonicalOrder,
  sortNodesByName,
  traverseNode,
  unsetRelaunchButton,
  updateNodesSortOrder
} from '@create-figma-plugin/utilities'
```

### areSiblingNodes(nodes)

Checks if all nodes in `nodes` are sibling nodes.

***Parameters***

- **`nodes`** (`Array<SceneNode>`)

***Return type***

Returns `true` if all nodes in `nodes` are sibling nodes,
else `false`.

```
boolean
```

### collapseLayer(node)

Collapses `node` and all its child nodes in the layer list.

***Parameters***

- **`node`** (`SceneNode`)

***Return type***

Returns `true` if at least one layer in the layer list was
collapsed by the function, else `false`.

```
boolean
```

### computeBoundingBox(node)

Computes the coordinates (`x`, `y`) and dimensions (`width`, `height`) of
the smallest bounding box that contains the given `node`. (Does not account
for strokes or effects that could extend beyond the node’s bounding box.)

***Parameters***

- **`node`** (`SceneNode`)

***Return type***

Returns a [`Rect`](https://www.figma.com/plugin-docs/api/Rect/).

```
Rect
```

### computeMaximumBounds(nodes)

Computes the absolute coordinates of the top-left and bottom-right
corners of the smallest bounding box that contains the given `nodes`.
(Does not account for strokes or effects that could extend beyond the
nodes’ bounding box.)

***Parameters***

- **`nodes`** (`Array<SceneNode>`)

***Return type***

Returns an array of two [`Vector`](https://www.figma.com/plugin-docs/api/Vector/)
objects, one for the top-left corner and another for the
bottom-right corner.

```
[Vector, Vector]
```

### computeSiblingNodes&lt;Node&gt;(nodes)

Splits `nodes` into groups of sibling nodes.

***Type parameters***

- **`Node`** (`SceneNode`)

***Parameters***

- **`nodes`** (`Array<Node>`)

***Return type***

Returns an array of array of sibling `SceneNode` objects.

```
Array<Array<Node>>
```

### createImagePaint(bytes)

Creates an [`ImagePaint`](https://www.figma.com/plugin-docs/api/Paint/#imagepaint)
object from the `bytes` of an image.

***Parameters***

- **`bytes`** (`Uint8Array`)

***Return type***

```
ImagePaint
```

### deduplicateNodes&lt;Node&gt;(nodes)

Deduplicates the nodes in `nodes`. Does not modify the original
`nodes` array.

***Type parameters***

- **`Node`** (`SceneNode`)

***Parameters***

- **`nodes`** (`Array<Node>`)

***Return type***

Returns a new array of `SceneNode` objects.

```
Array<Node>
```

### getAbsolutePosition(node)

Returns the `x` and `y` position of the given `node` relative to the page.

***Parameters***

- **`node`** (`SceneNode`)

***Return type***

Returns a [`Vector`](https://www.figma.com/plugin-docs/api/Vector/).

```
Vector
```

### getDocumentComponents()

Returns all the local Components in the current document.

***Return type***

```
Array<ComponentNode>
```

### getParentNode(node)

Returns the parent node of the given `node`.

***Parameters***

- **`node`** (`BaseNode`)

***Return type***

Throws an error if `node.parent` is `null`, else returns
`node.parent`.

```
BaseNode & ChildrenMixin
```

### getSceneNodeById&lt;Node&gt;(id)

Returns `SceneNode` in the current document with the given `id`. This is a
convenience function that wraps the [`figma.getNodeById`](https://www.figma.com/plugin-docs/api/figma/#getnodebyid)
function.

***Type parameters***

- **`Node`** (`SceneNode`)

***Parameters***

- **`id`** (`string`)

***Return type***

Throws an error if no `SceneNode` with the given `id` exists, else
returns the node cast to the specified `Node` type parameter.

```
Node
```

### getSelectedNodesOrAllNodes()

Returns the selected nodes, or all the top-level nodes on the current page
if no nodes are selected.

***Return type***

```
Array<SceneNode>
```

### insertAfterNode(node, referenceNode)

Inserts `node` *after* the `referenceNode` in the layer list.

***Parameters***

- **`node`** (`SceneNode`)
- **`referenceNode`** (`SceneNode`)

***Return type***

```
void
```

### insertBeforeNode(node, referenceNode)

Inserts `node` *before* the `referenceNode` in the layer list.

***Parameters***

- **`node`** (`SceneNode`)
- **`referenceNode`** (`SceneNode`)

***Return type***

```
void
```

### isWithinInstanceNode(node)

Checks if the given `node` is within an Instance node.

***Parameters***

- **`node`** (`SceneNode`)

***Return type***

Returns `true` if the `node` is within an Instance node,
else `false`.

```
boolean
```

### loadFontsAsync(nodes)

Loads the fonts used in all the text nodes within the `nodes` array. [This
function must be called before modifying any property of a text node that
may cause the rendered text to change.](https://www.figma.com/plugin-docs/api/TextNode/#loading-fonts)

***Parameters***

- **`nodes`** (`Array<SceneNode>`)

***Return type***

```
Promise<void>
```

### setAbsolutePosition(node, vector)

Moves the `node` to the given `x` and `y` position relative to the page.
At least one of `x` or `y` must be specified.

***Parameters***

- **`node`** (`SceneNode`)
- **`vector`** (`Partial<Vector>`)

***Return type***

```
void
```

### setRelaunchButton(node, relaunchButtonId [, options])

Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
on `node` for the command with the given `relaunchButtonId` as configured
under the [**`"relaunchButtons"`**](#relaunchbuttons) key in `package.json`.
Any relaunch buttons set previously will be retained. `description` is the
text displayed below the relaunch button in the Figma UI.

See the [recipe for configuring relaunch buttons](#configuring-relaunch-buttons).

***Parameters***

- **`node`** (`BaseNode`)
- **`relaunchButtonId`** (`string`)
- **`options`** (`object`) – *Optional.*
  - **`description`** (`string`)

***Return type***

```
void
```

### sortNodesByCanonicalOrder&lt;Node&gt;(siblingNodes)

Sorts `siblingNodes` according to their layer list order. Does not modify
the original `siblingNodes` array.

***Type parameters***

- **`Node`** (`SceneNode`)

***Parameters***

- **`siblingNodes`** (`Array<Node>`)

***Return type***

Returns a new array of `SceneNode` objects.

```
Array<Node>
```

### sortNodesByName&lt;Node&gt;(nodes)

Sorts `nodes` in alphabetical order. Does not modify the original
`nodes` array.

***Type parameters***

- **`Node`** (`SceneNode`)

***Parameters***

- **`nodes`** (`Array<Node>`)

***Return type***

Returns a new array of `SceneNode` objects.

```
Array<Node>
```

### traverseNode(node, processNode [, stopTraversal])

Traverses `node` and its child nodes recursively in a *depth-first*
manner, passing each node to the specified `processNode` callback.

Each node is also passed to a `stopTraversal` function. If you return
`true` in `stopTraversal` for a particular node, then its child nodes
will not be traversed.

***Parameters***

- **`node`** (`SceneNode`)
- **`processNode`** (`(node: SceneNode) => void`)
- **`stopTraversal`** (`(node: SceneNode) => boolean`) – *Optional.*

***Return type***

```
void
```

### unsetRelaunchButton(node [, relaunchButtonId])

Unsets the [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
on `node` for the command with the given `relaunchButtonId`. If
`relaunchButtonId` is not specified, unsets all relaunch buttons on `node`.

***Parameters***

- **`node`** (`BaseNode`)
- **`relaunchButtonId`** (`string`) – *Optional.*

***Return type***

```
void
```

### updateNodesSortOrder(siblingNodes)

Updates the layer list sort order to follow the sort order of the nodes
in the `siblingNodes` array. Does not modify the original
`siblingNodes` array.

***Parameters***

- **`siblingNodes`** (`Array<SceneNode>`)

***Return type***

Returns `true` if the layer list sort order was changed by the
function, else `false`.

```
boolean
```

## Number

```ts
import {
  evaluateNumericExpression,
  isValidNumericInput
} from '@create-figma-plugin/utilities'
```

### evaluateNumericExpression(value)

Evaluates the given numeric `expression`.

***Parameters***

- **`value`** (`string`)

***Return type***

Returns the result of evaluating the given `expression`, else
`null` for an invalid expression.

```
null | number
```

### isValidNumericInput(value [, options])

Checks if `value` is a numeric expression, as input by a user. “Partial”
inputs are considered valid. Set `options.integersOnly` to `true` to check
that the expression contains only integers. `options.integersOnly` defaults
to `false` if not specified.

***Parameters***

- **`value`** (`string`)
- **`options`** (`object`) – *Optional.*
  - **`integersOnly`** (`boolean`)

***Return type***

Returns `true` if `value` is a valid numeric expression,
else `false`.

```
boolean
```

## Object

```ts
import {
  cloneObject,
  compareObjects,
  compareStringArrays,
  extractAttributes
} from '@create-figma-plugin/utilities'
```

### cloneObject&lt;T&gt;(object)

Creates a deep copy of the given object.

***Type parameters***

- **`T`**

***Parameters***

- **`object`** (`T`)

***Return type***

```
T
```

### compareObjects(a, b)

Performs a *deep* equality comparison of objects `a` and `b`.

***Parameters***

- **`a`** (`any`)
- **`b`** (`any`)

***Return type***

Returns `true` if `a` and `b` are the same, else `false`.

```
boolean
```

### compareStringArrays(a, b)

Compares the string arrays `a` and `b`.

***Parameters***

- **`a`** (`Array<string>`)
- **`b`** (`Array<string>`)

***Return type***

Returns `true` if `a` and `b` are the same, else `false`.

```
boolean
```

### extractAttributes&lt;PlainObject, Key&gt;(array, attributes)

Extracts the specified list of `attributes` from the given `array` of
plain objects.

***Type parameters***

- **`PlainObject`**
- **`Key`** (`keyof PlainObject`)

***Parameters***

- **`array`** (`Array<PlainObject>`)
- **`attributes`** (`Key[]`)

***Return type***

Returns an array of plain objects.

```
Array<Pick<PlainObject, Key>>
```

## Settings

```ts
import {
  loadSettingsAsync,
  saveSettingsAsync
} from '@create-figma-plugin/utilities'
```

### loadSettingsAsync&lt;Settings&gt;(defaultSettings [, settingsKey])

Loads your plugin’s settings (stored locally on the user’s computer under
the given `settingsKey`). `settingsKey` defaults to `'settings'`. Values
in `settings` default to an optional `defaultSettings` object.

***Type parameters***

- **`Settings`**

***Parameters***

- **`defaultSettings`** (`Settings`)
- **`settingsKey`** (`string`) – *Optional.*

***Return type***

```
Promise<Settings>
```

### saveSettingsAsync&lt;Settings&gt;(settings [, settingsKey])

Saves the given `settings` for your plugin (stored locally on the user’s
computer under the given `settingsKey`). `settingsKey` defaults to
`'settings'`.

***Type parameters***

- **`Settings`**

***Parameters***

- **`settings`** (`Settings`)
- **`settingsKey`** (`string`) – *Optional.*

***Return type***

```
Promise<void>
```

## String

```ts
import {
  formatErrorMessage,
  formatSuccessMessage,
  formatWarningMessage,
  pluralize
} from '@create-figma-plugin/utilities'
```

### formatErrorMessage(message)

Adds a `✘` prefix to the given `message`.

***Parameters***

- **`message`** (`string`)

***Return type***

```
string
```

### formatSuccessMessage(message)

Adds a `✔` prefix to the given `message`.

***Parameters***

- **`message`** (`string`)

***Return type***

```
string
```

### formatWarningMessage(message)

Adds a `⚠` prefix to the given `message`.

***Parameters***

- **`message`** (`string`)

***Return type***

```
string
```

### pluralize(number, singular [, plural])

Returns `singular` if `number` is exactly `1`, else returns `plural`.
`plural` defaults to `${singular}s` if not specified.

***Parameters***

- **`number`** (`number`)
- **`singular`** (`string`)
- **`plural`** (`string`) – *Optional.*

***Return type***

```
string
```

## UI

```ts
import {
  showUI
} from '@create-figma-plugin/utilities'
```

### showUI&lt;Data&gt;(options [, data])

Renders the UI correponding to the command in a modal within the Figma UI.
Specify the width, height, and visibility of the UI via `options`.
Optionally pass on some initialising `data` from the command to the UI.

See how to [add a UI to a plugin command](#ui-1).

***Type parameters***

- **`Data`** (`Record<string, unknown>`)

***Parameters***

- **`options`** (`ShowUIOptions`)
- **`data`** (`Data`) – *Optional.*

***Return type***

```
void
```