/* eslint no-useless-escape: 0 */
/* global __html__, command, figma */

export function showUi ({ width, height, data = {} }) {
  if (typeof __html__ === 'undefined') {
    throw new Error(
      `UI not defined for the command corresponding to \`${command}\``
    )
  }
  const html = `
    <style>body { margin: 0; }</style>
    <div id="create-figma-plugin"></div>
    <script>
      window.__data__ = ${JSON.stringify(data)};
      ${__html__}
    <\/script>
  `
  figma.showUI(html, { width, height })
}
