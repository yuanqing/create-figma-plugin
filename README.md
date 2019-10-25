# Create Figma Plugin [![npm Version](https://img.shields.io/npm/v/create-figma-plugin.svg)](https://www.npmjs.com/package/create-figma-plugin) [![Build Status](https://img.shields.io/travis/yuanqing/create-figma-plugin.svg)](https://travis-ci.org/yuanqing/create-figma-plugin)

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
export default function () {
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

Specify basic configuration options for your plugin on the **`"create-figma-plugin"`** key of your `package.json` file.

- **`"id"`** *(optional)* — The plugin ID. This field is only required when you want to publish your plugin; specify the unique ID that’s assigned to your plugin by Figma the first time you publish your plugin.
- **`"name"`** — The display name of the plugin.
- **`"command"`** — Path to the plugin command implementation. The command implementation must be a function set to be `default` export of this file.
- **`"ui"`** *(optional)* — Path to the plugin command’s UI implementation. The UI implementation must be a function set to be `default` export of this file.
- **`"menu"`** *(optional)* — An array that specifies the commands shown in the plugin’s sub-menu. Each object in the array has these keys:

    - **`"name"`** — The display name of the plugin command.
    - **`"command"`** — Ditto the `"command"` key above.
    - **`"ui"`** *(optional)* — Ditto the `"ui"` key above.

    Use a **`"-"`** in the array to specify a separator between commands in the plugin’s sub-menu.

The initial `src/` of any path specified in the configuration can be omitted. Create Figma Plugin will attempt to resolve paths in the `src/` directory.

#### Example

A basic plugin with a single command:

```diff
{
  ...
  "create-figma-plugin": {
    "id": "figma-hello-world",
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
    "id": "figma-hello-world",
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
module.exports = function (config) {
  // ...
  return {
    // ...
  }
}
```

The exported function receives the existing `config` object, and must return the new configuration object to be used.

## License

[MIT](LICENSE.md)
