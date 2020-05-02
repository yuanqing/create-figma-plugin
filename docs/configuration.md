# Configuration

Configure your plugin under the **`"figma-plugin"`** key of your `package.json` file.

## `"apiVersion"`

(*`string`*)

*Optional.* The version of the Figma plugin API to use. Defaults to **`"1.0.0"`**.

## `"id"`

(*`string`*)

*Required.* The plugin ID. This field can be omitted during development but is required if you want to publish your plugin. Figma will generate a unique plugin ID for you when you first try to publish the plugin; copy and paste that ID here.

## `"name"`

(*`string`*)

*Required.* The name of the plugin.

## `"main"`

(*`string`* or *`object`*)

*Required, unless* **`"menu"`** *is specified.* Path to the entry point of the plugin command. The plugin command must be the function set as the `default` export of the file. To use a particular named export instead, specify an object with the following keys:

- **`"src"`** (*`string`*) — *Required.* Path to the entry point of the plugin command.
- **`"handler"`** (*`string`*) — *Required.* The name of the exported function in the file.

### Example

```json
{
  "figma-plugin": {
    "id": "806532458729477508",
    "name": "Draw Mask Under Selection",
    "main": "src/main.js"
  }
}
```

## `"ui"`

(*`string`* or *`object`*)

*Optional.* Path to the UI implementation of the plugin command (as specified via the sibling **`"main"`** key). The UI implementation must be the function set as the `default` export of the file. To use a particular named export instead, specify an object with the following keys:

- **`"src"`** (*`string`*) — *Required.* Path to the UI implementation of the plugin command.
- **`"handler"`** (*`string`*) — *Required.* The name of the exported function in the file.

### Example

```json
{
  "figma-plugin": {
    "id": "767379335945775056",
    "name": "Draw Slice Over Selection",
    "main": "src/main.js",
    "ui": "src/ui.js"
  }
}
```

See the [recipe for adding a UI to a plugin command](/docs/recipes/ui.md#readme).

## `"menu"`

(*`array`*)

*Required, unless* **`"main"`** *is specified.* An array that specifies the commands shown in the plugin’s sub-menu. Each object in the array has the following keys:

- **`"name"`** (*`string`*) — *Required.* The name of the plugin command.
- **`"main"`** (*`string`* or *`object`*) — *Required, unless* **`"menu"`** *is specified.* Ditto the **`"main"`** field above.
- **`"ui"`** (*`string`* or *`object`*) — *Optional.* Ditto the **`"ui"`** field above.
- **`"menu"`** (*`array`*) — *Required, unless* **`"main"`** *is specified.* Sub-menus can be nested.

Use a **`"-"`** in the array to specify a separator between commands in the sub-menu.

### Example

```json
{
  "figma-plugin": {
    "id": "837846252158418235",
    "name": "Flatten Selection to Bitmap",
    "menu": [
      {
        "name": "Flatten Selection to Bitmap",
        "main": "src/flatten-selection-to-bitmap/main.js"
      },
      "-",
      {
        "name": "Settings",
        "main": "src/settings/main.js",
        "ui": "src/settings/ui.js"
      }
    ]
  }
}
```

See the [recipe for specifying multiple commands in the plugin sub-menu](/docs/recipes/multiple-commands.md#readme).

## `"relaunchButtons"`

(*`object`*)

*Optional.* An object that specifies the commands that can be set as relaunch buttons. Each key is a `relaunchButtonId`. Each value specifies the relaunch button command, and is an object with the following keys:

- **`"name"`** (*`string`*) — *Required.* The name of the Relaunch Button.
- **`"main"`** (*`string`* or *`object`*) — *Required.* Ditto the **`"main"`** field above.
- **`"ui"`** (*`string`* or *`object`*) — *Optional.* Ditto the **`"ui"`** field above.

### Example

```json
{
  "figma-plugin": {
    "id": "786286754606650597",
    "name": "Organize Layers",
    "menu": [
      {
        "name": "Organize Layers",
        "main": "src/organize-layers/main.js",
        "ui": "src/organize-layers/ui.js"
      },
      "-",
      {
        "name": "Reset Plugin",
        "main": "src/reset-plugin/main.js"
      }
    ],
    "relaunchButtons": {
      "organizeLayers": {
        "name": "Organize Layers",
        "main": "src/organize-layers/main.js",
        "ui": "src/organize-layers/ui.js"
      }
    }
  }
}
```

See the [recipe for configuring relaunch buttons](/docs/recipes/relaunch-buttons.md#readme).
