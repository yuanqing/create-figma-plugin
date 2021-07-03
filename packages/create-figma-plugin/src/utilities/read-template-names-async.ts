import globby from 'globby'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function readPluginTemplateNamesAsync(): Promise<Array<string>> {
  const pluginTemplatesDirectory = resolve(
    __dirname,
    '..',
    '..',
    'plugin-templates'
  )
  const pluginTemplateNames = await globby('*', {
    cwd: pluginTemplatesDirectory,
    onlyDirectories: true
  })
  return pluginTemplateNames
}
