const ui = `
  <div id="create-figma-plugin"></div>
  <script>
    const ui = ${__html__}
    ui.default()['${figma.command}']()
  </script>
`

function showUI (options) {
  figma.showUI(ui, options)
}

function onMessage (callback) {
  figma.ui.onmessage = callback
}

const postMessage = figma.ui.postMessage

const command = __requires__[figma.command]
command(figma, showUI, onMessage, postMessage)
