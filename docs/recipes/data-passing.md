# Passing data between the plugin command’s main and UI contexts

`@create-figma-plugin/utilities` offers 3 functions to facilitate data passing between our plugin command’s main and UI contexts:

- [`on(eventName, eventHandler)`](/docs/utility-functions.md#const-off--oneventname-eventhandler) — Registers an `eventHandler` for the given `eventName`.
- [`once(eventName, eventHandler)`](/docs/utility-functions.md#const-off--onceeventname-eventhandler) — Ditto `on`, only that the `eventHandler` will run at most once.
- [`emit(eventName *[, ...arguments]*)`](/docs/utility-functions.md#emiteventname--arguments) — Calling `emit` in the main context invokes the event handler for the matching `eventName` in your UI. Correspondingly, calling `emit` in your UI invokes the event handler for the matching `eventName` in the main context. All `arguments` passed after `eventName` will be directly [applied](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) on the event handler.

Consider a toy example:

```js
// src/main.js

import {
  once,
  // ...
} from '@create-figma-plugin/utilities'

export default function () {
  function handleSubmit (data) {
    console.log(data) //=> { greeting: 'Hello, World!' }
  }
  once('SUBMIT', handleSubmit)
  // ...
}
```

```js
// src/ui.js

/** @jsx h */
import { render, Button } from '@create-figma-plugin/ui'
import {
  emit,
  // ...
} from '@create-figma-plugin/utilities'
import { h } from 'preact'

export default render(Plugin)

function Plugin () {
  // ...
  function handleClick () {
    const data = { greeting: 'Hello, World!' }
    emit('SUBMIT', data)
  }
  return (
    // ...
    <Button onClick={handleClick}>Submit</Button>
    // ...
  )
}
```

See that:

- In the main context, we’re using `once` to register the `handleSubmit` event handler for the event name `SUBMIT`.
- In the UI context, we’re using `emit` to trigger the event handler in the main context for the event name `SUBMIT`.
- In the main context, the `data` received by the `handleSubmit` event handler is precisely the `data` object that was passed to `emit` in the plugin UI context.
