/* global figma */

const isCommand = typeof window === 'undefined'

const listeners = {}

let count = 0
export function addEventListener (eventName, eventListener) {
  const id = count++
  listeners[id] = { eventName, eventListener }
  return function () {
    delete listeners[id]
  }
}

// prettier-ignore
export const triggerEvent = isCommand
  ? function (...args) {
    figma.ui.postMessage(args)
  }
  : function (...args) {
    window.parent.postMessage(
      {
        pluginMessage: args
      },
      '*'
    )
  }

if (isCommand) {
  figma.ui.onmessage = function ([type, ...args]) {
    for (const id of Object.keys(listeners)) {
      const { eventName, eventListener } = listeners[id]
      if (eventName === type) {
        eventListener.apply(null, args)
      }
    }
  }
} else {
  window.onmessage = function (event) {
    const [type, ...args] = event.data.pluginMessage
    for (const id of Object.keys(listeners)) {
      const { eventName, eventListener } = listeners[id]
      if (eventName === type) {
        eventListener.apply(null, args)
      }
    }
  }
}
