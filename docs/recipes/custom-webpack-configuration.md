# Customizing the underlying Webpack configuration

The `build-figma-plugin` CLI is built on top of Webpack. To customize the underlying [Webpack configuration](https://webpack.js.org/configuration/), create a `figma-plugin.config.js` file:

```js
module.exports = function (config) {
  // ...
  return {
    ...config
    // ...
  }
}
```

`config` is the original Webpack configuration object. The exported function must return the new configuration object to be used.
