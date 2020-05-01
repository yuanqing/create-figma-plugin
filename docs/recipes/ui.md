# Adding a UI to a plugin command

`@create-figma-plugin/ui` is a library of [Preact](https://preactjs.com/) components that replicate the Figma UI design:

[![UI components from `@create-figma-plugin/ui`: Icon, Button, Checkbox, Radio Buttons, Segmented Control, Selectable List, Layer, Textbox, Autocomplete](/media/ui-figma-components.png)](https://yuanqing.github.io/create-figma-plugin/)

First:

```
$ npm install @create-figma-plugin/ui preact
```

Then, include a call to [`showUI`](/docs/utility-functions.md#showuioptions--data) in our plugin command’s entry point:

```js
// src/main.js

import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  const options = { width: 240, height: 120 }
  const data = { greeting: 'Hello, World!' }
  showUI(options, data)
}
```

`showUI` takes two parameters, and the second `data` parameter is useful for passing some initialising data to the UI.

Next, create a file for our UI (eg. `src/ui.js`):

```js
// src/ui.js

/** @jsx h */
import { render, Container, Text, VerticalSpace } from '@create-figma-plugin/ui'
import { h } from 'preact'

export default render(Plugin)

function Plugin (props) {
  return (
    <Container space='medium'>
      <VerticalSpace space='medium' />
      <Text>{props.greeting}</Text>
      <VerticalSpace space='medium' />
    </Container>
  )
}
```

See that:

- `render` takes a single parameter, `Plugin`, which is a [Preact functional component](https://preactjs.com/guide/v10/components#functional-components).
- The `props` received by the `Plugin` component is precisely the `data` object that was passed to `showUI` from our plugin command’s entry point.

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

When we rebuild our plugin and run it, we’ll see:

![Figma plugin UI modal containing a “Hello, World” message in the Figma UI style](/media/ui-hello-world-figma.png)

See the [full library of Preact components in the Storybook](https://yuanqing.github.io/create-figma-plugin/).

## Using a custom UI library

If we want to use a custom UI library, our plugin command’s UI implementation can be as follows:

```js
// src/ui.js

export default function (rootNode, data) {
  rootNode.innerHTML = `<p>${data.greeting}</p>` //=> <h1>Hello, World!</h1>
}
```

The exported function receives two parameters:
- `rootNode` — An empty `<div>` element within which you can render your UI.
- `data` — This corresponds to the `data` object that was passed to `showUI` from the plugin command’s entry point.
