# Create Figma Plugin [![npm Version](https://img.shields.io/npm/v/create-figma-plugin?cacheSeconds=1800)](https://www.npmjs.com/package/create-figma-plugin) [![build](https://github.com/yuanqing/create-figma-plugin/workflows/build/badge.svg)](https://github.com/yuanqing/create-figma-plugin/actions?query=workflow%3Abuild)

> A comprehensive toolkit for developing [Figma plugins](https://figma.com/plugin-docs/)

## Features

- Initialize a new Figma plugin using a template.
- Bundle your plugin, with support for multiple menu commands that each have its own UI implementation.
- Utility functions for common plugin operations.
- A set of Preact components that replicate the Figma UI design.

## Development guide

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

`src/main.js` is the entry point for the plugin:

```js
// src/main.js

export default function () {
  figma.closePlugin('Hello, World!')
}
```

See that in `package.json`, we’re pointing to `src/main.js` on the **`"main"`** key under **`"figma-plugin"`**:

```diff
  {
    ...
    "figma-plugin": {
      ...
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

- [Configuration](docs/configuration.md#readme)
- [Figma plugins API](https://figma.com/plugin-docs/api/)
- [Utility functions API](docs/utility-functions.md#readme)
- [Preact component library](https://yuanqing.github.io/create-figma-plugin/)

### Recipes

- [Specifying multiple commands in the plugin menu](docs/recipes/multiple-commands.md)
- [Creating a UI for a plugin command](docs/recipes/ui.md)
- [Passing data between the Figma document and the UI](docs/recipes/data-passing.md)
- [Setting relaunch buttons](docs/recipes/relaunch-buttons.md)

## License

[MIT](LICENSE.md)
