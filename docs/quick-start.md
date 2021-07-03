# Quick start

## Pre-requisites

- [Node.js](https://nodejs.org) – v14
- [Figma desktop app](https://figma.com/downloads/)

## Initialize a new plugin from a template

First:

```
$ npx --yes -- create-figma-plugin figma-hello-world --yes
```

(Here, the [`default`](https://github.com/yuanqing/create-figma-plugin/tree/main/packages/create-figma-plugin/plugin-templates/default) template will be used. Omit the second `--yes` flag to customize the plugin display name or to use a different plugin template.)

Then:

```
$ cd figma-hello-world
$ ls -a
.gitignore  .vscode  README.md  node_modules  package-lock.json  package.json  tsconfig.json  src
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

In `package.json`, we’re pointing to `src/main.ts` on the [**`"main"`**](#main) key under **`"figma-plugin"`**:

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

See the other [configuration options](#configuration-options), or learn how to [add a UI to a plugin command](#ui-1).

## Build the plugin

In `package.json`, we also have `build` and `watch` scripts set up to invoke the `build-figma-plugin` CLI:

```diff
  {
    ...
    "scripts": {
+     "build": "build-figma-plugin --typecheck --minify",
+     "watch": "build-figma-plugin --typecheck --watch"
    },
    ...
  }
```

The `build-figma-plugin` CLI is powered by [esbuild](https://esbuild.github.io), which enables extremely fast, sub-second builds. When the `--typecheck` flag is specified, your TypeScript code will also be compiled and type-checked by the [TypeScript compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

To build the plugin:

```
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/plugin-docs/manifest/) file and a `build/` directory containing a JavaScript bundle for the plugin.

To watch for code changes and rebuild the plugin automatically:

```
$ npm run watch
```

## Install the plugin

In the Figma desktop app:

1. Open a Figma document.
2. Go to `Plugins` → `Development` → `New Plugin…`.
3. Click the `Click to choose a manifest.json file` box, and select the `manifest.json` file that was generated.

## Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console in the Figma desktop app, go to `Plugins` → `Development` → `Open Console`.

## Publishing to Figma Community

Learn how to [publish your plugin to Figma Community](https://help.figma.com/hc/en-us/articles/360042293394-Publish-plugins-to-the-Figma-Community).

Figma will generate a unique plugin ID for you when you first try to publish your plugin. Copy and paste that ID into your plugin’s **`"figma-plugin"`** configuration (under the [**`"id"`**](#id) key), then rebuild the plugin to regenerate its `manifest.json` file.

## See also

- [Figma plugin API docs](https://figma.com/plugin-docs/api/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins)
