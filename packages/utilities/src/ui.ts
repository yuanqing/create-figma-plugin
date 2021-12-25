/**
 * Renders the UI correponding to the command in a modal within the Figma UI.
 * Specify the modal’s `width`, `height`, `title`, and whether it is `visible`
 * via [`options`](https://figma.com/plugin-docs/api/properties/figma-showui/).
 * Optionally pass on some initialising `data` from the command to the UI.
 *
 * Learn how to [add a UI to your plugin/widget](<%- getPageUrlById('ui') %>).
 *
 * @category UI
 */
export function showUI<Data extends Record<string, unknown>>(
  options: ShowUIOptions,
  data?: Data
): void {
  if (typeof __html__ === 'undefined') {
    throw new Error('No UI defined')
  }
  const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${
    figma.editorType
  }');const __FIGMA_COMMAND__='${
    typeof figma.command === 'undefined' ? '' : figma.command
  }';const __SHOW_UI_DATA__=${JSON.stringify(
    typeof data === 'undefined' ? {} : data
  )};${__html__}</script>`
  figma.showUI(html, options)
}
