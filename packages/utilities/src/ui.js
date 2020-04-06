/* global __html__ */

const CLOSING_SLASH = '/'

export function showUI ({ width, height }, data = {}) {
  if (typeof __html__ === 'undefined') {
    throw new Error(
      `UI not defined for the command corresponding to \`${global.__command__}\``
    )
  }
  const html = `
    <div id="create-figma-plugin"></div>
    <script>
      window.__command__ = '${global.__command__}';
      window.__data__ = ${JSON.stringify(data)};
      ${__html__}
    <${CLOSING_SLASH}script>
  `
  figma.showUI(html, { width, height })
}
