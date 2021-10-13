## Making the plugin window resizable

The Figma/FigJam plugin window is *not* resizable by default; this must be implemented by the plugin itself. In practice, this involves:

1. Listening to click-and-drag events in the plugin window, and calculating an updated window size based on the mouse position.
2. Calling [`figma.ui.resize`](https://figma.com/plugin-docs/api/figma-ui/#resize) with the updated window size.

[`@create-figma-plugin/ui`](#using-the-preact-component-library) includes a `useWindowResize` hook that makes it easier to implement a resizable plugin window:

```ts
// src/ui.tsx

import { render, useWindowResize } from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'

function Plugin () {
  // ...
  function onWindowResize(windowSize: { width: number; height: number }) {
    emit('RESIZE_WINDOW', windowSize)
  }
  useWindowResize(onWindowResize, {
    minWidth: 120,
    minHeight: 120,
    maxWidth: 320,
    maxHeight: 320
  })
  // ...
}

export default render(Plugin)
```

The hook takes two arguments:

- The first argument is an `onWindowResize` callback that will be invoked with the updated `windowSize` in response to click-and-drag events on the bottom and right edges of the plugin window. Within this callback, we `emit` the **`RESIZE_WINDOW`** event, and pass along the updated `windowSize`.
- The second argument is an optional configuration object where we can set a minimum and maximum size for the resizable plugin window.

In the [main context](#main-context), we register a handler for the **`RESIZE_WINDOW`** event, and invoke [`figma.ui.resize`](https://figma.com/plugin-docs/api/figma-ui/#resize) with the new window size:

```ts
// src/main.ts

import { on, showUI } from '@create-figma-plugin/utilities'

export default function () {
  // ...
  on('RESIZE_WINDOW', function (windowSize: { width: number; height: number }) {
    const { width, height } = windowSize
    figma.ui.resize(width, height)
  })
  // ...
  showUI({
    width: 240,
    height: 240
  })
}
```

To restrict the resize direction, set `options.resizeDirection` to either `horizontal` or `vertical`:

```diff
  useWindowResize(onWindowResize, {
    minWidth: 120,
    maxWidth: 320,
+   resizeDirection: 'horizontal'
  })
```

The `useWindowResize` hook also supports toggling the plugin window size on double-clicking the bottom and right edges of the plugin window:

```diff
  useWindowResize(onWindowResize, {
    minWidth: 120,
    minHeight: 120,
    maxWidth: 320,
    maxHeight: 320,
+   resizeBehaviorOnDoubleClick: 'minimize'
  })
```

Setting `options.resizeBehaviorOnDoubleClick` to `minimize` means that the plugin window will be set to the minimum size on double-click. Correspondingly, setting it to `maximize` means that the plugin window will be set to the maximum size on double-click.

For a runnable example, try the [`preact-resizable`](https://github.com/yuanqing/create-figma-plugin/tree/main/packages/create-figma-plugin/plugin-templates/preact-resizable) plugin template:

```
$ npx --yes -- create-figma-plugin my-plugin --template preact-resizable
```
