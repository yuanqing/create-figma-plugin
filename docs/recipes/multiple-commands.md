## Specifying multiple commands in the plugin sub-menu

*This is applicable to Figma/FigJam plugins only.*

Menu commands are specified on the [**`"menu"`**](#menu) key under **`"figma-plugin"`**:

```diff
  {
    "figma-plugin": {
      "id": "837846252158418235",
      "name": "Flatten Selection to Bitmap",
+     "menu": [
+        {
+          "name": "Flatten Selection to Bitmap",
+          "main": "src/flatten-selection-to-bitmap/main.ts",
+          "ui": "src/flatten-selection-to-bitmap/ui.ts"
+        },
+        "-",
+        {
+          "name": "Settings",
+          "main": "src/settings/main.ts",
+          "parameters": [
+            {
+              "key": "resolution",
+              "description": "Enter a bitmap resolution"
+            }
+          ]
+        }
+      ]
+    }
    }
  }
```

See that:

- **`"Flatten Selection to Bitmap"`** and **`"Settings"`** are the two commands in the plugin sub-menu.
- The **`"Flatten Selection to Bitmap"`** command has a UI implementation.
- **`"Settings"`** is a [parameter command](https://figma.com/plugin-docs/plugin-parameters/) that receives a single `resolution` parameter via the Quick Actions search bar.
- A **`"-"`** is used to specify a separator between the two commands in the plugin sub-menu.

The above configuration would result in the following:

![“Flatten Selection to Bitmap” plugin sub-menu](/media/multiple-commands.png)

See the other [configuration options](#configuration-options).
