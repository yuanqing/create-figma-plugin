const commands = __REQUIRES__
const command = commands[figma.command]

const ui = `
  <div id="create-figma-plugin"></div>
  <script>
    const ui = ${__html__}
    ui['${figma.command}']()
  </script>
`

function showUI (options) {
  figma.showUI(ui, options)
}

function onMessage (callback) {
  figma.ui.onmessage = callback
}

const postMessage = figma.ui.postMessage

command(figma, showUI, onMessage, postMessage)
