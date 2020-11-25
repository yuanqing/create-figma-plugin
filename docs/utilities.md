# Utilities

- [**Events**](#events)
  - [emit()](#emit)
  - [on(eventName, eventHandler)](#oneventname-eventhandler)
  - [once(eventName, eventHandler)](#onceeventname-eventhandler)
- [**Node**](#node)
  - [areSiblingNodes(nodes)](#aresiblingnodesnodes)
  - [collapseLayer(node)](#collapselayernode)
  - [computeBoundingBox(node)](#computeboundingboxnode)
  - [computeMaximumBounds(nodes)](#computemaximumboundsnodes)
  - [computeSiblingNodes(nodes)](#computesiblingnodesnodes)
  - [createImagePaint(bytes)](#createimagepaintbytes)
  - [deduplicateNodes(nodes)](#deduplicatenodesnodes)
  - [getAbsolutePosition(node)](#getabsolutepositionnode)
  - [getDocumentComponents()](#getdocumentcomponents)
  - [getSelectedNodesOrAllNodes()](#getselectednodesorallnodes)
  - [insertAfterNode(node, referenceNode)](#insertafternodenode-referencenode)
  - [insertBeforeNode(node, referenceNode)](#insertbeforenodenode-referencenode)
  - [isWithinInstance(node)](#iswithininstancenode)
  - [loadFontsAsync(nodes)](#loadfontsasyncnodes)
  - [setAbsolutePosition(node, vector)](#setabsolutepositionnode-vector)
  - [setRelaunchButton(node, key [, options])](#setrelaunchbuttonnode-key--options)
  - [sortNodesByCanonicalOrder(siblingNodes)](#sortnodesbycanonicalordersiblingnodes)
  - [sortNodesByName(nodes)](#sortnodesbynamenodes)
  - [traverseNode(node, processNode [, stopTraversal])](#traversenodenode-processnode--stoptraversal)
  - [updateNodesSortOrder(siblingNodes)](#updatenodessortordersiblingnodes)
- [**Number**](#number)
  - [evaluateNumericExpression(value)](#evaluatenumericexpressionvalue)
  - [isValidNumericInput(value [, integerOnly])](#isvalidnumericinputvalue--integeronly)
- [**Object**](#object)
  - [cloneObject(object)](#cloneobjectobject)
  - [compareArrays(a, b)](#comparearraysa-b)
  - [compareObjects(a, b)](#compareobjectsa-b)
  - [extractAttributes(array, attributes)](#extractattributesarray-attributes)
- [**Settings**](#settings)
  - [loadSettingsAsync(defaultSettings)](#loadsettingsasyncdefaultsettings)
  - [saveSettingsAsync(settings)](#savesettingsasyncsettings)
- [**String**](#string)
  - [formatErrorMessage(message)](#formaterrormessagemessage)
  - [formatSuccessMessage(message)](#formatsuccessmessagemessage)
  - [formatWarningMessage(message)](#formatwarningmessagemessage)
  - [pluralize(number, singular [, plural])](#pluralizenumber-singular--plural)
- [**UI**](#ui)
  - [showUI(options [, data])](#showuioptions--data)

## Events

### emit()

Calling `emit` in the main context invokes the event handler for the matching `eventName` in your UI. Correspondingly, calling `emit` in your UI invokes the event handler for the matching `eventName` in the main context.

All `arguments` passed after `eventName` will be directly applied on the event handler.

#### *Return type*

```
void
```

### on(eventName, eventHandler)

Registers an `eventHandler` for the given `eventName`.

#### *Parameters*

- **`eventName`** (`string`)
- **`eventHandler`** (`(...args: Array<any>) => void`)

#### *Return type*

```
() => void
```

### once(eventName, eventHandler)

Registers an `eventHandler` that will run at most once for the given `eventName`.

#### *Parameters*

- **`eventName`** (`string`)
- **`eventHandler`** (`(...args: Array<any>) => void`)

#### *Return type*

```
() => void
```
## Node

### areSiblingNodes(nodes)

Checks if all nodes in `nodes` are sibling nodes.

#### *Parameters*

- **`nodes`** (`Array<SceneNode>`)

#### *Return type*

```
boolean
```

### collapseLayer(node)

Collapses `node` and all its child nodes in the layer list.

#### *Parameters*

- **`node`** (`SceneNode`)

#### *Return type*

```
boolean
```

### computeBoundingBox(node)

Computes the coordinates (`x`, `y`) and dimensions (`width`, `height`) of the smallest bounding box that contains the given `node`.

#### *Parameters*

- **`node`** (`SceneNode`)

#### *Return type*

```
Rect
```

### computeMaximumBounds(nodes)

Computes the absolute coordinates of the top-left and bottom-right corners of the smallest bounding box that contains the given `nodes`.

#### *Parameters*

- **`nodes`** (`Array<SceneNode>`)

#### *Return type*

```
[Vector, Vector]
```

### computeSiblingNodes(nodes)

Splits `nodes` into groups of sibling nodes.

#### *Parameters*

- **`nodes`** (`Array<SceneNode>`)

#### *Return type*

```
Array<Array<SceneNode>>
```

### createImagePaint(bytes)

Creates an `ImagePaint` object from the `bytes` of an image.

#### *Parameters*

- **`bytes`** (`Uint8Array`)

#### *Return type*

```
ImagePaint
```

### deduplicateNodes(nodes)

Deduplicates the nodes in `nodes`. Does not modify the original `nodes` array.

#### *Parameters*

- **`nodes`** (`Array<SceneNode>`)

#### *Return type*

```
Array<SceneNode>
```

### getAbsolutePosition(node)

Returns the `x` and `y` position of the given `node` relative to the page.

#### *Parameters*

- **`node`** (`SceneNode`)

#### *Return type*

```
{
  x: number;
  y: number;
}
```

### getDocumentComponents()

Gets all the components in the current document.

#### *Return type*

```
Array<ComponentNode>
```

### getSelectedNodesOrAllNodes()

Gets the selected nodes, or all the top-level nodes on the current page if no nodes are selected.

#### *Return type*

```
Array<SceneNode>
```

### insertAfterNode(node, referenceNode)

Inserts `node` after the `referenceNode` in the layer list.

#### *Parameters*

- **`node`** (`SceneNode`)
- **`referenceNode`** (`SceneNode`)

#### *Return type*

```
void
```

### insertBeforeNode(node, referenceNode)

Inserts `node` before the `referenceNode` in the layer list.

#### *Parameters*

- **`node`** (`SceneNode`)
- **`referenceNode`** (`SceneNode`)

#### *Return type*

```
void
```

### isWithinInstance(node)

Checks if the given `node` is within an Instance.

#### *Parameters*

- **`node`** (`SceneNode`)

#### *Return type*

```
boolean
```

### loadFontsAsync(nodes)

Loads the fonts used in all the text nodes in `nodes`.

#### *Parameters*

- **`nodes`** (`Array<SceneNode>`)

#### *Return type*

```
Promise<void>
```

### setAbsolutePosition(node, vector)

Sets the `node` to the given `x` and `y` absolute position.

#### *Parameters*

- **`node`** (`SceneNode`)
- **`vector`** (`object`)
  - **`x`** (`number`) – *Optional.*
  - **`y`** (`number`) – *Optional.*

#### *Return type*

```
void
```

### setRelaunchButton(node, key [, options])

Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/) on `node` for the command with the given `relaunchButtonId` as configured under [**`"relaunchButtons"`**](/docs/configuration.md#relaunchbuttons) in `package.json`. `description` is the text displayed below the relaunch button in the Figma UI.

See the [recipe for configuring relaunch buttons](/docs/recipes/relaunch-buttons.md#readme).

#### *Parameters*

- **`node`** (`BaseNode`)
- **`key`** (`string`)
- **`options`** (`object`) – *Optional.*
  - **`description`** (`string`)

#### *Return type*

```
void
```

### sortNodesByCanonicalOrder(siblingNodes)

Sorts `siblingNodes` according to their layer list order. Does not modify the original `siblingNodes` array.

#### *Parameters*

- **`siblingNodes`** (`Array<SceneNode>`)

#### *Return type*

```
Array<SceneNode>
```

### sortNodesByName(nodes)

Sorts `nodes` in alphabetical order. Does not modify the original `nodes` array.

#### *Parameters*

- **`nodes`** (`Array<SceneNode>`)

#### *Return type*

```
Array<SceneNode>
```

### traverseNode(node, processNode [, stopTraversal])

Traverses `node` and its child nodes recursively in a *depth-first* manner, passing each node to the specified `processNode` callback.

Each node is also passed to a `stopTraversal` function. If you return `false` in `stopTraversal` for a particular node, then its child nodes will not be traversed.

#### *Parameters*

- **`node`** (`SceneNode`)
- **`processNode`** (`(node: SceneNode) => void`)
- **`stopTraversal`** (`(node: SceneNode) => boolean`) – *Optional.*

#### *Return type*

```
void
```

### updateNodesSortOrder(siblingNodes)

Updates the layer list sort order to follow the sort order of the nodes in the `siblingNodes` array.

#### *Parameters*

- **`siblingNodes`** (`Array<SceneNode>`)

#### *Return type*

```
boolean
```
## Number

### evaluateNumericExpression(value)

Evaluates the given numeric `expression`.

#### *Parameters*

- **`value`** (`string`)

#### *Return type*

```
null | number
```

### isValidNumericInput(value [, integerOnly])

Checks if `value` is a numeric expression, as input by a user. “Partial” inputs are considered valid. Set `integerOnly` to `true` to check that the expression contains only integers. `integerOnly` defaults to `false` if not specified.

#### *Parameters*

- **`value`** (`string`)
- **`integerOnly`** (`boolean`) – *Optional.*

#### *Return type*

```
boolean
```
## Object

### cloneObject(object)

Creates a deep copy of the given object.

#### *Parameters*

- **`object`** (`any`)

#### *Return type*

```
any
```

### compareArrays(a, b)

Performs a *shallow* comparison of arrays `a` and `b`.

#### *Parameters*

- **`a`** (`Array<any>`)
- **`b`** (`Array<any>`)

#### *Return type*

```
boolean
```

### compareObjects(a, b)

Performs a *deep* comparison of objects `a` and `b`.

#### *Parameters*

- **`a`** (`any`)
- **`b`** (`any`)

#### *Return type*

```
boolean
```

### extractAttributes(array, attributes)

Extracts the specified list of `attributes` from the given `array` of objects.

#### *Parameters*

- **`array`** (`Array<{ [key: string]: any; }>`)
- **`attributes`** (`Array<string>`)

#### *Return type*

```
Array<{
  [key: string]: any;
}>
```
## Settings

### loadSettingsAsync(defaultSettings)

Loads your plugin’s `settings` (stored locally on the user’s computer). Values in `settings` default to an optional `defaultSettings` object.

#### *Parameters*

- **`defaultSettings`** (`Settings`)

#### *Return type*

```
Promise<Settings>
```

### saveSettingsAsync(settings)

Saves the given `settings` for your plugin (stored locally on the user’s computer).

#### *Parameters*

- **`settings`** (`Settings`)

#### *Return type*

```
Promise<void>
```
## String

### formatErrorMessage(message)

Adds a `✘` prefix to the given `message`.

#### *Parameters*

- **`message`** (`string`)

#### *Return type*

```
string
```

### formatSuccessMessage(message)

Adds a `✔` prefix to the given `message`.

#### *Parameters*

- **`message`** (`string`)

#### *Return type*

```
string
```

### formatWarningMessage(message)

Adds a `⚠` prefix to the given `message`.

#### *Parameters*

- **`message`** (`string`)

#### *Return type*

```
string
```

### pluralize(number, singular [, plural])

Returns `singular` if `number` is exactly `1`, else returns `plural`. `plural` defaults to `${singular}s` if not specified.

#### *Parameters*

- **`number`** (`number`)
- **`singular`** (`string`)
- **`plural`** (`string`) – *Optional.*

#### *Return type*

```
string
```
## UI

### showUI(options [, data])

Renders the UI correponding to the command in a modal within the Figma UI. Specify the width, height, and visibility of the UI via `options`. Optionally pass on some initialising `data` from the command to the UI.

See the [recipe for adding a UI to a plugin command](/docs/recipes/ui.md#readme).

#### *Parameters*

- **`options`** (`ShowUIOptions`)
- **`data`** (`any`) – *Optional.*

#### *Return type*

```
void
```
