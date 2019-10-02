/* global figma */

let count = 0
const listeners = {}

export function addCommandEventListener (eventName, callback) {
  const id = count++
  listeners[id] = { eventName, callback }
  return function () {
    delete listeners[id]
  }
}

export function triggerUiEvent (...args) {
  figma.ui.postMessage(args)
}

if (typeof figma !== 'undefined') {
  figma.ui.onmessage = function ([type, ...args]) {
    for (const id of Object.keys(listeners)) {
      const { eventName, callback } = listeners[id]
      if (eventName === type) {
        callback.apply(null, args)
      }
    }
  }
}
