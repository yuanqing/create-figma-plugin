/* global __html__, figma */

export function showUI (width, height, data = {}) {
  if (typeof __html__ === 'undefined') {
    throw new Error(
      `UI not defined for the command corresponding to \`${
        global.__command__
      }\``
    )
  }
  /* eslint-disable no-useless-escape */
  const html = `
    <style>body { margin: 0; }</style>
    <div id="create-figma-plugin"></div>
    <script>
      window.__data__ = ${JSON.stringify(data)};
      window.__command__ = '${global.__command__}';
      ${__html__}
    <\/script>
  `
  /* eslint-enable no-useless-escape */
  figma.showUI(html, { width, height })
}
