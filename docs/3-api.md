# API

- [**Events**](#events)
  - [addEventListener(eventName, eventListener)](#const-removeeventlistener--addeventlistenereventname-eventlistener)
  - [triggerEvent(eventName *[, ...arguments]*)](#triggereventeventname--arguments)
  - [*Example*](#example)
- [**Layers**](#layers)
  - [getSelectedLayersOrAllLayers()](#const-layers--getselectedlayersoralllayers)
  - [groupSiblingLayers(layers)](#const-groups--groupsiblinglayerslayers)
  - [getAbsolutePosition(layer)](#const-absoluteposition--getabsolutepositionlayer)
  - [setAbsolutePosition(layer, absolutePosition)](#setabsolutepositionlayer-absoluteposition)
  - [traverseLayer(layer, callback *[, filter]*)](#traverselayerlayer-callback--filter)
- [**Settings**](#settings)
  - [loadSettings()](#const-settings--await-loadsettings)
  - [saveSettings(settings)](#await-savesettingssettings)
- [**String**](#string)
  - [formatErrorMessage(message)](#const-errormessage--formaterrormessagemessage)
  - [formatSuccessMessage(message)](#const-successmessage--formatsuccessmessagemessage)
  - [mapNumberToWord(number)](#const-word--mapnumbertowordnumber)
  - [pluralize(number, singular *[, plural]*)](#const-word--pluralizenumber-singular--plural)
- [**UI**](#ui)
  - [showUI(width, height *[, data]*)](#showuiwidth-height--data)
  - [*Example*](#example-1)

---

## Events

```js
import {
  addEventListener,
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
  getSelectedLayersOrAllLayers,
  groupSiblingLayers,
  getAbsolutePosition
  setAbsolutePosition,
  traverseLayer
} from '@create-figma-plugin/utilities'
```

### const layers = getSelectedLayersOrAllLayers()

Gets the selected layers, or all the top-level layers on the current page if no layers are selected.

#### Returns

- An `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

### const groups = groupSiblingLayers(layers)

Splits the given `layers` into smaller groups of sibling layers.

#### Returns

- An `array` of `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/) objects

#### Parameters

- `layers` (an `array` of [`Node`](https://www.figma.com/plugin-docs/api/nodes/))

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

### traverseLayer(layer, callback *[, filter]*)

Traverses `layer` and its child layers recursively in a *depth-first* manner, passing each layer to the specified `callback`.

Each layer is also passed to a `filter` function. If you return `false` in `filter` for a particular layer, then the `callback` will not be called for that particular layer, and the child layers of that particular layer will not be traversed.

#### Returns

- `undefined`

#### Parameters

- `layer` ([`Node`](https://www.figma.com/plugin-docs/api/nodes/))
- `callback` (`function (layer)`)
- `filter` (`function (layer`) *(optional)*

---

## Settings

```js
import {
  loadSettings,
  saveSettings
} from '@create-figma-plugin/utilities'
```

### const settings = await loadSettings()

Loads your plugin’s `settings` (stored locally on the user’s computer).

#### Returns

- A `Promise` for an `object`

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

Prepends a `✘` to the `message`.

#### Returns

- `string`

#### Parameters

- `message` (`string`)

### const successMessage = formatSuccessMessage(message)

Prepends a `✔` to the `message`.

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

### showUI(width, height *[, data]*)

Renders the UI correponding to the command in an `<iframe>` with the given `width` and `height`. Optionally pass some initialising `data` from the command to the UI.

#### Returns

- `undefined`

#### Parameters

- `width` (`number`)
- `height` (`number`)
- `data` (`object`)

### *Example*

```js
// command.js

import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  // ...
  showUI(240, 320, 'Hello, World!')
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
