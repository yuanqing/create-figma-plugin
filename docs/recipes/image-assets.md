## Using image assets in your plugin UI

Image assets (namely `gif`, `jpg`, `png`, or `svg`) used in your plugin UI must be “inlined” into you plugin’s UI bundle.

Consider the following example where an SVG is used in the UI:

```ts
// src/ui.tsx

import { render } from '@create-figma-plugin/ui'
import { h } from 'preact'

import image from './image.svg'

export default render(Plugin)

function Plugin () {
  // ...
  return (
    // ...
    <img src={image} />
    // ...
  )
}
```

See that:

- `image` is a [Base64-encoded data URL](https://esbuild.github.io/content-types/#data-url) of the imported `image.svg` file, so it is set as the `src` attribute of the `img` HTML element.

If you’re writing your plugin in TypeScript, you’ll also need to add the following `.d.ts` typings file (eg. named `src/types.d.ts`) to your plugin’s `src` directory:

```ts
// src/types.d.ts

declare module '*.svg' {
  const content: string
  export default content
}
```

Change `.svg` to the file extension of your image asset (eg. `.gif`, `.jpg`, `.png`).
