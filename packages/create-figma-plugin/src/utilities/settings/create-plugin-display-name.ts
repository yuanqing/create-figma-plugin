import { titleCase } from 'title-case'

export function createPluginDisplayName(name: string): string {
  return titleCase(name.replace(/^figma-/, '').replace(/-/g, ' '))
}
