# Quick start

## Basic command

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
  console.log('Hello, World!')
  figma.closePlugin()
}
```

In `package.json`, point to `command.js` on the **`"command"`** key:

```diff
{
  ...
  "create-figma-plugin": {
    ...
+   "command": "command.js"
  }
}
```

Build the plugin:

```
$ npm run build
```

This will generate a `manifest.json` file and a `build/` directory containing the plugin bundle.

## Adding a UI

Update `command.js` as follows:

```js
// command.js

import { showUi } from '@create-figma-plugin/utilities'

export default function () {
  showUi(240, 320, 'Hello, World!')
}
```

Create a `ui.js` for the plugin UI implementation:

```js
// ui.js

export default function (rootNode, data) {
  rootNode.innerHTML = `<h1>${data}</h1>` //=> <h1>Hello, World</h1>
}
```

- `rootNode` is an empty `<div>` element in the `<iframe>` within which you can render your plugin UI.
- `data` is the third parameter that was passed to `showUi`.

In `package.json`, point to `ui.js` on the **`"ui"`** key:

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
