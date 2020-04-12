# Create Figma Plugin [![npm Version](https://img.shields.io/npm/v/create-figma-plugin?cacheSeconds=1800)](https://www.npmjs.com/package/create-figma-plugin) [![build](https://github.com/yuanqing/create-figma-plugin/workflows/build/badge.svg)](https://github.com/yuanqing/create-figma-plugin/actions?query=workflow%3Abuild)

> A comprehensive toolkit for developing [Figma plugins](https://www.figma.com/plugin-docs/)

## Features

- [Scaffold your plugin](#quick-start) using a template
- Supports [multiple menu commands](docs/configuration.md#readme) and for each command to have its own UI implementation
- [Utility functions](docs/api.md#readme) for common plugin operations
- A [comprehensive set of Preact components](https://yuanqing.github.io/create-figma-plugin/) that replicate the Figma UI design

## Quick start

*Requires [Node.js](https://nodejs.org/).*

### Creating a basic plugin with a single command

To begin, do:

```
$ npx create-figma-plugin figma-hello-world
$ cd figma-hello-world
$ ls
.gitignore   command.js   node_modules   package.json
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

### Adding a user interface

Every command defined in `package.json` can have a corresponding UI implementation.

Update `command.js` to include a call to `showUI`:

```js
// command.js

import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  showUI({ width: 240, height: 320 }, { foo: 'bar' })
}
```

`showUI` takes two parameters, and the second `data` parameter is useful for passing some initialising data from your command to its UI.

Next, create a `ui.js`:

```js
// ui.js

export default function (rootNode, data) {
  rootNode.innerHTML = `<h1>${data.foo}</h1>` //=> <h1>bar</h1>
}
```

The exported function receives two parameters:

- `rootNode` — An empty `<div>` element within which you can render your UI.
- `data` — This corresponds to the second parameter passed to `showUI` in your `command.js`.

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

## Docs

- [**Configuration**](docs/configuration.md#readme)
- [**API**](docs/api.md#readme)
- [**Component Library**](https://yuanqing.github.io/create-figma-plugin/)

## License

[MIT](LICENSE.md)
