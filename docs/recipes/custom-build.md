## Customizing the build

### Customizing the underlying esbuild configuration

The `build-figma-plugin` CLI is powered by the [esbuild compiler](https://esbuild.github.io). To customize the underlying build configuration for the [main bundle](#main-context), create a `build-figma-plugin.main.js` file:

```js
// build-figma-plugin.main.js

module.exports = function (buildOptions) {
  // ...
  return {
    ...buildOptions,
    // ...
  }
}
```

`buildOptions` is the original [esbuild configuration object](https://esbuild.github.io/api/#build-api) used internally by the `build-figma-plugin` CLI. The exported function must return the new configuration object to be used.

Correspondingly, use a `build-figma-plugin.ui.js` file to customize the build configuration for the [UI bundle](#ui-context).

### Customizing the `manifest.json`

To modify the `manifest.json` just before it gets output by the `build-figma-plugin` CLI, create a `build-figma-plugin.manifest.js` file as follows:

```js
// build-figma-plugin.manifest.js

module.exports = function (manifest) {
  // ...
  return {
    ...manifest,
    // ...
  }
}
```

The exported function receives the original `manifest.json` that’s created by the `build-figma-plugin` CLI, and must return the new `manifest.json` plain object to be output.
