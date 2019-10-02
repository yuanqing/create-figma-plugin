let count = 0
const listeners = {}

export function addUiEventListener (eventName, callback) {
  const id = count++
  listeners[id] = { eventName, callback }
  return function () {
    delete listeners[id]
  }
}

export function triggerCommandEvent (...args) {
  window.parent.postMessage(
    {
      pluginMessage: args
    },
    '*'
  )
}

if (typeof window !== 'undefined') {
  window.onmessage = function (event) {
    const [type, ...args] = event.data.pluginMessage
    for (const id of Object.keys(listeners)) {
      const { eventName, callback } = listeners[id]
      if (eventName === type) {
        callback.apply(null, args)
      }
    }
  }
  addUiEventListener('FETCH_REQUEST', async function (id, url, options) {
    try {
      const response = await window.fetch(url, options)
      const result = await response.json()
      triggerCommandEvent('FETCH_RESULT', null, id, result)
    } catch (error) {
      triggerCommandEvent('FETCH_RESULT', error, id)
    }
  })
}
