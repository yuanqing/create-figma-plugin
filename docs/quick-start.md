# Quick start

## Pre-requisites

- [Node.js](https://nodejs.org) – v14
- [Figma desktop app](https://figma.com/downloads/)

## Initializing a new plugin from a template

First:

```
$ npx --yes -- create-figma-plugin my-plugin
```

(Here, the [`default`](https://github.com/yuanqing/create-figma-plugin/tree/main/packages/create-figma-plugin/plugin-templates/default) template is used. Learn how to [use a different plugin template](#using-a-different-plugin-template).)

Then:

```
$ cd my-plugin
$ ls -a
.gitignore  .vscode  README.md  node_modules  package-lock.json  package.json  tsconfig.json  src
$ ls src
main.ts
```

`src/main.ts` is the [main entry point](#main-context) for our plugin:

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
      "name": "My Plugin",
+     "main": "src/main.ts"
    }
  }
```

See the other [configuration options](#configuration-options), or learn how to [add a UI to a plugin command](#ui-1).

## Building the plugin

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

## Installing the plugin

In the Figma desktop app:

1. Open a Figma or FigJam document.
2. Go to `Plugins` → `Development` → `Import plugin from manifest…`.
3. Select the `manifest.json` file that was generated.

## Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console in the Figma desktop app, go to `Plugins` → `Development` → `Open Console`.

## Publishing to Figma Community

Learn how to [publish your plugin to Figma Community](https://help.figma.com/hc/en-us/articles/360042293394-Publish-plugins-to-the-Figma-Community).

Figma will generate a unique plugin ID for you when you first try to publish your plugin. Copy and paste that ID into your plugin’s **`"figma-plugin"`** configuration (under the [**`"id"`**](#id) key), then rebuild the plugin to regenerate its `manifest.json` file.

## Using a different plugin template

To initialize your plugin with a different plugin template, use the `--template` flag. For example:

```
$ npx --yes -- create-figma-plugin my-plugin --template preact-rectangles
```

Besides the [`default`](https://github.com/yuanqing/create-figma-plugin/tree/main/packages/create-figma-plugin/plugin-templates/default) template, three other templates are available:

- [`preact-rectangles`](https://github.com/yuanqing/create-figma-plugin/tree/main/packages/create-figma-plugin/plugin-templates/preact-rectangles) — A plugin with a UI built using the [`@create-figma-plugin/ui`](#using-the-preact-component-library) Preact component library.
- [`preact-resizable`](https://github.com/yuanqing/create-figma-plugin/tree/main/packages/create-figma-plugin/plugin-templates/preact-resizable) — A plugin with a [resizable UI window](#making-the-plugin-window-resizable).
- [`react-editor`](https://github.com/yuanqing/create-figma-plugin/tree/main/packages/create-figma-plugin/plugin-templates/react-editor) — A plugin with a UI that [uses a React component](#using-react).

## See also

- [Figma/FigJam plugin API docs](https://figma.com/plugin-docs/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples#readme)
- [`yuanqing/awesome-create-figma-plugin`](https://github.com/yuanqing/awesome-create-figma-plugin#readme)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins#readme)
