/* global parent, __requires__ */

const options = {
  onMessage: function (callback) {
    window.onmessage = function (event) {
      callback(event.data.pluginMessage)
    }
  },
  postMessage: function (data) {
    parent.postMessage({ pluginMessage: data }, '*')
  }
}

export default function () {
  const result = {}
  Object.keys(__requires__).forEach(function (key) {
    result[key] = function () {
      __requires__[key](options)
    }
  })
  return result
}
