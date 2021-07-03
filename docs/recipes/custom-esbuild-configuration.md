## Customizing the underlying esbuild configuration

The `build-figma-plugin` CLI is powered by the [esbuild compiler](https://esbuild.github.io). To customize the underlying build configuration for the [`main`](#main-context) bundle, create a `build-figma-plugin.main.js` file:

```js
module.exports = function (buildOptions) {
  // ...
  return {
    ...buildOptions,
    // ...
  }
}
```

`buildOptions` is the original [esbuild configuration object](https://esbuild.github.io/api/#build-api) used internally by the `build-figma-plugin` CLI. The exported function must return the new configuration object to be used.

Correspondingly, use a `build-figma-plugin.ui.js` file to customize the build configuration for the [`ui`](#ui-context) bundle.
