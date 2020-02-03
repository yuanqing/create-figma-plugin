# API

<!-- toc -->

- [**Events**](#events)
  * [addEventListener(eventName, eventListener)](#const-removeeventlistener--addeventlistenereventname-eventlistener)
  * [onSelectionChange(eventListener)](#const-removeeventlistener--onselectionchangeeventlistener)
  * [triggerEvent(eventName *[, ...arguments]*)](#triggereventeventname--arguments)
  * [*Example*](#example)
- [**Layers**](#layers)
  * [insertBeforeLayer(layer, referenceLayer)](#insertbeforelayerlayer-referencelayer)
  * [insertAfterLayer(layer, referenceLayer)](#insertafterlayerlayer-referencelayer)
  * [getSelectedLayersOrAllLayers()](#const-layers--getselectedlayersoralllayers)
  * [getDocumentComponents()](#const-components--getdocumentcomponents)
  * [getAbsolutePosition(layer)](#const-absoluteposition--getabsolutepositionlayer)
  * [setAbsolutePosition(layer, absolutePosition)](#setabsolutepositionlayer-absoluteposition)
  * [isLayerWithinInstance(layer)](#const-result--islayerwithininstancelayer)
  * [traverseLayer(layer, processLayer *[, stopTraversal]*)](#traverselayerlayer-processlayer--stoptraversal)
  * [sortLayersByName(layer)](#sortlayersbynamelayer)
  * [updateLayersSortOrder(layer)](#updatelayerssortorderlayer)
  * [groupSiblingLayers(layers)](#const-groups--groupsiblinglayerslayers)
  * [removeDuplicateLayers(layers)](#const-result--removeduplicatelayerslayers)
  * [loadFonts(layers)](#const-promise--loadfontslayers)
- [**Number**](#number)
  * [isValidNumericInput(value *[, integerOnly]*)](#const-result--isvalidnumericinputvalue--integeronly)
  * [evaluateNumericExpression(expression)](#const-result--evaluatenumericexpressionexpression)
- [**Object**](#object)
  * [cloneObject(object)](#const-result--cloneobjectobject)
  * [extractAttributes(array, attributes)](#const-result--extractattributesarray-attributes)
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
  addEventListener,
  onSelectionChange,
  triggerEvent
} from '@create-figma-plugin/utilities'
```

### const removeEventListener = addEventListener(eventName, eventListener)

Registers an `eventListener` for the given `eventName`.

#### Returns

- A `function` for deregistering the `eventListener`

#### Parameters

- `eventName` (`string`)
- `eventListener` (`function (...arguments)`)

### const removeEventListener = onSelectionChange(eventListener)

Registers an `eventListener` for when the selection changes.

#### Returns

- A `function` for deregistering the `eventListener`

#### Parameters

- `eventListener` (`function (...arguments)`)

### triggerEvent(eventName *[, ...arguments]*)

Calling `triggerEvent` in your plugin command invokes the event listener with the matching `eventName` in the UI `<iframe>`. Calling `triggerEvent` in your UI invokes the event listener with the matching `eventName` in your plugin command.

All remaining `arguments` passed to `triggerEvent` are directly applied on the event listener.

#### Returns

- `undefined`

#### Parameters

- `eventName` (`string`)

### *Example*

```js
// command.js

import {
  addEventListener,
  triggerEvent,
  // ...
} from '@create-figma-plugin/utilities'

export default function () {
  // ...
  addEventListener('foo', function (count) {
    console.log(count) //=> 2
  })
  triggerEvent('bar', 1)
}
```

```js
// ui.js

import {
  addEventListener,
  triggerEvent
} from '@create-figma-plugin/utilities'

export default function () {
  // ...
  addEventListener('bar', function (count) {
    console.log(count) //=> 1
    triggerEvent('foo', count + 1)
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
  isLayerWithinInstance,
  traverseLayer,
  groupSiblingLayers,
  removeDuplicateLayers,
  loadFonts
} from '@create-figma-plugin/utilities'
```

### insertBeforeLayer(layer, referenceLayer)

Inserts `layer` before `referenceLayer` in the layer list.

#### Returns

- `undefined`

### insertAfterLayer(layer, referenceLayer)

Inserts `layer` after `referenceLayer` in the layer list.

#### Returns

- `undefined`

### const layers = getSelectedLayersOrAllLayers()

Gets the selected layers, or all the top-level layers on the current page if no layers are selected.

#### Returns

- An `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

### const components = getDocumentComponents()

Gets all the components in the current document.

#### Returns

- An `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

### const absolutePosition = getAbsolutePosition(layer)

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

- `absolutePosition` (a plain `object` with `x` and `y` keys)

### const result = isLayerWithinInstance(layer)

Checks if the `layer` is within Instance.

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
- `stopTraversal` (`function (layer`) *(optional)*

### sortLayersByName(layer)

Sorts `layer` in alphabetical order.

#### Returns

- An `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `layers` (an `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/))

### updateLayersSortOrder(layer)

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

### const promise = loadFonts(layers)

Loads the fonts used in all the text layers in `layers`.

#### Returns

- A `Promise` that resolves when all the fonts in `layers` were successfully loaded

#### Parameters

- `layers` (an `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/))

---

## Number

```js
import {
  isValidNumericInput,
  evaluateNumericExpression
} from '@create-figma-plugin/utilities'
```

### const result = isValidNumericInput(value *[, integerOnly]*)

Checks if `value` is a numeric expression, as input by a user. “Partial” inputs are considered valid. Set `integerOnly` to `true` to check that the expression contains only integers; `integerOnly` defaults to `false` if not specified.

#### Returns

- `true` if `value` is a valid numeric expression, else `false`

#### Parameters

- `value` (`string`)
- `integerOnly` (`boolean`)

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

Creates a deep copy of the given `object`.

#### Returns

- A deep copy of the given `object`

#### Parameters

- `object` (`any`)

### const result = extractAttributes(array, attributes)

Extracts the specified `attributes` from each object in `array`.

#### Returns

- An `array` of plain objects

#### Parameters

- `array` (an `array` of plain objects)
- `attributes` (an `array` of `string`)

### const result = compareObjects(a, b)

Performs a shallow comparison of objects `a` and `b`.

#### Returns

- `true` if `a` and `b` are the same values, else `false`

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

- A `Promise` for an `object`

#### Parameters

- `defaultSettings` (`object`)

### await saveSettings(settings)

Saves the given `settings`.

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
- `plural` (`string`)

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
- `data` (`object`)

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
