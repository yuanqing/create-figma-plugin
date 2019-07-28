import degit from 'degit'
import { copy, ensureDir, exists } from 'fs-extra'
import { resolve } from 'path'

const gitHubRepositoryRegex = /[\w-]+\/[\w-]+/

export async function cloneFromTemplate (pluginDirectoryPath, template) {
  const templateDirectory = resolve(
    __dirname,
    '..',
    'plugin-templates',
    template
  )
  if (await exists(templateDirectory)) {
    await ensureDir(pluginDirectoryPath)
    return copy(templateDirectory, pluginDirectoryPath)
  }
  if (gitHubRepositoryRegex.test(template) === false) {
    return new Error('Invalid GitHub repository')
  }
  return degit(template).clone(pluginDirectoryPath)
}
