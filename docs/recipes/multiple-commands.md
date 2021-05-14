## Specifying multiple commands in the plugin sub-menu

Commands are specified on the [**`"menu"`**](#menu) key under **`"figma-plugin"`**:

```diff
  {
    "figma-plugin": {
      "id": "837846252158418235",
      "name": "Flatten Selection to Bitmap",
+     "menu": [
+       {
+         "name": "Flatten Selection to Bitmap",
+         "main": "src/flatten-selection-to-bitmap/main.ts"
+       },
+       "-",
+       {
+         "name": "Settings",
+         "main": "src/settings/main.ts",
+         "ui": "src/settings/ui.tsx"
+       }
+     ]
    }
  }
```

See that:

- **`"Flatten Selection to Bitmap"`** and **`"Settings"`** are the two commands in the plugin sub-menu.
- Of these two commands, only the **`"Settings"`** command has a UI implementation.
- A **`"-"`** is used to specify a separator between the two commands in the plugin sub-menu.

The above configuration would result in the following:

![“Flatten Selection to Bitmap” plugin sub-menu](/media/multiple-commands.png)

See the other [configuration options](#configuration-options).
