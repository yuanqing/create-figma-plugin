const isCommand = typeof window === 'undefined'

const eventListeners = {}

let count = 0
export function on (eventName, eventListener) {
  const id = count++
  eventListeners[id] = { eventName, eventListener }
  return function () {
    delete eventListeners[id]
  }
}

export const emit = isCommand
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

if (isCommand === true) {
  figma.ui.onmessage = function ([type, ...args]) {
    for (const id of Object.keys(eventListeners)) {
      const { eventName, eventListener } = eventListeners[id]
      if (eventName === type) {
        eventListener.apply(null, args)
      }
    }
  }
} else {
  window.onmessage = function (event) {
    const [type, ...args] = event.data.pluginMessage
    for (const id of Object.keys(eventListeners)) {
      const { eventName, eventListener } = eventListeners[id]
      if (eventName === type) {
        eventListener.apply(null, args)
      }
    }
  }
}
