# Create Figma Plugin [![npm Version](https://img.shields.io/npm/v/create-figma-plugin?cacheSeconds=1800)](https://www.npmjs.com/package/create-figma-plugin) [![build](https://github.com/yuanqing/create-figma-plugin/workflows/build/badge.svg)](https://github.com/yuanqing/create-figma-plugin/actions?query=workflow%3Abuild)

> A comprehensive toolkit for developing [Figma plugins](https://figma.com/plugin-docs/)

## Features

- [Initialize a new Figma plugin](#initialize-a-new-plugin) using a template
- [Build your plugin](#build-the-plugin), with support for [multiple menu commands](/docs/recipes/multiple-commands.md#readme) that each have their own [UI implementation](/docs/recipes/ui.md#readme)
- [Utility functions](/docs/utility-functions.md#readme) for common plugin operations
- [A library of Preact components](https://yuanqing.github.io/create-figma-plugin/) that replicate the Figma UI design

## Quick start

To start, read the [Figma plugin basics doc](/docs/basics.md#readme) to understand [how a Figma plugin actually works](/docs/basics.md#how-a-figma-plugin-works), and to learn about [what’s currently possible (and not possible) in a Figma plugin](/docs/basics.md#what-a-figma-plugin-can-and-cannot-do).

### Pre-requisites

- [Node.js](https://nodejs.org/)
- [Figma desktop app](https://figma.com/downloads/)

### Initialize a new plugin

First:

```
$ npx create-figma-plugin figma-hello-world --yes
```

Then:

```
$ cd figma-hello-world
$ ls
.gitignore   README.md   node_modules   package-lock.json   package.json   src
$ ls src
main.js
```

`src/main.js` is the main entry point for our plugin:

```js
// src/main.js

export default function () {
  figma.closePlugin('Hello, World!')
}
```

See that in `package.json`, we’re pointing to `src/main.js` on the [**`"main"`**](/docs/configuration.md#main) key under **`"figma-plugin"`**:

```diff
  {
    ...
    "figma-plugin": {
      ...
      "name": "Hello World",
+     "main": "src/main.js"
    }
  }
```

### Build the plugin

In `package.json`, we also have `build` and `watch` scripts set up to invoke the `build-figma-plugin` CLI:

```diff
  {
    ...
    "scripts": {
+     "build": "build-figma-plugin",
+     "watch": "build-figma-plugin --watch"
    },
    ...
  }
```

To build the plugin:

```
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/plugin-docs/manifest/) file and a `build/` directory containing a JavaScript bundle for the plugin.

To watch for code changes and rebuild the plugin automatically:

```
$ npm run watch
```

### Installing the plugin

In the Figma desktop app:

- Open a Figma document.
- Go to `Plugins` → `Development` → `New Plugin…`.
- Click the `Click to choose a manifest.json file` box, and select the `manifest.json` file that was generated.

### Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console in the Figma desktop app, go to `Plugins` → `Development` → `Open Console`.

## Docs

- [Figma plugin basics](/docs/basics.md#readme)
- [Configuration](/docs/configuration.md#readme)
- [Utility functions](/docs/utility-functions.md#readme)
- [Preact component library (Storybook)](https://yuanqing.github.io/create-figma-plugin/)

### Recipes

- [Specifying multiple commands in the plugin sub-menu](/docs/recipes/multiple-commands.md#readme)
- [Adding a UI to a plugin command](/docs/recipes/ui.md#readme)
- [Passing data between the plugin command’s main and UI contexts](/docs/recipes/data-passing.md#readme)
- [Configuring relaunch buttons](/docs/recipes/relaunch-buttons.md#readme)
- [Customizing the underlying Webpack configuration](/docs/recipes/custom-webpack-configuration.md#readme)

## See also

- [Figma plugin API docs](https://figma.com/plugin-docs/api/)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins)

## License

[MIT](/LICENSE.md)
