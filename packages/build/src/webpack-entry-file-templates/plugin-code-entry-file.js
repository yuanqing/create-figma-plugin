/* global __html__, figma */

const self = this

const options = {
  showUI: function (options) {
    if (typeof __html__ === 'undefined') {
      throw new Error(
        `UI not defined for the command corresponding to \`${
          self.__command__
        }\``
      )
    }
    const html = [
      `<div id="create-figma-plugin"></div>`,
      `<script>this.__command__='${self.__command__}';</script>`,
      `<script>${__html__}</script>`
    ].join('')
    figma.showUI(html, options)
  },
  onMessage: function (callback) {
    figma.ui.onmessage = callback
  },
  postMessage: figma.ui.postMessage
}

const command = self.__requires__[self.__command__]
command(figma, options)
