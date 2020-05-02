# Configuring relaunch buttons

[Relaunch buttons](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/) are configured on the **`"relaunchButtons"`** key under **`"figma-plugin"`**:

```diff
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
+     "relaunchButtons": {
+       "organizeLayers": {
+         "name": "Organize Layers",
+         "main": "src/organize-layers/main.js",
+         "ui": "src/organize-layers/ui.js"
+       }
+     }
    }
  }
```

See that:

- **`"organizeLayers"`** is the `relaunchButtonId`.
- The object corresponding to **`"organizeLayers"`** specifies the command that runs when the relaunch button is clicked.

Then, call [`setRelaunchButton`](/docs/utility-functions.md#setrelaunchbuttonlayer-relaunchbuttonid--description) in our plugin command’s entry point:

```js
// src/organize-layers/main.js

import {
  // ...
  setRelaunchButton
  // ...
} from '@create-figma-plugin/utilities'

export default async function () {
  // ...
  setRelaunchButton(figma.currentPage, 'organizeLayers')
  // ...
}
```

Here, we’re associating `figma.currentPage` with the `organizeLayers` relaunch button.

This would result in the following:

![“Organize Layers” relaunch button](/media/relaunch-button.png)

If we want to show additional text below the relaunch button, we can pass a third parameter to `setRelaunchButton`:

```js
setRelaunchButton(figma.currentPage, 'organizeLayers', 'Organizes all layers on the page based on layer name')
```
