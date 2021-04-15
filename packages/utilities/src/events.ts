import type { EventHandler } from './types'

const eventHandlers: {
  [id: string]: {
    eventName: string
    eventHandler: EventHandler
  }
} = {}

let currentId = 0

/**
 * Registers an `eventHandler` for the given `eventName`.
 *
 * @returns Returns a function for deregistering the `eventHandler`.
 * @category Events
 */
export function on<T extends EventHandler>(
  eventName: string,
  eventHandler: T
): () => void {
  const id = `${currentId++}`
  eventHandlers[id] = { eventHandler, eventName }
  return function () {
    delete eventHandlers[id]
  }
}

/**
 * Registers an `eventHandler` that will run at most once for the given
 * `eventName`.
 *
 * @returns Returns a function for deregistering the `eventHandler`.
 * @category Events
 */
export function once<T extends EventHandler>(
  eventName: string,
  eventHandler: T
): () => void {
  let done = false
  return on(eventName, function (...args) {
    if (done === true) {
      return
    }
    done = true
    eventHandler(...args)
  })
}

/**
 * Calling `emit` in the main context invokes the event handler for the
 * matching `eventName` in your UI. Correspondingly, calling `emit` in your
 * UI invokes the event handler for the matching `eventName` in the main
 * context.
 *
 * All `args` passed after `eventName` will be directly applied on the
 * event handler.
 *
 * @category Events
 */
export const emit =
  typeof window === 'undefined'
    ? function <T extends EventHandler>(
        eventName: string,
        ...args: Parameters<T>
      ) {
        figma.ui.postMessage([eventName, ...args])
      }
    : function <T extends EventHandler>(
        eventName: string,
        ...args: Parameters<T>
      ) {
        window.parent.postMessage(
          {
            pluginMessage: [eventName, ...args]
          },
          '*'
        )
      }

function invokeEventHandler(eventName: string, args: Array<unknown>) {
  for (const id in eventHandlers) {
    if (eventHandlers[id].eventName === eventName) {
      eventHandlers[id].eventHandler.apply(null, args)
    }
  }
}

if (typeof window === 'undefined') {
  figma.ui.onmessage = function ([eventName, ...args]: [
    string,
    Array<unknown>
  ]): void {
    invokeEventHandler(eventName, args)
  }
} else {
  window.onmessage = function (event: MessageEvent): void {
    if (typeof event.data.pluginMessage === 'undefined') {
      return
    }
    const [eventName, ...args]: [
      string,
      Array<unknown>
    ] = event.data.pluginMessage
    invokeEventHandler(eventName, args)
  }
}
