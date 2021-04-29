const titleCase = require('titlecase')

export function createPluginDisplayName(name: string): string {
  return titleCase(name.replace(/^figma-/, '').replace(/-/g, ' '))
}
