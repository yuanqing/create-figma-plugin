/* global parent */

const self = this

const rootNode = document.getElementById('create-figma-plugin')

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

self.__requires__[self.__command__](rootNode, options)
