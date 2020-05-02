# Utility functions

<!-- toc -->

- [**Events**](#events)
  * [on(eventName, eventListener)](#const-off--oneventname-eventlistener)
  * [once(eventName, eventListener)](#const-off--onceeventname-eventlistener)
  * [emit(eventName *[, ...arguments]*)](#emiteventname--arguments)
- [**Layers**](#layers)
  * [insertBeforeLayer(layer, referenceLayer)](#insertbeforelayerlayer-referencelayer)
  * [insertAfterLayer(layer, referenceLayer)](#insertafterlayerlayer-referencelayer)
  * [getSelectedLayersOrAllLayers()](#const-layers--getselectedlayersoralllayers)
  * [getDocumentComponents()](#const-components--getdocumentcomponents)
  * [getAbsolutePosition(layer)](#const-x-y--getabsolutepositionlayer)
  * [setAbsolutePosition(layer, absolutePosition)](#setabsolutepositionlayer-absoluteposition)
  * [computeBoundingBox(layer)](#const-x-y-width-height--computeboundingboxlayer)
  * [computeMaximumBounds(layers)](#const-topleft-bottomright--computemaximumboundslayers)
  * [isLayerWithinInstance(layer)](#const-result--islayerwithininstancelayer)
  * [traverseLayer(layer, processLayer *[, stopTraversal]*)](#traverselayerlayer-processlayer--stoptraversal)
  * [sortLayersByName(layers)](#const-sortedlayers--sortlayersbynamelayers)
  * [sortSiblingLayersByLayerListOrder(siblingLayers)](#const-sortedsiblinglayers--sortsiblinglayersbylayerlistordersiblinglayers)
  * [updateLayersSortOrder(layers)](#const-didchange--updatelayerssortorderlayers)
  * [areSiblingLayers(layers)](#const-result--aresiblinglayerslayers)
  * [computeSiblingLayers(layers)](#const-groups--computesiblinglayerslayers)
  * [removeDuplicateLayers(layers)](#const-uniquelayers--removeduplicatelayerslayers)
  * [collapseLayer(layer)](#collapselayerlayer)
  * [createImagePaint(bytes)](#const-imagepaint--createimagepaintbytes)
  * [loadFontsAsync(layers)](#await-loadfontsasynclayers)
  * [setRelaunchButton(layer, relaunchButtonId *[, description]*)](#setrelaunchbuttonlayer-relaunchbuttonid--description)
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

See the [recipe for passing data between the plugin entry point and UI](/docs/recipes/data-passing.md#readme).

### const off = on(eventName, eventListener)

Registers an `eventListener` for the given `eventName`.

#### Returns

- A function for deregistering the `eventListener`

#### Parameters

- `eventName` (*`string`*)
- `eventListener` (*`function (...arguments)`*)

### const off = once(eventName, eventListener)

Registers an `eventListener` that will run at most once for the given `eventName`.

#### Returns

- A function for deregistering the `eventListener`

#### Parameters

- `eventName` (*`string`*)
- `eventListener` (*`function (...arguments)`*)

### emit(eventName *[, ...arguments]*)

- Calling `emit` in your plugin entry point invokes the event listener with the matching `eventName` in your UI.
- Calling `emit` in your UI invokes the event listener with the matching `eventName` in the plugin entry point.

All `arguments` passed after `eventName` are directly applied on the event listener.

#### Returns

- `undefined`

#### Parameters

- `eventName` (*`string`*)

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
  sortSiblingLayersByLayerListOrder,
  updateLayersSortOrder,
  areSiblingLayers,
  computeSiblingLayers,
  removeDuplicateLayers,
  collapseLayer,
  createImagePaint,
  loadFontsAsync,
  setRelaunchButton
} from '@create-figma-plugin/utilities'
```

### insertBeforeLayer(layer, referenceLayer)

Inserts `layer` before the `referenceLayer` in the layer list.

#### Returns

- `undefined`

#### Parameters

- `layer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
- `referenceLayer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### insertAfterLayer(layer, referenceLayer)

Inserts `layer` after the `referenceLayer` in the layer list.

#### Returns

- `undefined`

#### Parameters

- `layer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
- `referenceLayer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const layers = getSelectedLayersOrAllLayers()

Gets the selected layers, or all the top-level layers on the current page if no layers are selected.

#### Returns

- An array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

### const components = getDocumentComponents()

Gets all the components in the current document.

#### Returns

- An array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

### const {x, y} = getAbsolutePosition(layer)

Returns the X and Y position of the given `layer` relative to the page.

#### Returns

- A plain object with `x` and `y` keys

#### Parameters

- `layer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### setAbsolutePosition(layer, absolutePosition)

Sets the `layer` to the given `absolutePosition`.

#### Returns

- `undefined`

#### Parameters

- `layer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
- `absolutePosition` (a plain object with `x` and `y` keys)

### const {x, y, width, height} = computeBoundingBox(layer)

Computes the coordinates and dimensions of the smallest bounding box that contains the given `layer`.

#### Returns

- A plain object with `x`, `y`, `width`, and `height` keys

#### Parameters

- `layer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const [topLeft, bottomRight] = computeMaximumBounds(layers)

Computes the absolute coordinates of the `topLeft` and `bottomRight` corners of the smallest bounding box that contains the given `layers`.

#### Returns

- The `topLeft` and `bottomRight` coordinates as plain objects with `x` and `y` keys

#### Parameters

- `layers` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const result = isLayerWithinInstance(layer)

Checks if the `layer` is within an instance.

#### Returns

- `true` if `layer` is within an instance, else `false`

#### Parameters

- `layer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### traverseLayer(layer, processLayer *[, stopTraversal]*)

Traverses `layer` and its child layers recursively in a *depth-first* manner, passing each layer to the specified `processLayer` callback.

Each layer is also passed to a `stopTraversal` function. If you return `false` in `stopTraversal` for a particular layer, then its child layers will not be traversed.

#### Returns

- `undefined`

#### Parameters

- `layer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
- `processLayer` (*`function (layer)`*)
- `stopTraversal` (*`function (layer)`*) *(optional)*

### const sortedLayers = sortLayersByName(layers)

Sorts `layers` by layer name in alphabetical order.

#### Returns

- A new array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `layers` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const sortedSiblingLayers = sortSiblingLayersByLayerListOrder(siblingLayers)

Sorts `siblingLayers` by their layer list order.

#### Returns

- A new array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `siblingLayers` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const didChange = updateLayersSortOrder(layers)

Updates the layer list sort order to follow the sort order of `layers`.

#### Returns

- `true` if the layer list sort order was changed, else `false`

#### Parameters

- `layers` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const result = areSiblingLayers(layers)

Checks if all layers in `layers` are sibling layers.

#### Returns

- `true` if all layers in `layers` are sibling layers, else `false`

#### Parameters

- `layers` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const groups = computeSiblingLayers(layers)

Splits `layers` into groups of sibling layers.

#### Returns

- An array of array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `layers` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const uniqueLayers = removeDuplicateLayers(layers)

Deduplicates the layers in `layers`.

#### Returns

- An array of unique [*`Node`*](https://figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `layers` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### collapseLayer(layer)

Collapses `layer` and all its child layers in the layer list.

#### Returns

- `undefined`

#### Parameters

- `layer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### const imagePaint = createImagePaint(bytes)

Creates an *`ImagePaint`* object from the `bytes` of an image.

#### Returns

- An [*`ImagePaint`*](https://figma.com/plugin-docs/api/Paint/#imagepaint) object

#### Parameters

- `bytes` ([*`Uint8Array`*](https://figma.com/plugin-docs/api/Image/#getbytesasync))

### await loadFontsAsync(layers)

Loads the fonts used in all the text layers in `layers`.

#### Returns

- A *`Promise`*

#### Parameters

- `layers` (an array of [*`Node`*](https://figma.com/plugin-docs/api/nodes/))

### setRelaunchButton(layer, relaunchButtonId *[, description]*)

Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/) on `layer` for the command with the given `relaunchButtonId` as configured under [**`"relaunchButtons"`**](/docs/configuration.md#relaunchbuttons) in `package.json`. `description` is the text displayed below the relaunch button in the Figma UI.

See the [recipe for configuring relaunch buttons](/docs/recipes/relaunch-buttons.md#readme).

#### Returns

- `undefined`

#### Parameters

- `layer` ([*`Node`*](https://figma.com/plugin-docs/api/nodes/))
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
