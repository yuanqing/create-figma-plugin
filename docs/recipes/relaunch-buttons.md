# Configuring relaunch buttons

[Relaunch buttons](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/) are configured on the [**`"relaunchButtons"`**](/docs/configuration.md#relaunchbuttons) key under **`"figma-plugin"`**:

```diff
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
+     "relaunchButtons": {
+       "organizeLayers": {
+         "name": "Organize Layers",
+         "main": "src/organize-layers/main.ts",
+         "ui": "src/organize-layers/ui.tsx"
+       }
+     }
    }
  }
```

See that:

- **`"organizeLayers"`** is the `relaunchButtonId`.
- The object corresponding to **`"organizeLayers"`** specifies the command that runs when the relaunch button is clicked.

Then, call [`setRelaunchButton`](/docs/utilities/modules/_nodes_set_relaunch_button_.md#setrelaunchbutton) in our plugin command’s main entry point:

```ts
// src/organize-layers/main.js

import {
  setRelaunchButton,
  // ...
} from '@create-figma-plugin/utilities'

export default async function () {
  setRelaunchButton(figma.currentPage, 'organizeLayers')
  // ...
}
```

The second parameter passed to `setRelaunchButton` must be a particular `relaunchButtonId` as configured on the **`"relaunchButtons"`** key of our `package.json`. In the above example, we’re associating `figma.currentPage` with the `organizeLayers` relaunch button command.

This would result in the following:

![“Organize Layers” relaunch button](/media/relaunch-button.png)

If we want to show additional text below the relaunch button, we can pass a third parameter to `setRelaunchButton`:

```ts
setRelaunchButton(
  figma.currentPage,
  'organizeLayers',
  { description: 'Organizes all layers on the page based on layer name' }
)
```
