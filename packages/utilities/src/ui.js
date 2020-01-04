/* global __html__ */

const CLOSING_SLASH = '/'
export function showUI (options, data = {}) {
  if (typeof __html__ === 'undefined') {
    throw new Error(
      `UI not defined for the command corresponding to \`${global.__command__}\``
    )
  }
  const html = `
    <style>body { margin: 0; }</style>
    <div id="create-figma-plugin"></div>
    <script>
      window.__data__ = ${JSON.stringify(data)};
      window.__command__ = '${global.__command__}';
      ${__html__}
    <${CLOSING_SLASH}script>
  `
  figma.showUI(html, options)
}
