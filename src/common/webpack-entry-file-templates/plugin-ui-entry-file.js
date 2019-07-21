function onMessage (callback) {
  window.onmessage = function (event) {
    callback(event.data.pluginMessage)
  }
}

function postMessage (data) {
  parent.postMessage({ pluginMessage: data }, '*')
}

const result = {}
Object.keys(__requires__).forEach(function(key) {
  result[key] = function () {
    __requires__[key](onMessage, postMessage)
  }
})

module.exports = result
