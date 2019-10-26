# Configuration

## `package.json`

Configure your plugin via the **`"create-figma-plugin"`** key of your `package.json` file.

- **`"id"`** *(optional)* — The plugin ID. This field is only required when you want to publish your plugin to Figma. Figma assigns a unique ID to your plugin when you first publish your plugin; specify that unique ID here.
- **`"name"`** — The display name of the plugin.
- **`"command"`** — Path to the plugin command implementation. The command implementation must be a function set to be `default` export of this file.
- **`"ui"`** *(optional)* — Path to the plugin command’s UI implementation. The UI implementation must be a function set to be `default` export of this file.
- **`"menu"`** *(optional)* — An array that specifies the commands shown in the plugin’s sub-menu. Each object in the array has these keys:

    - **`"name"`** — The display name of the plugin command.
    - **`"command"`** — Ditto the `"command"` key above.
    - **`"ui"`** *(optional)* — Ditto the `"ui"` key above.

    Use a **`"-"`** in the array to set a separator between commands in the sub-menu.

The initial `src/` of any path specified in the configuration can be omitted. Create Figma Plugin will attempt to resolve paths in the `src/` directory.

### *Example*

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

A plugin with multiple commands in the plugin sub-menu, with each command with their own UI implementation :

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

---

## `create-figma-plugin.config.js`

To customize the underlying [Webpack configuration](https://webpack.js.org/configuration/), create a `create-figma-plugin.config.js` file:

```js
module.exports = function (config) {
  // ...
  return {
    ...config
    // ...
  }
}
```

`config` is the configuration object used when you build your plugin using `create-figma-plugin`. The exported function must return the new configuration object to be used.
