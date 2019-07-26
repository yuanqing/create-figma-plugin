# create-figma-plugin [![npm Version](https://img.shields.io/npm/v/create-figma-plugin.svg)](https://www.npmjs.org/package/create-figma-plugin) [![Build Status](https://img.shields.io/travis/yuanqing/create-figma-plugin.svg)](https://travis-ci.org/yuanqing/create-figma-plugin)

> A toolkit for developing [Figma](https://figma.com) plugins

- Write your plugin in modern JavaScript or TypeScript
- Bundle your plugin command implementation and UI code, with support for multiple commands
- Automatically generate your plugin’s `manifest.json` file
- Scaffold your plugin using a template
- Supports customizing the underlying Webpack configuration

---

## Quick start

*Requires [Node.js](https://nodejs.org/).*

To begin:

```
$ npx create-figma-plugin figma-hello-world
```

Enter the information prompted for.

See that we have a new folder named `figma-hello-world`. Then:

```
$ cd figma-hello-world
$ npm install
```

In `package.json`, see that `index.js` is specified as a command:

```diff
{
  ...
  "create-figma-plugin": {
    ...
+   "command": "index.js"
  }
}
```

In `index.js`, see that the function is the `default` export of the the file:

```js
export default function () {
  console.log('Hello, World!')
}
```

Now, build the plugin:

```
$ npm run build
```

To rebuild the plugin whenever you make a change, do:

```
$ npm run watch
```

---

## Configuration

### `package.json`

Configuration options for the plugin are specified on the **`"create-figma-plugin"`** key of your `package.json` file.

- **`"name"`** — Display name of the plugin.
- **`"command"`** — Path to the plugin command implementation.
- **`"ui"`** *(optional)* — Path to the plugin command’s UI implementation.
- **`"menu"`** *(optional)* — An array that specifies the commands shown in plugin’s sub-menu. Each object in the array has these keys:

    - **`"name"`** — The display name of the plugin command.
    - **`"command"`** — Ditto the `"command"` key above.
    - **`"ui"`** *(optional)* — Ditto the `"ui"` key above.

    Use a **`"-"`** in the array to specify a separator between commands in the plugin’s sub-menu.

For brevity, the initial `src/` of any paths specified in the configuration can be omitted. `create-figma-plugin` will attempt to resolve file paths in the `src` directory.

#### Example

Single command:

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

Multiple commands:

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

The exported function receives the `config` object created by `create-figma-plugin`. The function must return the new configuration object to be used.

---

## API

### Command

A plugin command is specified as a function with the signature:

```js
export default function (figma, {showUI, postMessage, onMessage}) {
  // ...
}
```

- **`figma`** (`object`) — The global `figma` object.
- **`showUI`** (`function (options)`) — Show the UI for the command. Takes an optional `options` object that is passed directly to `figma.showUI`.
- **`postMessage`** (`function (message)`) — Send a `message` to the UI `iframe`.
- **`onMessage`** (`function (handler)`) — Set up a `handler` for receiving messages from the UI `iframe`.

### UI

A plugin command’s UI (rendered in an `iframe` by Figma) is specified as a function with the signature:

```js
export default function (rootNode, {postMessage, onMessage}) {
  // ...
}
```

- **`rootNode`** ([`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)) — An empty `div` element within which you can render your UI.
- **`postMessage`** (`function (message)`) — Send a `message` to the plugin command.
- **`onMessage`** (`function (handler)`) — Set up a `handler` for receiving messages from the plugin command.

### Example

```js
// index.js

export default function (figma, {showUI, postMessage, onMessage}) {
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

```js
// ui.js

import {render} from 'react-dom'

export default function (rootNode, {postMessage, onMessage}) {
  const ui = // ...
  rootNode.appendChild(ui)
  // ...
  postMessage('bar')
  onMessage(function (message) {
    console.log(message) //=> 'foo'
  })
}
```

---

## CLI

```

  Usage
    $ create-figma-plugin <command> [options]

  Available Commands
    build    Build the plugin
    init     Scaffold a new plugin
    watch    Watch and rebuild the plugin on changes

  For more info, run any command with the `--help` flag
    $ create-figma-plugin build --help
    $ create-figma-plugin init --help

  Options
    -v, --version    Displays current version
    -h, --help       Displays this message

```

---

## License

[MIT](LICENSE.md)
