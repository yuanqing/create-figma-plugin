# Quick start

*Requires [Node.js](https://nodejs.org/).*

## Create a basic plugin with a single command

To begin, do:

```
$ npx create-figma-plugin figma-hello-world
$ cd figma-hello-world
$ ls
command.js   node_modules   package.json
```

`command.js` contains the plugin command implementation:

```js
// command.js

export default function () {
  figma.notify('Hello, World!') //=> 'Hello, World!'
  figma.closePlugin()
}
```

In `package.json`, we’re pointing to `command.js` on the **`"command"`** key under **`"create-figma-plugin"`**:

```diff
{
  ...
  "create-figma-plugin": {
    ...
+   "command": "command.js"
  }
}
```

Then, build the plugin:

```
$ npm run build
```

This will generate a `manifest.json` file for your plugin, and a `build/` directory containing your JavaScript bundle.

## Add a user interface

Every command defined in `package.json` can have a corresponding UI implementation.

Update `command.js` to include a call to `showUI`:

```js
// command.js

import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  showUI({ width: 240, height: 320 }, 'Hello, World!')
}
```

`showUI` takes a `width`, `height` and `data`. The third `data` parameter is useful for passing some initialising data from your command to its UI.

Next, create a `ui.js`:

```js
// ui.js

export default function (rootNode, data) {
  rootNode.innerHTML = `<h1>${data}</h1>` //=> <h1>Hello, World</h1>
}
```

The exported function receives two parameters:

- `rootNode` — An empty `<div>` element within which you can render your UI.
- `data` — This corresponds to the third parameter passed to `showUI`.

Then, in `package.json`, point to `ui.js` on the **`"ui"`** key:

```diff
{
  ...
  "create-figma-plugin": {
    ...
    "command": "command.js"
+   "ui": "ui.js"
  }
}
```

Rebuild the plugin:

```
$ npm run build
```
