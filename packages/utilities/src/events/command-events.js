/* global figma */

const listeners = []

export function addCommandEventListener (eventName, callback) {
  const index = listeners.length
  listeners.push({ eventName, callback })
  return function () {
    listeners.splice(index, 1)
  }
}

export function triggerUiEvent (...args) {
  figma.ui.postMessage(args)
}

if (typeof figma !== 'undefined') {
  figma.ui.onmessage = function ([type, ...args]) {
    for (const { eventName, callback } of listeners) {
      if (eventName === type) {
        callback.apply(null, args)
      }
    }
  }
}
