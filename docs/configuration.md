# Configuration

- [JSON schema](#json-schema)
- [Configuration options](#configuration-options)

## JSON schema

Validate the plugin configuration in your `package.json` file using [Create Figma Plugin’s configuration JSON schema](https://yuanqing.github.io/create-figma-plugin/figma-plugin.json).

To enable autocomplete and inline validation of your plugin configuration in [Visual Studio Code](https://code.visualstudio.com), create a `.vscode/settings.json` file containing the following:

```json
{
  "json.schemas": [
    {
      "fileMatch": [
        "package.json"
      ],
      "url": "https://yuanqing.github.io/create-figma-plugin/figma-plugin.json"
    }
  ]
}
```

## Configuration options

Configure your plugin under the **`"figma-plugin"`** key of your `package.json` file.

### `"apiVersion"`

(*`string`*)

*Optional.* The version of the Figma plugin API to use. Defaults to **`"1.0.0"`**.

### `"id"`

(*`string`*)

*Required to publish the plugin on Figma Community.* The plugin ID. This field can be omitted during development but is required if you want to [publish your plugin](https://help.figma.com/hc/en-us/articles/360042293394-Publish-plugins-to-the-Figma-Community). Figma will generate a unique plugin ID for you when you first try to publish the plugin; copy and paste that ID here.

### `"name"`

(*`string`*)

*Required.* The name of the plugin.

### `"main"`

(*`string`* or *`object`*)

*Required, unless* **`"menu"`** *is specified.* Path to the main entry point of the plugin command. The plugin command must be the function set as the `default` export of the file. To use a particular named export instead, specify an object with the following keys:

- **`"src"`** (*`string`*) — *Required.* Path to the main entry point of the plugin command.
- **`"handler"`** (*`string`*) — *Required.* The name of the exported function in the file.

***Example***

```json
{
  "figma-plugin": {
    "id": "806532458729477508",
    "name": "Draw Mask Under Selection",
    "main": "src/main.ts"
  }
}
```

### `"ui"`

(*`string`* or *`object`*)

*Optional.* Path to the UI implementation of the plugin command (as specified via the sibling **`"main"`** key). The UI implementation must be the function set as the `default` export of the file. To use a particular named export instead, specify an object with the following keys:

- **`"src"`** (*`string`*) — *Required.* Path to the UI implementation of the plugin command.
- **`"handler"`** (*`string`*) — *Required.* The name of the exported function in the file.

***Example***

```json
{
  "figma-plugin": {
    "id": "767379335945775056",
    "name": "Draw Slice Over Selection",
    "main": "src/main.ts",
    "ui": "src/ui.tsx"
  }
}
```

Learn how to [add a UI to a plugin command](#ui-1).

### `"menu"`

(*`array`*)

*Required, unless* **`"main"`** *is specified.* An array that specifies the commands shown in the plugin’s sub-menu. Each object in the array has the following keys:

- **`"name"`** (*`string`*) — *Required.* The name of the plugin command.
- **`"main"`** (*`string`* or *`object`*) — *Required, unless* **`"menu"`** *is specified.* Ditto the **`"main"`** field above.
- **`"ui"`** (*`string`* or *`object`*) — *Optional.* Ditto the **`"ui"`** field above.
- **`"menu"`** (*`array`*) — *Required, unless* **`"main"`** *is specified.* Sub-menus can be nested.

Use a **`"-"`** in the array to specify a separator between commands in the sub-menu.

***Example***

```json
{
  "figma-plugin": {
    "id": "837846252158418235",
    "name": "Flatten Selection to Bitmap",
    "menu": [
      {
        "name": "Flatten Selection to Bitmap",
        "main": "src/flatten-selection-to-bitmap/main.ts"
      },
      "-",
      {
        "name": "Settings",
        "main": "src/settings/main.ts",
        "ui": "src/settings/ui.tsx"
      }
    ]
  }
}
```

See the [recipe for specifying multiple commands in the plugin sub-menu](#specifying-multiple-commands-in-the-plugin-sub-menu).

### `"relaunchButtons"`

(*`object`*)

*Optional.* An object that specifies the commands that can be set as [relaunch buttons](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/). Each key is a `relaunchButtonId`. Each value specifies the relaunch button command, and is an object with the following keys:

- **`"name"`** (*`string`*) — *Required.* The name of the relaunch button.
- **`"main"`** (*`string`* or *`object`*) — *Required.* Ditto the **`"main"`** field above.
- **`"ui"`** (*`string`* or *`object`*) — *Optional.* Ditto the **`"ui"`** field above.
- **`"multipleSelection"`** (*`boolean`*) — *Optional.* Whether the relaunch button should appear when multiple layers are selected.

***Example***

```json
{
  "figma-plugin": {
    "id": "786286754606650597",
    "name": "Organize Layers",
    "menu": [
      {
        "name": "Organize Layers",
        "main": "src/organize-layers/main.ts",
        "ui": "src/organize-layers/ui.tsx"
      },
      "-",
      {
        "name": "Reset Plugin",
        "main": "src/reset-plugin/main.ts"
      }
    ],
    "relaunchButtons": {
      "organizeLayers": {
        "name": "Organize Layers",
        "main": "src/organize-layers/main.ts",
        "ui": "src/organize-layers/ui.tsx"
      }
    }
  }
}
```

See the [recipe for configuring relaunch buttons](#configuring-relaunch-buttons).

### `"enablePrivatePluginApi"`

(*`boolean`*)

*Optional.* Allow use of plugin APIs that are only available to private plugins.

### `"enableProposedApi"`

(*`boolean`*)

*Optional.* Allow use of [Proposed APIs](https://figma.com/plugin-docs/proposed-api/) that are only available during development.
