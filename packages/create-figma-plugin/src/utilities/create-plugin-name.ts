import { titleCase } from 'title-case'

export function createPluginName(pluginDirectoryName: string): string {
  return titleCase(
    pluginDirectoryName.replace(/^fig(?:ma|jam)-/, '').replace(/-/g, ' ')
  )
}
