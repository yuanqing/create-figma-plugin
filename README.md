# create-figma-plugin [![npm Version](https://img.shields.io/npm/v/create-figma-plugin.svg)](https://www.npmjs.org/package/create-figma-plugin) [![Build Status](https://img.shields.io/travis/yuanqing/create-figma-plugin.svg)](https://travis-ci.org/yuanqing/create-figma-plugin)

> A toolkit to create [Figma](https://figma.com) plugins

- Write your plugin in modern JavaScript
- A CLI to bundle your plugin implementation and UI code, with support for multiple commands
- Automatically generate your plugin’s `manifest.json` file

---

## Quick start

*Requires [Node.js](https://nodejs.org/).*

To begin:

```
$ npx create-figma-plugin figma-hello-world
```

Enter the information prompted for. Then:

```
$ cd figma-hello-world
$ npm install
```

Next, create a `src/hello-world.js` file containing the following:

```js
export default function () {
  console.log('Hello, World!')
}
```

Our plugin command must be the `default` export of the file.

Then, in our `package.json`, set `src/hello-world.js` as a command in the plugin menu:

```diff
{
  ...
  "create-figma-plugin": {
    ...
-   "menu": []
+   "menu": [
+     {
+       "name": "Hello, World!"
+       "command": "hello-world",
+     }
+   ]
  }
}
```

We omit the initial `src/` and trailing `.js`, so `src/hello-world.js` is simply specified as `hello-world`.

Then, to build the plugin, do:

```
$ npm run build
```

To rebuild the plugin whenever we make a change, do:

```
$ npm run watch
```

---

## Configuration

All configuration options for the plugin are specified on the **`"create-figma-plugin"`** key of our `package.json` file.

### `"name"`

The display name of the plugin.

#### *Example*

```diff
{
  ...
  "create-figma-plugin": {
+   "name": "Hello, World!"
    ...
  }
}
```

### `"menu"`

An array that specifies the commands that appear in the plugin’s sub-menu.

Each object in the array has these keys:

- **`"name"`** is the display name of the command.
- **`"command"`** is the path to a JavaScript file in the `src` directory. Omit the initial `src/` and trailing `.js` from the path.
- **`"ui"`** *(optional)* is the path to a JavaScript file in the `src` directory. Omit the initial `src/` and trailing `.js` from the path.

#### *Example*

```diff
{
  ...
  "create-figma-plugin": {
    ...
+   "menu": [
+     {
+       "name": "Hello, World!",
+       "command": "hello-world",
+       "ui": "hello-world-ui"
+     }
+   ],
    ...
  }
}
```

---

## API

### Command

A plugin command is specified as a function with the following signature:

```js
export default function (figma, {showUI, postMessage, onMessage}) {
  // ...
}
```

- `figma` (`object`) – The global `figma` object.
- `showUI` (`function (options)`) – Show the UI that corresponds to the command. Note that the `options` object is passed directly to `figma.showUI`.
- `postMessage` (`function (message)`) – Send a `message` to the UI `iframe`.
- `onMessage` (`function (handler)`) – Set up a `handler` for receiving messages from the UI `iframe`.

### UI

A plugin command’s UI is specified as a function with the following signature:

```js
export default function ({postMessage, onMessage}) {
  // ...
}
```

- `postMessage` (`function (message)`) – Send a `message` to the plugin command.
- `onMessage` (`function (handler)`) – Set up a `handler` for receiving messages from the plugin command.

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
