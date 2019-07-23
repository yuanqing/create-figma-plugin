/* global __html__, figma */

const html = [
  `<div id="create-figma-plugin"></div>`,
  `<script>this.__command__='${this.__command__}';</script>`,
  `<script>${__html__}</script>`
].join('')

const options = {
  showUI: function (options) {
    figma.showUI(html, options)
  },
  onMessage: function (callback) {
    figma.ui.onmessage = callback
  },
  postMessage: figma.ui.postMessage
}

const command = this.__requires__[this.__command__]
command(figma, options)
