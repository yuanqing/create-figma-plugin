/* global __COMMAND__, __html__, __requires__, __REQUIRES__, figma */

__REQUIRES__ // eslint-disable-line

const options = {
  showUI: function (showUiOptions) {
    const html = `<div id="create-figma-plugin"></div><script>eval(\`${__html__}\`);window.__ui__.default()[${__COMMAND__}]();</script>`
    figma.showUI(html, showUiOptions)
  },
  onMessage: function (callback) {
    figma.ui.onmessage = callback
  },
  postMessage: figma.ui.postMessage
}

const command = __requires__[__COMMAND__]
command(figma, options)
