const isCommand = typeof window === 'undefined'

const eventHandlers: {
  [id: string]: {
    eventName: string
    eventHandler: (...args: Array<any>) => void
  }
} = {}

let currentId = 0

export function on (
  eventName: string,
  eventHandler: (...args: Array<any>) => void
): () => void {
  const id = `${currentId++}`
  eventHandlers[id] = { eventName, eventHandler }
  return function () {
    delete eventHandlers[id]
  }
}

export function once (
  eventName: string,
  eventHandler: (...args: Array<any>) => void
): () => void {
  let done = false
  return on(eventName, function (...args) {
    if (done === true) {
      return
    }
    done = true
    eventHandler.apply(null, args)
  })
}

export const emit: (type: string, ...args: Array<any>) => void =
  isCommand === true
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
  figma.ui.onmessage = function (type: string, ...args: Array<any>): void {
    for (const id in eventHandlers) {
      const { eventName, eventHandler } = eventHandlers[id]
      if (eventName === type) {
        eventHandler.apply(null, args)
      }
    }
  }
} else {
  window.onmessage = function (event: MessageEvent): void {
    const [type, ...args]: [string, Array<any>] = event.data.pluginMessage
    for (const id in eventHandlers) {
      const { eventName, eventHandler } = eventHandlers[id]
      if (eventName === type) {
        eventHandler.apply(null, args)
      }
    }
  }
}
