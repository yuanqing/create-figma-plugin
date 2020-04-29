# Adding a user interface

Every command defined in `package.json` can have a corresponding UI implementation.

First, include a call to `showUI` in the command’s entry point (eg. `src/main.js`):

```js
// src/main.js

import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  showUI({ width: 240, height: 320 }, { greeting: 'Hello, World!' })
}
```

`showUI` takes two parameters, and the second `data` parameter is useful for passing some initialising data from your command to its UI.

Next, create a file for your UI (eg. `src/ui.js`):

```js
// src/ui.js

export default function (rootNode, data) {
  rootNode.innerHTML = `<h1>${data.greeting}</h1>` //=> <h1>Hello, World!</h1>
}
```

The exported function receives two parameters:

- `rootNode` — An empty `<div>` element within which you can render your UI.
- `data` — This corresponds to the second parameter passed to `showUI` in `src/main.js`.

Finally, in `package.json`, point to `src/ui.js` on the `"ui"` key corresponding to the command’s entry point:

```diff
{
  ...
  "create-figma-plugin": {
    ...
    "main": "src/main.js"
+   "ui": "src/ui.js"
  }
}
```
