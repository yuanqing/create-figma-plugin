/* global figma */

const isCommand = typeof window === 'undefined'

const listeners = {}

let count = 0
export function addEventListener (eventName, callback) {
  const id = count++
  listeners[id] = { eventName, callback }
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
      const { eventName, callback } = listeners[id]
      if (eventName === type) {
        callback.apply(null, args)
      }
    }
  }
} else {
  window.onmessage = function (event) {
    const [type, ...args] = event.data.pluginMessage
    for (const id of Object.keys(listeners)) {
      const { eventName, callback } = listeners[id]
      if (eventName === type) {
        callback.apply(null, args)
      }
    }
  }
  addEventListener('FETCH_REQUEST', async function (id, url, options) {
    try {
      const response = await window.fetch(url, options)
      const result = await response.json()
      triggerEvent('FETCH_RESULT', null, id, result)
    } catch (error) {
      triggerEvent('FETCH_RESULT', error, id)
    }
  })
}
