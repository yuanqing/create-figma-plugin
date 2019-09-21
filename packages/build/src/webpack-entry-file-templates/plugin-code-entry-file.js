/* global __command__, __html__, __requires__, figma */

const options = {
  showUI: function (options) {
    if (typeof __html__ === 'undefined') {
      throw new Error(
        `UI not defined for the command corresponding to \`${__command__}\``
      )
    }
    const html = `
      <div id="create-figma-plugin"></div>
      <script>window.__command__='${__command__}';</script>
      <script>${__html__}</script>
    `
    figma.showUI(html, options)
  },
  onMessage: function (callback) {
    figma.ui.onmessage = callback
  },
  postMessage: figma.ui.postMessage
}

const command = __requires__[__command__]
command(figma, options)
