> # WIP

---

# Utility functions

These utility functions are part of the `@create-figma-plugin/utilities` module. If you had initialized your plugin with `npx create-figma-plugin`, the module would have already been installed. Otherwise, do:

```
$ npm install @create-figma-plugin/utilities
```

---

<!-- toc -->

- [**Events**](#events)
  * [on(eventName, eventHandler)](#const-off--oneventname-eventhandler)
  * [once(eventName, eventHandler)](#const-off--onceeventname-eventhandler)
  * [emit(eventName *[, ...arguments]*)](#emiteventname--arguments)
- [**Nodes**](#nodes)
  * [insertBeforeNode(node, referenceNode)](#insertbeforenodenode-referencenode)
  * [insertAfterNode(node, referenceNode)](#insertafternodenode-referencenode)
  * [getSelectedNodesOrAllNodes()](#const-nodes--getselectednodesorallnodes)
  * [getDocumentComponents()](#const-components--getdocumentcomponents)
  * [getAbsolutePosition(node)](#const-x-y--getabsolutepositionnode)
  * [setAbsolutePosition(node, absolutePosition)](#setabsolutepositionnode-absoluteposition)
  * [computeBoundingBox(node)](#const-x-y-width-height--computeboundingboxnode)
  * [computeMaximumBounds(nodes)](#const-topleft-bottomright--computemaximumboundsnodes)
  * [isNodeWithinInstance(node)](#const-result--isnodewithininstancenode)
  * [traverseNode(node, processNode *[, stopTraversal]*)](#traversenodenode-processnode--stoptraversal)
  * [sortNodesByName(nodes)](#const-sortednodes--sortnodesbynamenodes)
  * [sortSiblingNodesByNodeListOrder(siblingNodes)](#const-sortedsiblingnodes--sortsiblingnodesbynodelistordersiblingnodes)
  * [updateNodesSortOrder(nodes)](#const-didchange--updatenodessortordernodes)
  * [areSiblingNodes(nodes)](#const-result--aresiblingnodesnodes)
  * [computeSiblingNodes(nodes)](#const-groups--computesiblingnodesnodes)
  * [removeDuplicateNodes(nodes)](#const-uniquenodes--removeduplicatenodesnodes)
  * [collapseNode(node)](#collapsenodenode)
  * [createImagePaint(bytes)](#const-imagepaint--createimagepaintbytes)
  * [loadFontsAsync(nodes)](#await-loadfontsasyncnodes)
  * [setRelaunchButton(node, relaunchButtonId *[, description]*)](#setrelaunchbuttonnode-relaunchbuttonid--description)
- [**Number**](#number)
  * [isValidNumericInput(value *[, integerOnly]*)](#const-result--isvalidnumericinputvalue--integeronly)
  * [evaluateNumericExpression(expression)](#const-result--evaluatenumericexpressionexpression)
- [**Object**](#object)
  * [cloneObject(object)](#const-result--cloneobjectobject)
  * [compareObjects(a, b)](#const-result--compareobjectsa-b)
  * [extractAttributes(objects, attributes)](#const-result--extractattributesobjects-attributes)
- [**Settings**](#settings)
  * [loadSettingsAsync(*[defaultSettings]*)](#const-settings--await-loadsettingsasyncdefaultsettings)
  * [saveSettingsAsync(settings)](#await-savesettingsasyncsettings)
- [**String**](#string)
  * [formatErrorMessage(message)](#const-errormessage--formaterrormessagemessage)
  * [formatSuccessMessage(message)](#const-successmessage--formatsuccessmessagemessage)
  * [formatWarningMessage(message)](#const-successmessage--formatwarningmessagemessage)
  * [pluralize(number, singular *[, plural]*)](#const-word--pluralizenumber-singular--plural)
- [**UI**](#ui)
  * [showUI(options *[, data]*)](#showuioptions--data)

<!-- tocstop -->

---

## Events

```js
import {
  emit,
  on,
  once
} from '@create-figma-plugin/utilities'
```

See the [recipe for passing data between the plugin command’s main and UI contexts](/docs/recipes/data-passing.md#readme).

### const off = on(eventName, eventHandler)

Registers an `eventHandler` for the given `eventName`.

#### Returns

- A function for deregistering the `eventHandler`

#### Parameters

- `eventName` (*`string`*)
- `eventHandler` (*`function (...arguments)`*)

### const off = once(eventName, eventHandler)

Registers an `eventHandler` that will run at most once for the given `eventName`.

#### Returns

- A function for deregistering the `eventHandler`

#### Parameters

- `eventName` (*`string`*)
- `eventHandler` (*`function (...arguments)`*)

### emit(eventName *[, ...arguments]*)

Calling `emit` in the main context invokes the event handler for the matching `eventName` in your UI. Correspondingly, calling `emit` in your UI invokes the event handler for the matching `eventName` in the main context.

All `arguments` passed after `eventName` will be directly [applied](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) on the event handler.

#### Returns

- `undefined`

#### Parameters

- `eventName` (*`string`*)

---

## Nodes

```js
import {
  insertBeforeNode,
  insertAfterNode,
  getSelectedNodesOrAllNodes,
  getDocumentComponents,
  getAbsolutePosition
  setAbsolutePosition,
  computeBoundingBox,
  computeMaximumBounds,
  isNodeWithinInstance,
  traverseNode,
  sortNodesByName,
  sortSiblingNodesByNodeListOrder,
  updateNodesSortOrder,
  areSiblingNodes,
  computeSiblingNodes,
  removeDuplicateNodes,
  collapseNode,
  createImagePaint,
  loadFontsAsync,
  setRelaunchButton
} from '@create-figma-plugin/utilities'
```

### insertBeforeNode(node, referenceNode)

Inserts `node` before the `referenceNode` in the node list.

#### Returns

- `undefined`

#### Parameters

- `node` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
- `referenceNode` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### insertAfterNode(node, referenceNode)

Inserts `node` after the `referenceNode` in the node list.

#### Returns

- `undefined`

#### Parameters

- `node` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
- `referenceNode` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const nodes = getSelectedNodesOrAllNodes()

Gets the selected nodes, or all the top-level nodes on the current page if no nodes are selected.

#### Returns

- An array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

### const components = getDocumentComponents()

Gets all the components in the current document.

#### Returns

- An array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

### const {x, y} = getAbsolutePosition(node)

Returns the X and Y position of the given `node` relative to the page.

#### Returns

- A plain object with `x` and `y` keys

#### Parameters

- `node` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### setAbsolutePosition(node, absolutePosition)

Sets the `node` to the given `absolutePosition`.

#### Returns

- `undefined`

#### Parameters

- `node` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
- `absolutePosition` (a plain object with `x` and `y` keys)

### const {x, y, width, height} = computeBoundingBox(node)

Computes the coordinates and dimensions of the smallest bounding box that contains the given `node`.

#### Returns

- A plain object with `x`, `y`, `width`, and `height` keys

#### Parameters

- `node` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const [topLeft, bottomRight] = computeMaximumBounds(nodes)

Computes the absolute coordinates of the `topLeft` and `bottomRight` corners of the smallest bounding box that contains the given `nodes`.

#### Returns

- The `topLeft` and `bottomRight` coordinates as plain objects with `x` and `y` keys

#### Parameters

- `nodes` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const result = isNodeWithinInstance(node)

Checks if the `node` is within an instance.

#### Returns

- `true` if `node` is within an instance, else `false`

#### Parameters

- `node` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### traverseNode(node, processNode *[, stopTraversal]*)

Traverses `node` and its child nodes recursively in a *depth-first* manner, passing each node to the specified `processNode` callback.

Each node is also passed to a `stopTraversal` function. If you return `false` in `stopTraversal` for a particular node, then its child nodes will not be traversed.

#### Returns

- `undefined`

#### Parameters

- `node` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
- `processNode` (*`function (node)`*)
- `stopTraversal` (*`function (node)`*) *(optional)*

### const sortedNodes = sortNodesByName(nodes)

Sorts `nodes` by node name in alphabetical order.

#### Returns

- A new array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `nodes` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const sortedSiblingNodes = sortSiblingNodesByNodeListOrder(siblingNodes)

Sorts `siblingNodes` by their node list order.

#### Returns

- A new array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `siblingNodes` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const didChange = updateNodesSortOrder(nodes)

Updates the node list sort order to follow the sort order of `nodes`.

#### Returns

- `true` if the node list sort order was changed, else `false`

#### Parameters

- `nodes` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const result = areSiblingNodes(nodes)

Checks if all nodes in `nodes` are sibling nodes.

#### Returns

- `true` if all nodes in `nodes` are sibling nodes, else `false`

#### Parameters

- `nodes` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const groups = computeSiblingNodes(nodes)

Splits `nodes` into groups of sibling nodes.

#### Returns

- An array of array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `nodes` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const uniqueNodes = removeDuplicateNodes(nodes)

Deduplicates the nodes in `nodes`.

#### Returns

- An array of unique [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `nodes` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### collapseNode(node)

Collapses `node` and all its child nodes in the node list.

#### Returns

- `undefined`

#### Parameters

- `node` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const imagePaint = createImagePaint(bytes)

Creates an *`ImagePaint`* object from the `bytes` of an image.

#### Returns

- An [*`ImagePaint`*](https://figma.com/plugin-docs/api/Paint/#imagepaint) object

#### Parameters

- `bytes` ([*`Uint8Array`*](https://figma.com/plugin-docs/api/Image/#getbytesasync))

### await loadFontsAsync(nodes)

Loads the fonts used in all the text nodes in `nodes`.

#### Returns

- A *`Promise`*

#### Parameters

- `nodes` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### setRelaunchButton(node, relaunchButtonId *[, description]*)

Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/) on `node` for the command with the given `relaunchButtonId` as configured under [**`"relaunchButtons"`**](/docs/configuration.md#relaunchbuttons) in `package.json`. `description` is the text displayed below the relaunch button in the Figma UI.

See the [recipe for configuring relaunch buttons](/docs/recipes/relaunch-buttons.md#readme).

#### Returns

- `undefined`

#### Parameters

- `node` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
- `key` (*`string`*)
- `description` (*`string`*) *(optional)*

---

## Number

```js
import {
  isValidNumericInput,
  evaluateNumericExpression
} from '@create-figma-plugin/utilities'
```

### const result = isValidNumericInput(value *[, integerOnly]*)

Checks if `value` is a numeric expression, as input by a user. “Partial” inputs are considered valid. Set `integerOnly` to `true` to check that the expression contains only integers. `integerOnly` defaults to `false` if not specified.

#### Returns

- `true` if `value` is a valid numeric expression, else `false`

#### Parameters

- `value` (*`string`*)
- `integerOnly` (*`boolean`*) *(optional)*

### const result = evaluateNumericExpression(expression)

Evaluates the given numeric `expression`.

#### Returns

- A *`float`*, the result of evaluating the given `expression`

#### Parameters

- `expression` (*`string`*)

---

## Object

```js
import {
  cloneObject,
  compareObjects,
  extractAttributes
} from '@create-figma-plugin/utilities'
```

### const result = cloneObject(object)

Creates a deep copy of the given plain object.

#### Returns

- A deep copy of the given `object`

#### Parameters

- `object` (*`any`*)

### const result = compareObjects(a, b)

Performs a deep comparison of objects `a` and `b`.

#### Returns

- `true` if `a` and `b` are the same, else `false`

#### Parameters

- `a` (*`any`*)
- `b` (*`any`*)

### const result = extractAttributes(objects, attributes)

Extracts the specified `attributes` from the given `objects`.

#### Returns

- An array of plain objects

#### Parameters

- `objects` (an array of *`object`*)
- `attributes` (an array of *`string`*)

---

## Settings

```js
import {
  loadSettingsAsync,
  saveSettingsAsync
} from '@create-figma-plugin/utilities'
```

### const settings = await loadSettingsAsync(*[defaultSettings]*)

Loads your plugin’s `settings` (stored locally on the user’s computer). Values in `settings` default to an optional `defaultSettings` object.

#### Returns

- A *`Promise`* for a plain object

#### Parameters

- `defaultSettings` (*`object`*) *(optional)*

### await saveSettingsAsync(settings)

Saves the given `settings` for the plugin (stored locally on the user’s computer).

#### Returns

- *`Promise`*

#### Parameters

- `settings` (*`object`*)

---

## String

```js
import {
  formatErrorMessage
  formatSuccessMessage,
  pluralize
} from '@create-figma-plugin/utilities'
```

### const errorMessage = formatErrorMessage(message)

Adds a `✘` prefix to the given `message`.

#### Returns

- *`string`*

#### Parameters

- `message` (*`string`*)

### const successMessage = formatSuccessMessage(message)

Adds a `✔` prefix to the given `message`.

#### Returns

- *`string`*

#### Parameters

- `message` (*`string`*)

### const successMessage = formatWarningMessage(message)

Adds a `⚠` prefix to the given `message`.

#### Returns

- *`string`*

#### Parameters

- `message` (*`string`*)

### const word = pluralize(number, singular *[, plural]*)

Returns `singular` if `number` is exactly `1`, else returns `plural`. `plural` defaults to `${singular}s` if not specified.

#### Returns

- *`string`*

#### Parameters

- `number` (*`number`*)
- `singular` (*`string`*)
- `plural` (*`string`*) *(optional)*

---

## UI

```js
import { showUI } from '@create-figma-plugin/utilities'
```

### showUI(options *[, data]*)

Renders the UI correponding to the command in a modal within the Figma UI. Specify the width, height, and visibility of the UI via `options`. Optionally pass on some initialising `data` from the command to the UI.

See the [recipe for adding a UI to a plugin command](/docs/recipes/ui.md#readme).

#### Returns

- `undefined`

#### Parameters

- `options` (*`object`*)
  - `width` (*`number`*)
  - `height` (*`number`*)
  - `visible` (*`boolean`*)
- `data` (*`any`*) *(optional)*
