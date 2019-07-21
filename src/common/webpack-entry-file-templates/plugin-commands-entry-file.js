/* global __html__, __requires__, figma */

const options = {
  showUI: function (showUiOptions) {
    const html = `
      <div id="create-figma-plugin"></div>
      <script>
        const ui = ${__html__}
        ui.default()['${figma.command}']()
      </script>
    `
    figma.showUI(html, showUiOptions)
  },
  onMessage: function (callback) {
    figma.ui.onmessage = callback
  },
  postMessage: figma.ui.postMessage
}

const command = __requires__[figma.command]
command(figma, options)
