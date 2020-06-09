module.exports = {
  exclude: ['./src/index.ts'],
  excludeNotExported: true,
  hideBreadcrumbs: true,
  inputFiles: ['./src'],
  mode: 'modules',
  out: '../../docs/utilities',
  plugin: 'typedoc-plugin-markdown',
  readme: 'none'
}
