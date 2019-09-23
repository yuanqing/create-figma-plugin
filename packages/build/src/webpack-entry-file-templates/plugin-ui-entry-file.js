/* global __command__, __data__, __requires__, parent */

const rootNode = document.getElementById('create-figma-plugin')

const options = {
  data: __data__,
  onMessage: function (callback) {
    window.onmessage = function (event) {
      callback(event.data.pluginMessage)
    }
  },
  postMessage: function (data) {
    parent.postMessage({ pluginMessage: data }, '*')
  }
}

__requires__[__command__](rootNode, options)
