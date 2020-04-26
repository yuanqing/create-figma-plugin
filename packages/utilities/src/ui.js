/* global __html__ */

const CLOSING_SLASH = '/'

export function showUI ({ width, height }, data = {}) {
  if (typeof __html__ === 'undefined') {
    throw new Error('No UI defined')
  }
  const html = `
    <div id="create-figma-plugin"></div>
    <script>
      const __COMMAND__ = '${figma.command}';
      const __DATA__ = ${JSON.stringify(data)};
      ${__html__}
    <${CLOSING_SLASH}script>
  `
  figma.showUI(html, { width, height })
}
