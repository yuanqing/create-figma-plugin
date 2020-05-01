# Adding a UI to a plugin command

Each plugin command defined in `package.json` can have a corresponding UI implementation.

First, include a call to [`showUI`](/docs/utility-functions.md#showuioptions--data) in the command’s entry point:

```js
// src/main.js

import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  const options = { width: 240, height: 120 }
  const data = { greeting: 'Hello, World!' }
  showUI(options, data)
}
```

*N.B.* The `showUI` function from `@create-figma-plugin/utilities` is used in place of [`figma.showUI`](https://figma.com/plugin-docs/api/properties/figma-showui/).

`showUI` takes two parameters, namely `options` and `data`. The second `data` parameter is useful for passing some initialising data to the UI.

Next, create a file for our UI (eg. `src/ui.js`):

```js
// src/ui.js

export default function (rootNode, data) {
  rootNode.innerHTML = `<h1>${data.greeting}</h1>` //=> <h1>Hello, World!</h1>
}
```

Here, the exported function receives two parameters:

- `rootNode` — An empty `<div>` element within which you can render your UI.
- `data` — This corresponds to the second parameter passed to `showUI` in `src/main.js`.

We’re rendering a `<h1>` containing the `data.greeting` string that we had passed in from the plugin command’s entry point.

Finally, in `package.json`, point to our UI file on the **`"ui"`** key:

```diff
  {
    ...
    "figma-plugin": {
      ...
      "name": "Hello World",
      "main": "src/main.js",
+     "ui": "src/ui.js"
    }
  }
```

When we rebuild the plugin and run it, we’ll see:

![Plugin UI with “Hello, World” message](/media/ui-hello-world.png)
