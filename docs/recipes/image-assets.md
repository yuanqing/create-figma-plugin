## Using image assets in your plugin/widget UI

Image assets used in your plugin/widget UI must be “inlined” into the UI bundle. Consider the following example where a PNG image is used in the UI:

```ts
// src/ui.tsx

import { render } from '@create-figma-plugin/ui'
import { h } from 'preact'

import image from './image.png'

function Plugin () {
  // ...
  return (
    // ...
    <img src={image} />
    // ...
  )
}

export default render(Plugin)
```

Note that `image` is a [Base64-encoded data URL](https://esbuild.github.io/content-types/#data-url) string of the imported `image.png` file, so it is set as the `src` attribute of the `img` HTML element.

If you’re writing your plugin/widget in TypeScript, you’ll also need to add a `.d.ts` typings file to your project’s `src` directory containing the following:

```ts
// src/image-assets.d.ts

declare module '*.gif' {
  const content: string
  export default content
}
declare module '*.jpg' {
  const content: string
  export default content
}
declare module '*.png' {
  const content: string
  export default content
}
declare module '*.svg' {
  const content: string
  export default content
}
```
