# Create Figma Plugin [![npm Version](https://img.shields.io/npm/v/create-figma-plugin.svg)](https://www.npmjs.org/package/create-figma-plugin) [![Build Status](https://img.shields.io/travis/create-figma-plugin/create-figma-plugin.svg)](https://travis-ci.org/create-figma-plugin/create-figma-plugin)

> A toolkit for developing [Figma](https://figma.com) plugins

## Features

- Write your plugin in modern JavaScript or TypeScript
- Bundle your plugin command implementation and UI code, with support for multiple commands
- Automatically generate your plugin’s `manifest.json` file
- Scaffold your plugin using a template
- Supports customizing the underlying Webpack configuration

## Quick start

```
$ npx create-figma-plugin figma-hello-world
$ cd figma-hello-world
$ ls
index.js   node_modules   package.json
```

`index.js` contains the plugin implementation, which is a function set to be the `default` export of the file:

```js
export default function (figma) {
  console.log('Hello, World!')
  figma.closePlugin()
}
```

In `package.json`, `index.js` is specified as a command:

```diff
{
  ...
  "create-figma-plugin": {
    ...
+   "command": "index.js"
  }
}
```

To build the plugin:

```
$ npm run build
```

This will generate a `manifest.json` file and a `build/` directory containing the plugin bundle.

To rebuild the plugin whenever you make a change:

```
$ npm run watch
```

## Configuration

### `package.json`

Basic configuration options for the plugin are specified on the **`"create-figma-plugin"`** key of your `package.json` file.

- **`"name"`** — Display name of the plugin.
- **`"command"`** — Path to the plugin command implementation.
- **`"ui"`** *(optional)* — Path to the plugin command’s UI implementation.
- **`"menu"`** *(optional)* — An array that specifies the commands shown in the plugin’s sub-menu. Each object in the array has these keys:

    - **`"name"`** — The display name of the plugin command.
    - **`"command"`** — Ditto the `"command"` key above.
    - **`"ui"`** *(optional)* — Ditto the `"ui"` key above.

    Use a **`"-"`** in the array to specify a separator between commands in the plugin’s sub-menu.

For brevity, the initial `src/` of paths specified in the configuration can be omitted. Create Figma Plugin will attempt to resolve the paths in the `src/` directory.

#### Example

A basic plugin with a single command:

```diff
{
  ...
  "create-figma-plugin": {
    "name": "Hello, World!",
+   "command": "index.js",
+   "ui": "ui.js"
  }
}
```

A plugin with multiple commands in the plugin sub-menu:

```diff
{
  ...
  "create-figma-plugin": {
    "name": "Hello, World",
+   "menu": [
+     {
+       "name": "Hello, World",
+       "command": "hello-world/index.js",
+       "ui": "hello-world/ui.js"
+     },
+     "-",
+     {
+       "name": "Settings",
+       "command": "settings/command.js",
+       "ui": "settings/ui.js"
+     }
+   ]
  }
}
```

### `create-figma-plugin.config.js`

To customize the underlying [Webpack configuration](https://webpack.js.org/configuration/), create a `create-figma-plugin.config.js` file:

```js
export default function (config) {
  // ...
  return {
    // ...
  }
}
```

The exported function receives the existing `config` object, and must return the new configuration object to be used.

## API

### Command

A plugin command is specified as a function with the signature:

```js
function (figma, { showUI, postMessage, onMessage })
```

- **`figma`** (`object`) — The global `figma` object.
- **`showUI`** (`function (options)`) — Show the UI for the command. Takes an optional `options` object that is passed directly to `figma.showUI`.
- **`postMessage`** (`function (message)`) — Send a `message` to the UI `iframe`.
- **`onMessage`** (`function (handler)`) — Set up a `handler` for receiving messages from the UI `iframe`.

#### Example

```js
// index.js

export default function (figma, { showUI, postMessage, onMessage }) {
  showUI({ width: 400, height: 200 })
  // ...
  postMessage('foo')
  onMessage(function (message) {
    console.log(message) //=> 'bar'
  })
  // ...
  figma.closePlugin()
}
```

### UI

A plugin command’s UI (rendered in an `iframe` by Figma) is specified as a function with the signature:

```js
function (rootNode, { postMessage, onMessage })
```

- **`rootNode`** ([`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)) — An empty `div` element within which you can render your UI.
- **`postMessage`** (`function (message)`) — Send a `message` to the plugin command.
- **`onMessage`** (`function (handler)`) — Set up a `handler` for receiving messages from the plugin command.

#### Example

```js
// ui.js

export default function (rootNode, { postMessage, onMessage }) {
  const ui = // ...
  rootNode.appendChild(ui)
  // ...
  postMessage('bar')
  onMessage(function (message) {
    console.log(message) //=> 'foo'
  })
}
```

## License

[MIT](LICENSE.md)
