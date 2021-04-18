import type { JsonObject } from './types'

/**
 * Renders the UI correponding to the command in a modal within the Figma UI.
 * Specify the width, height, and visibility of the UI via `options`.
 * Optionally pass on some initialising `data` from the command to the UI.
 *
 * See the [recipe for adding a UI to a plugin command](#adding-a-ui-to-a-plugin-command).
 *
 * @category UI
 */
export function showUI<T extends JsonObject>(
  options: ShowUIOptions,
  data?: T
): void {
  if (typeof __html__ === 'undefined') {
    throw new Error('No UI defined')
  }
  const html = `<div id="create-figma-plugin"></div><script>const __FIGMA_COMMAND__='${
    figma.command
  }';const __SHOW_UI_DATA__=${JSON.stringify(
    typeof data === 'undefined' ? {} : data
  )};${__html__}</script>`
  figma.showUI(html, options)
}
