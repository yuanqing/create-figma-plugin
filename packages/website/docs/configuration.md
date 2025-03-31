---
{
  "order": 3,
  "title": "Configuration"
}
---

# Configuration

## Configuration options

Configure your plugin/widget under the **`"figma-plugin"`** key of your `package.json` file.

The configuration options map closely to the plugin and widget `manifest.json` APIs:

- [Plugin Manifest API](https://figma.com/plugin-docs/manifest/)
- [Widget Manifest API](https://figma.com/widget-docs/widget-manifest/)

### `api`

(*`string`*)

*Optional.* The version of the plugin API to use. Defaults to `"1.0.0"`.

### `widgetApi`

(*`string`*)

*Optional.* The version of the widget API to use. Defaults to `"1.0.0"`.

### `editorType`

(*`Array<"figma" | "figjam" | "slides" | "dev">`*)

*Optional.* For specifying the editor(s) that the plugin/widget is intended for. Possible editor types are **`"figma"`**, **`"figjam"`**, **`"slides"`**, and **`"dev"`**. Defaults to **`["figma"]`**. The values **`["figjam", "dev"]`** and **`["slides", "dev"]`** are currently not supported.

### `containsWidget`

(*`boolean`*)

*Optional.* This field must be set to `true` for a Figma/FigJam widget. Defaults to `false`.

### `id`

(*`string`*)

*Required to publish the plugin/widget on Figma Community.* The plugin/widget ID. This field can be omitted during development but is required if you want to publish your plugin/widget. Figma will generate a unique ID for you when you first try to publish your plugin/widget; copy and paste that ID here.

### `name`

(*`string`*)

*Required.* The name of the plugin/widget.

### `main`

(*`string`* or *`object`*)

*Required, unless* **`"menu"`** *is specified.* Path to the main entry point of the plugin command or widget. The main entry point must be the function set as the `default` export of the file. To use a particular named export instead, specify an object with the following keys:

- **`"src"`** (*`string`*) — *Required.* Path to the main entry point.
- **`"handler"`** (*`string`*) — *Required.* The name of the exported function in the file.

***Example***

```json {5}
{
  "figma-plugin": {
    "id": "806532458729477508",
    "name": "Draw Mask Under Selection",
    "main": "src/main.ts"
  }
}
```

### `ui`

(*`string`* or *`object`*)

*Optional.* Path to the UI implementation of the plugin command or widget (as specified via the sibling **`"main"`** key). The UI implementation must be the function set as the `default` export of the file. To use a particular named export instead, specify an object with the following keys:

- **`"src"`** (*`string`*) — *Required.* Path to the UI implementation of the plugin command.
- **`"handler"`** (*`string`*) — *Required.* The name of the exported function in the file.

***Example***

```json {6}
{
  "figma-plugin": {
    "id": "767379335945775056",
    "name": "Draw Slice Over Selection",
    "main": "src/main.ts",
    "ui": "src/ui.tsx"
  }
}
```

Learn how to [add a UI to a plugin command](<%- query('page', 'ui').url %>).

### `parameters`

(*`array`*)

*Optional.* An array that specifies the [parameters](https://figma.com/plugin-docs/plugin-parameters/) that the plugin command accepts via Figma’s Quick Actions search bar. Each parameter is an object with the following keys:

- **`"key"`** (*`string`*) — *Required.* The unique key used to identify the parameter.
- **`"name"`** (*`string`*) — *Optional.* The name of the parameter shown in the Quick Actions search bar. Defaults to the value of the sibling `"key"` key.
- **`"description"`** (*`string`*) — *Optional.* The description for the parameter shown in the Quick Actions search bar.
- **`"allowFreeform"`** (*`boolean`*) — *Optional.* Set this to `true` to allow any value to be entered for the parameter, not just the values suggested by the plugin command.
- **`"optional"`** (*`boolean`*) — *Optional.* Set this to `true` to make the parameter optional. Optional parameters can only occur at the end of the list of parameters. There must be at least one non-optional parameter.

Learn how to [accept parameters via the Quick Actions search bar in your plugin command](https://figma.com/plugin-docs/plugin-parameters/).

### `parameterOnly`

(*`boolean`*)

*Optional.* When **`"parameters"`** is specified, the default behavior is that the user will be required to input parameters via the Quick Actions search bar. Set **`"parameterOnly"`** to `false` to make parameter input optional.

### `menu`

(*`array`*)

*Required, unless* **`"main"`** *is specified.* An array that specifies the commands shown in the plugin’s sub-menu. Each object in the array has the following keys:

- **`"name"`** (*`string`*) — *Required.* The name of the plugin command.
- **`"main"`** (*`string`* or *`object`*) — *Required, unless* **`"menu"`** *is specified.* Ditto the **`"main"`** field above.
- **`"ui"`** (*`string`* or *`object`*) — *Optional.* Ditto the **`"ui"`** field above.
- **`"parameters"`** (*`array`*) — *Optional.* Ditto the **`"parameters"`** field above.
- **`"parameterOnly"`** (*`boolean`*) — *Optional.* Ditto the **`"parameterOnly"`** field above.
- **`"menu"`** (*`array`*) — *Required, unless* **`"main"`** *is specified.* Sub-menus can be nested.

Use a **`"-"`** in the array to specify a separator between commands in the sub-menu.

***Example***

```json {5-22}
{
  "figma-plugin": {
    "id": "837846252158418235",
    "name": "Flatten Selection to Bitmap",
    "menu": [
      {
        "name": "Flatten Selection to Bitmap",
        "main": "src/flatten-selection-to-bitmap/main.ts",
        "ui": "src/flatten-selection-to-bitmap/ui.ts"
      },
      "-",
      {
        "name": "Settings",
        "main": "src/settings/main.ts",
        "parameters": [
          {
            "key": "resolution",
            "description": "Enter a bitmap resolution"
          }
        ]
      }
    ]
  }
}
```

See the [recipe for specifying multiple commands in the plugin sub-menu](<%- query('page', 'recipes').url %>#specifying-multiple-commands-in-the-plugin-sub-menu).

### `relaunchButtons`

(*`object`*)

*Optional.* An object that specifies the commands that can be set as [relaunch buttons](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/). Each key is a `relaunchButtonId`. Each value specifies the relaunch button command, and is an object with the following keys:

- **`"name"`** (*`string`*) — *Required.* The name of the relaunch button.
- **`"main"`** (*`string`* or *`object`*) — *Required.* Ditto the **`"main"`** field above.
- **`"ui"`** (*`string`* or *`object`*) — *Optional.* Ditto the **`"ui"`** field above.
- **`"multipleSelection"`** (*`boolean`*) — *Optional.* Whether the relaunch button should appear when multiple layers are selected.

***Example***

```json {17-23}
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

See the [recipe for configuring relaunch buttons](<%- query('page', 'recipes').url %>#configuring-relaunch-buttons).

### `capabilities`

(*`Array<"codegen" | "inspect" | "textreview" | "vscode">`*)

*Optional.* For specifying the list of [capabilities](https://figma.com/plugin-docs/manifest/#capabilities) that the plugin needs access to. Possible capabilities are **`"codegen"`**, **`"inspect"`**, **`"textreview"`**, and **`"vscode"`**.

### `permissions`

(*`Array<"activeusers" | "currentuser" | "fileusers" | "payments" | "teamlibrary">`*)

*Optional.* For specifying the list of [permissions](https://figma.com/plugin-docs/manifest/#permissions) that the plugin/widget needs access to. Possible permissions are **`"activeusers"`**, **`"currentuser"`**, **`"fileusers"`**, **`"payments"`** and **`"teamlibrary"`**.

### `documentAccess`

(*`"dynamic-page"`*)

*Optional.* Set this to `"dynamic-page"` if your plugin is compatible with Figma’s [dynamic page loading feature](https://figma.com/plugin-docs/accessing-document/#loading-pages-and-nodes). If this is not set, running the plugin will trigger the loading of additional pages in a file with multiple pages.

### `networkAccess`

(*`object`*)

*Required.* An object that specifies the [list of domains that your plugin/widget is permitted to access](https://figma.com/plugin-docs/manifest#networkaccess). The object has the following keys:

- **`"allowedDomains"`** (*`Array<string>`*) — *Required.* Either `["none"]` or match patterns for domains that your plugin/widget is permitted to access.
- **`"reasoning"`** (*`string`*) — *Optional.* For specifying why your plugin/widgets needs to access the domains in **`"allowedDomains"`**.
- **`"devAllowedDomains"`** (*`Array<string>`*) — *Optional.* Match patterns for domains that your plugin/widget is permitted to access during development.

### `codegenLanguages`

(*`Array<CodeLanguage>`*)

*Required for codegen plugins only.* An array of code languages that your codegen plugin supports. Each language is an object with the following keys:

- **`"label"`** (*`string`*) — *Required.* A label for the code language displayed in the Figma UI.
- **`"value"`** (*`string`*) — *Required.* A specific code language.

See the [example](https://figma.com/plugin-docs/manifest/#codegenlanguages).

### `codegenPreferences`

(*`Array<CodegenPreference>`*)

*Optional.* Preferences for your codegen plugin. See the [example](https://figma.com/plugin-docs/manifest/#codegenpreferences).

### `enablePrivatePluginApi`

(*`boolean`*)

*Optional.* Set this to `true` to allow the use of plugin APIs that are only available to private plugins/widgets.

### `enableProposedApi`

(*`boolean`*)

*Optional.* Set this to `true` to allow the use of [Proposed APIs](https://figma.com/plugin-docs/proposed-api/) that are only available during development.

### `build`

(*`string`*)

*Optional.* A shell command that Figma will run before your plugin’s files are loaded.

## JSON schema

Validate the plugin configuration in your `package.json` file using [Create Figma Plugin’s configuration JSON schema](https://yuanqing.github.io/create-figma-plugin/figma-plugin.json).

If you’re using [Visual Studio Code](https://code.visualstudio.com), you can enable autocomplete and inline validation of your plugin configuration by creating a `.vscode/settings.json` file:

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
