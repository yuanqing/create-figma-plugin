const isCommand = typeof window === 'undefined'

const eventHandlers = {}

let currentId = 0

export function on (eventName, eventHandler) {
  const id = `${currentId++}`
  eventHandlers[id] = { eventName, eventHandler }
  return function () {
    delete eventHandlers[id]
  }
}

export function once (eventName, eventHandler) {
  let done = false
  return on(eventName, function (...args) {
    if (done === true) {
      return
    }
    done = true
    eventHandler.apply(null, args)
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
    for (const id in eventHandlers) {
      const { eventName, eventHandler } = eventHandlers[id]
      if (eventName === type) {
        eventHandler.apply(null, args)
      }
    }
  }
} else {
  window.onmessage = function (event) {
    const [type, ...args] = event.data.pluginMessage
    for (const id in eventHandlers) {
      const { eventName, eventHandler } = eventHandlers[id]
      if (eventName === type) {
        eventHandler.apply(null, args)
      }
    }
  }
}
