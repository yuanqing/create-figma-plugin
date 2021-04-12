# {{name}}

{{#description}}
> {{description}}

{{/description}}
## Development guide

*This plugin is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).*

### Pre-requisites

- [Node.js](https://nodejs.org)
- [Figma desktop app](https://figma.com/downloads/)

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

The `build-figma-plugin` CLI is powered by [esbuild](https://esbuild.github.io), which enables extremely fast builds.

When run without the `--typecheck` flag, `build-figma-plugin` will *not* perform type checking of your TypeScript code. Instead, use a code editor such as [Visual Studio Code](https://code.visualstudio.com) to type check your code during development.

## Installing the plugin

In the Figma desktop app:

1. Open a Figma document.
2. Go to `Plugins` → `Development` → `New Plugin…`.
3. Click the `Click to choose a manifest.json file` box, and select the `manifest.json` file that was generated.

## Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console in the Figma desktop app, go to `Plugins` → `Development` → `Open Console`.

### Docs

- [Create Figma Plugin docs](https://yuanqing.github.io/create-figma-plugin/)
- [Figma plugin API docs](https://figma.com/plugin-docs/api/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples)
