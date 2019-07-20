const ui = __REQUIRES__

function onMessage (callback) {
  window.onmessage = function (event) {
    callback(event.data.pluginMessage)
  }
}

function postMessage (data) {
  parent.postMessage({ pluginMessage: data }, '*')
}

const result = {}
Object.keys(ui).forEach(function(key) {
  result[key] = function () {
    ui[key](onMessage, postMessage)
  }
})

module.exports = result
