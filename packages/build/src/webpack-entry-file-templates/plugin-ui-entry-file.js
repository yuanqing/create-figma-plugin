/* global parent */

const rootNode = document.getElementById('create-figma-plugin')

const self = this
const options = {
  onMessage: function (callback) {
    self.onmessage = function (event) {
      callback(event.data.pluginMessage)
    }
  },
  postMessage: function (data) {
    parent.postMessage({ pluginMessage: data }, '*')
  }
}

this.__requires__[this.__command__](rootNode, options)
