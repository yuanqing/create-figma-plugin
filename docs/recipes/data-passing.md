## Passing data between the plugin command’s main and UI contexts

`@create-figma-plugin/utilities` provides 3 functions to facilitate data passing (in both directions) between our plugin command’s [main and UI contexts](#how-a-figma-plugin-works):

- [`on(name, handler)`](#onname-handler) — Registers an event `handler` for the given event `name`.
- [`once(name, handler)`](#oncename-handler) — Ditto `on`, only that `handler` will run at most once.
- [`emit(name, ...args)`](#emitname-args) — Calling `emit` in the main context invokes the event handler for the matching event `name` in your UI. Correspondingly, calling `emit` in your UI invokes the event handler for the matching event `name` in the main context. All `arguments` passed after `name` will be directly [applied](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) on the event handler.

Consider a toy example:

```ts
// src/main.ts

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

```ts
// src/ui.tsx

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
