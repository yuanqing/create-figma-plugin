# Configuration

## `package.json`

Configure your plugin via the **`"create-figma-plugin"`** key of your `package.json` file.

### Configuration options

#### `"apiVersion"`

> *`string`*

*Optional.* The version of the Figma plugin API to use. Defaults to **`"1.0.0"`**.

#### `"id"`

> *`string`*

*Required.* The plugin ID. This field can be omitted during development but is required if you want to [publish your plugin](https://help.figma.com/hc/en-us/articles/360042293394-Publish-a-plugin-to-the-Community#Submit_your_plugin_to_the_Community). Figma will generate a unique plugin ID for you when you first try to publish the plugin; copy and paste that ID here.

#### `"name"`

> *`string`*

*Required.* The name of your plugin.

#### `"main"`

> *`string` or `object`*

*Optional.* Path to the entry point of the plugin command. The plugin command must be the function set as the `default` export in the file. To use a named export, specify an object with these keys:

- **`"src"`** (`string`) — *Required.* Path to the entry point of the plugin command.
- **`"handler"`** (`string`) — *Required.* The name of the exported function in the file.

#### `"ui"`

> *`string` or `object`*

*Optional.* Path to the UI implementation for the plugin command. The plugin command must be the function set as the `default` export in the file. To use a named export, specify an object with these keys:

- **`"src"`** (`string`) — *Required.* Path to the UI implementation of the plugin command.
- **`"handler"`** (`string`) — *Required.* The name of the exported function in the file.

#### `"menu"`

> *`array`*

*Optional.* Specifies the commands shown in the plugin’s sub-menu. Each object in the array has these keys:

- **`"name"`** (`string`) — *Required.* The display name of the plugin command.
- **`"main"`** (`string` or `object`) — *Required.* Ditto the **`"main"`** key above.
- **`"ui"`** (`string` or `object`) — *Optional.* Ditto the **`"ui"`** key above.
- **`"menu"`** (`array`) — *Optional.* Ditto the **`"menu"`** key above. Menus can be nested.

Use a **`"-"`** in the array to specify a separator between commands in the sub-menu.

### Examples

A plugin with a single command:

```diff
  {
    ...
    "create-figma-plugin": {
      "id": "314159265358979323",
      "name": "Hello World",
+     "main": "src/main.js",
+     "ui": "src/ui.js"
    }
  }
```

A plugin with a sub-menu containing multiple commands:

```diff
  {
    ...
    "create-figma-plugin": {
      "id": "314159265358979323",
      "name": "Hello World",
+     "menu": [
+       {
+         "name": "Hello, World",
+         "main": "src/hello-world/main.js",
+         "ui": "src/hello-world/ui.js"
+       },
+       "-",
+       {
+         "name": "Settings",
+         "main": "src/settings/main.js",
+         "ui": "src/settings/ui.js"
+       }
+     ]
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

`config` is the configuration object used when you build your plugin using the `build-figma-plugin` CLI. The exported function in `create-figma-plugin.config.js` must return the new Webpack configuration to be used.
