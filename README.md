# create-figma-plugin [![npm Version](https://img.shields.io/npm/v/create-figma-plugin.svg)](https://www.npmjs.org/package/create-figma-plugin) [![Build Status](https://img.shields.io/travis/yuanqing/create-figma-plugin.svg)](https://travis-ci.org/yuanqing/create-figma-plugin)

> A toolkit to create [Figma](https://figma.com) plugins

- Write modern JavaScript
- Bundle your plugin command implementation and UI code, with support for multiple commands
- Automatically generate your plugin’s `manifest.json` file
- Supports customizing the underlying Webpack configuration

---

## Quick start

*Requires [Node.js](https://nodejs.org/).*

To begin:

```sh
$ npx create-figma-plugin figma-hello-world
```

Enter the information prompted for. Then:

```sh
$ cd figma-hello-world
$ npm install
```

Next, create a `src/hello-world/command.js` file:

```js
export default function () {
  console.log('Hello, World!')
}
```

The plugin command must be the `default` export of the file.

Then, in `package.json`, specify `src/hello-world/command.js` as a command in the plugin menu:

```diff
{
  ...
  "create-figma-plugin": {
    ...
-   "menu": []
+   "menu": [
+     {
+       "name": "Hello, World!",
+       "command": "hello-world/command"
+     }
+   ]
  }
}
```

Omit the initial `src/` and trailing `.js`, so `src/hello-world/command.js` becomes `hello-world/command`.

Then, build the plugin:

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

- **`"name"`** — The display name of the plugin.
- **`"menu"`** — An array that specifies the commands that appear in the plugin’s sub-menu. Each object in the array has these keys:

    - **`"name"`** — The display name of the plugin command.
    - **`"command"`** — The path to the plugin command implementation in the `src/` directory. Omit the initial `src/` and trailing `.js`.
    - **`"ui"`** *(optional)* — The path to the plugin command’s UI implementation in the `src/` directory. Omit the initial `src/` and trailing `.js`.

#### Example

```
{
  ...
  "create-figma-plugin": {
    "name": "Hello, World!",
    "menu": [
      {
        "name": "Hello, World!",
        "command": "hello-world/command",
        "ui": "hello-world/ui"
      }
    ]
  }
}
```

### `create-figma-plugin.js`

To customize the underlying [Webpack configuration](https://webpack.js.org/configuration/), create a `create-figma-plugin.js` file:

```js
export default function (config) {
  // ...
}
```

Mutate the `config` object as you see fit within the function.

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
// src/hello-world/command.js

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
// src/hello-world/ui.js

import {render} from 'react-dom'

export default function (rootNode, {postMessage, onMessage}) {
  // ...
  render(rootNode, <h1>Hello, World</h1>)
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
    init     Scaffolds a new plugin
    watch    Watch and rebuild on changes

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
