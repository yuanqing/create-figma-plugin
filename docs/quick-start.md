# Quick start

## Pre-requisites

- [Node.js](https://nodejs.org/)
- [Figma desktop app](https://figma.com/downloads/)

## Initialize a new plugin

First:

```
$ npx create-figma-plugin figma-hello-world --yes
```

Then:

```
$ cd figma-hello-world
$ ls -a
.gitignore  README.md  node_modules  package-lock.json  package.json  tsconfig.json  src
$ ls src
main.ts
```

`src/main.ts` is the main entry point for our plugin:

```ts
// src/main.ts

export default function () {
  figma.closePlugin('Hello, World!')
}
```

See that in `package.json`, we’re pointing to `src/main.ts` on the [**`"main"`**](#main) key under **`"figma-plugin"`**:

```diff
  {
    ...
    "figma-plugin": {
      ...
      "name": "Hello World",
+     "main": "src/main.ts"
    }
  }
```

(This example only scratches the surface of what this toolkit provides. See the [recipes section](#recipes) below, or jump to the ones for [adding a UI to a plugin command](#adding-a-ui-to-a-plugin-command), or [specifying multiple commands in the plugin sub-menu](#specifying-multiple-commands-in-the-plugin-sub-menu).)

## Build the plugin

In `package.json`, we also have `build` and `watch` scripts set up to invoke the `build-figma-plugin` CLI:

```diff
  {
    ...
    "scripts": {
+     "build": "build-figma-plugin --minify --typecheck",
+     "watch": "build-figma-plugin --watch"
    },
    ...
  }
```

To build the plugin:

```
$ npm run build
```

This will generate a `build/` directory containing a [`manifest.json`](https://figma.com/plugin-docs/manifest/) file and a JavaScript bundle for the plugin.

To watch for code changes and rebuild the plugin automatically:

```
$ npm run watch
```

## Type checking

The `build-figma-plugin` CLI is powered by [esbuild](https://esbuild.github.io/), which enables extremely fast builds.

When run without the `--typecheck` flag, `build-figma-plugin` will *not* perform type checking of your TypeScript code. Instead, use a code editor such as [Visual Studio Code](https://code.visualstudio.com/) to type check your code during development.

## Installing the plugin

In the Figma desktop app:

1. Open a Figma document.
2. Go to `Plugins` → `Development` → `New Plugin…`.
3. Click the `Click to choose a manifest.json file` box, and select the `manifest.json` file that was generated.

## Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console in the Figma desktop app, go to `Plugins` → `Development` → `Open Console`.

## See also

- [Figma plugin API docs](https://figma.com/plugin-docs/api/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins)
