# API

<!-- toc -->

- [**Events**](#events)
  * [on(eventName, eventListener)](#const-removeeventlistener--addeventlistenereventname-eventlistener)
  * [onSelectionChange(eventListener)](#const-removeeventlistener--onselectionchangeeventlistener)
  * [emit(eventName *[, ...arguments]*)](#triggereventeventname--arguments)
  * [*Example*](#example)
- [**Layers**](#layers)
  * [insertBeforeLayer(layer, referenceLayer)](#insertbeforelayerlayer-referencelayer)
  * [insertAfterLayer(layer, referenceLayer)](#insertafterlayerlayer-referencelayer)
  * [getSelectedLayersOrAllLayers()](#const-layers--getselectedlayersoralllayers)
  * [getDocumentComponents()](#const-components--getdocumentcomponents)
  * [const {x, y} = getAbsolutePosition(layer)](#const-x-y--getabsolutepositionlayer)
  * [setAbsolutePosition(layer, absolutePosition)](#setabsolutepositionlayer-absoluteposition)
  * [const {x, y, width, height} = computeBoundingBox(layer)](#const-x-y-width-height--computeboundingboxlayer)
  * [const [topLeft, bottomRight] = computeMaximumBounds(layers)](#const-topleft-bottomright--computemaximumboundslayers)
  * [isLayerWithinInstance(layer)](#const-result--islayerwithininstancelayer)
  * [traverseLayer(layer, processLayer *[, stopTraversal]*)](#traverselayerlayer-processlayer--stoptraversal)
  * [sortLayersByName(layers)](#sortlayersbynamelayers)
  * [updateLayersSortOrder(layers)](#updatelayerssortorderlayers)
  * [groupSiblingLayers(layers)](#const-groups--groupsiblinglayerslayers)
  * [removeDuplicateLayers(layers)](#const-result--removeduplicatelayerslayers)
  * [collapseLayer(layer)](#collapselayerlayer)
  * [await loadFonts(layers)](#await-loadfontslayers)
  * [setRelaunchButton(layer, key *[, description]*)](#setrelaunchbuttonlayer-key--description)
- [**Number**](#number)
  * [isValidNumericInput(value *[, integerOnly]*)](#const-result--isvalidnumericinputvalue--integeronly)
  * [evaluateNumericExpression(expression)](#const-result--evaluatenumericexpressionexpression)
- [**Object**](#object)
  * [cloneObject(object)](#const-result--cloneobjectobject)
  * [extractAttributes(objects, attributes)](#const-result--extractattributesobjects-attributes)
  * [compareObjects(a, b)](#const-result--compareobjectsa-b)
- [**Settings**](#settings)
  * [await loadSettings(*[defaultSettings]*)](#const-settings--await-loadsettingsdefaultsettings)
  * [await saveSettings(settings)](#await-savesettingssettings)
- [**String**](#string)
  * [formatErrorMessage(message)](#const-errormessage--formaterrormessagemessage)
  * [formatSuccessMessage(message)](#const-successmessage--formatsuccessmessagemessage)
  * [mapNumberToWord(number)](#const-word--mapnumbertowordnumber)
  * [pluralize(number, singular *[, plural]*)](#const-word--pluralizenumber-singular--plural)
- [**UI**](#ui)
  * [showUI(options *[, data]*)](#showuioptions--data)
  * [*Example*](#example-1)

<!-- tocstop -->

---

## Events

```js
import {
  emit,
  on
} from '@create-figma-plugin/utilities'
```

### const off = on(eventName, eventListener)

Registers an `eventListener` for the given `eventName`.

#### Returns

- A `function` for deregistering the `eventListener`

#### Parameters

- `eventName` (`string`)
- `eventListener` (`function (...arguments)`)

### emit(eventName *[, ...arguments]*)

- Calling `emit` in your plugin command invokes the event listener with the matching `eventName` in your UI.
- Calling `emit` in your UI invokes the event listener with the matching `eventName` in the plugin command.

All `arguments` passed after `eventName` are directly applied on the event listener.

#### Returns

- `undefined`

#### Parameters

- `eventName` (`string`)

### *Example*

```js
// command.js

import {
  emit,
  on,
  // ...
} from '@create-figma-plugin/utilities'

export default function () {
  // ...
  on('foo', function (count) {
    console.log(count) //=> 2
  })
  emit('bar', 1)
}
```

```js
// ui.js

import {
  emit,
  on
} from '@create-figma-plugin/utilities'

export default function () {
  // ...
  on('bar', function (count) {
    console.log(count) //=> 1
    emit('foo', count + 1)
  })
}
```

---

## Layers

```js
import {
  insertBeforeLayer,
  insertAfterLayer,
  getSelectedLayersOrAllLayers,
  getDocumentComponents,
  getAbsolutePosition
  setAbsolutePosition,
  computeBoundingBox,
  computeMaximumBounds,
  isLayerWithinInstance,
  traverseLayer,
  sortLayersByName,
  updateLayersSortOrder,
  groupSiblingLayers,
  removeDuplicateLayers,
  collapseLayer,
  loadFonts,
  setRelaunchButton
} from '@create-figma-plugin/utilities'
```

### insertBeforeLayer(layer, referenceLayer)

Inserts `layer` before the `referenceLayer` in the layer list.

#### Returns

- `undefined`

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))
- `referenceLayer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### insertAfterLayer(layer, referenceLayer)

Inserts `layer` after the `referenceLayer` in the layer list.

#### Returns

- `undefined`

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))
- `referenceLayer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### const layers = getSelectedLayersOrAllLayers()

Gets the selected layers, or all the top-level layers on the current page if no layers are selected.

#### Returns

- An `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

### const components = getDocumentComponents()

Gets all the components in the current document.

#### Returns

- An `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

### const {x, y} = getAbsolutePosition(layer)

Returns the X and Y position of the given `layer` relative to the page.

#### Returns

- A plain `object` with `x` and `y` keys

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### setAbsolutePosition(layer, absolutePosition)

Sets the `layer` to the given `absolutePosition`.

#### Returns

- `undefined`

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))
- `absolutePosition` (a plain `object` with `x` and `y` keys)

### const {x, y, width, height} = computeBoundingBox(layer)

Computes the coordinates and dimensions of the smallest bounding box that contains the given `layer`.

#### Returns

- A plain `object` with `x`, `y`, `width`, and `height` keys

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### const [topLeft, bottomRight] = computeMaximumBounds(layers)

Computes the absolute coordinates of the `topLeft` and `bottomRight` corners of the smallest bounding box that contains the given `layers`.

#### Returns

- The `topLeft` and `bottomRight` coordinates as plain `object`s with `x` and `y` keys

#### Parameters

- `layers` (an `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### const result = isLayerWithinInstance(layer)

Checks if the `layer` is within an Instance.

#### Returns

- `true` if `layer` is within an Instance, else `false`

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### traverseLayer(layer, processLayer *[, stopTraversal]*)

Traverses `layer` and its child layers recursively in a *depth-first* manner, passing each layer to the specified `processLayer` callback.

Each layer is also passed to a `stopTraversal` function. If you return `false` in `stopTraversal` for a particular layer, then its child layers will not be traversed.

#### Returns

- `undefined`

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))
- `processLayer` (`function (layer)`)
- `stopTraversal` (`function (layer)`) *(optional)*

### sortLayersByName(layers)

Sorts `layers` by layer name in alphabetical order.

#### Returns

- An `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `layers` (an `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### updateLayersSortOrder(layers)

Updates the layer list sort order of the layers in `layers`.

#### Returns

- `true` if the layer list sort order was changed, else `false`

#### Parameters

- `layers` (an `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### const groups = groupSiblingLayers(layers)

Splits `layers` into smaller groups of sibling layers.

#### Returns

- An `array` of `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `layers` (an `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### const result = removeDuplicateLayers(layers)

Deduplicates `layers`.

#### Returns

- An `array` of unique [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `layers` (an `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### collapseLayer(layer)

Collapses `layer` and all its child layers in the layer list.

#### Returns

- `undefined`

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### await loadFonts(layers)

Loads the fonts used in all the text layers in `layers`.

#### Returns

- `Promise`

#### Parameters

- `layers` (an `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### setRelaunchButton(layer, key *[, description]*)

Adds a [relaunch button](https://www.figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/) on `layer` for the command with the given `key` as [configured](2-configuration.md#packagejson) under **`"relaunchButtons"`**. `description` is the text displayed below the relaunch button.

#### Returns

- `undefined`

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))
- `key` (`string`)
- `description` (`string`) *(optional)*

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

- `value` (`string`)
- `integerOnly` (`boolean`) *(optional)*

### const result = evaluateNumericExpression(expression)

Evaluates the given numeric `expression`.

#### Returns

- A `float`, the result of evaluating the given `expression`

#### Parameters

- `expression` (`string`)

---

## Object

```js
import {
  cloneObject,
  extractAttributes,
  compareObjects
} from '@create-figma-plugin/utilities'
```

### const result = cloneObject(object)

Creates a deep copy of the given plain `object`.

#### Returns

- A deep copy of the given `object`

#### Parameters

- `object` (`any`)

### const result = extractAttributes(objects, attributes)

Extracts the specified `attributes` from the given `objects`.

#### Returns

- An `array` of plain `object`s

#### Parameters

- `objects` (an `array` of `object`)
- `attributes` (an `array` of `string`)

### const result = compareObjects(a, b)

Performs a *shallow* comparison of objects `a` and `b`.

#### Returns

- `true` if `a` and `b` are the same, else `false`

#### Parameters

- `a` (`any`)
- `b` (`any`)

---

## Settings

```js
import {
  loadSettings,
  saveSettings
} from '@create-figma-plugin/utilities'
```

### const settings = await loadSettings(*[defaultSettings]*)

Loads your plugin’s `settings` (stored locally on the user’s computer). Values in `settings` default to an optional `defaultSettings` object.

#### Returns

- A `Promise` for a plain `object`

#### Parameters

- `defaultSettings` (`object`) *(optional)*

### await saveSettings(settings)

Saves the given `settings` for the plugin (stored locally on the user’s computer).

#### Returns

- `Promise`

#### Parameters

- `settings` (`object`)

---

## String

```js
import {
  formatErrorMessage
  formatSuccessMessage,
  mapNumberToWord,
  pluralize
} from '@create-figma-plugin/utilities'
```

### const errorMessage = formatErrorMessage(message)

Adds a `✘` prefix to the given `message`.

#### Returns

- `string`

#### Parameters

- `message` (`string`)

### const successMessage = formatSuccessMessage(message)

Adds a `✔` prefix to the given `message`.

#### Returns

- `string`

#### Parameters

- `message` (`string`)

### const word = mapNumberToWord(number)

If `number` is between 0 and 9, returns the English word for the `number` (eg. `7` maps to `seven`). Otherwise, returns `number` as a string.

#### Returns

- `string`

#### Parameters

- `number` (`number`)

### const word = pluralize(number, singular *[, plural]*)

Returns `singular` if `number` is exactly `1`, else returns `plural`. `plural` defaults to `${singular}s` if not specified.

#### Returns

- `string`

#### Parameters

- `number` (`number`)
- `singular` (`string`)
- `plural` (`string`) *(optional)*

---

## UI

```js
import { showUI } from '@create-figma-plugin/utilities'
```

### showUI(options *[, data]*)

Renders the UI correponding to the command in an `<iframe>`. Specify the width, height, and visibility of the UI via `options`. Optionally pass on some initialising `data` from the command to the UI.

#### Returns

- `undefined`

#### Parameters

- `options` (`object`)
  - `width` (`number`)
  - `height` (`number`)
  - `visible` (`boolean`)
- `data` (`any`) *(optional)*

### *Example*

```js
// command.js

import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  // ...
  showUI({ width: 240, height: 320 }, 'Hello, World!')
  // ...
}
```

```js
// ui.js

export default function (rootNode, data) {
  console.log(data) //=> 'Hello, World!'
  // ...
}
```
