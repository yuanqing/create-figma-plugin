const isCommand = typeof window === 'undefined'

const eventListeners = {}

let currentId = 0

export function on (eventName, eventListener) {
  const id = `${currentId++}`
  eventListeners[id] = { eventName, eventListener }
  return function () {
    delete eventListeners[id]
  }
}

export function once (eventName, eventListener) {
  let done = false
  return on(eventName, function (...args) {
    if (done === true) {
      return
    }
    done = true
    eventListener.apply(null, args)
  })
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
    for (const id in eventListeners) {
      const { eventName, eventListener } = eventListeners[id]
      if (eventName === type) {
        eventListener.apply(null, args)
      }
    }
  }
} else {
  window.onmessage = function (event) {
    const [type, ...args] = event.data.pluginMessage
    for (const id in eventListeners) {
      const { eventName, eventListener } = eventListeners[id]
      if (eventName === type) {
        eventListener.apply(null, args)
      }
    }
  }
}
