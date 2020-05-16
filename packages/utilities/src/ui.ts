/* global __html__ */

const CLOSING_SLASH = '/'

export function showUI (options: ShowUIOptions, data: any = {}): void {
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
  figma.showUI(html, options)
}
