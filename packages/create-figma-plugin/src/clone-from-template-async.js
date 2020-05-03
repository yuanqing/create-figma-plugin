import degit from 'degit'
import { copy, ensureDir, exists, move } from 'fs-extra'
import { join, resolve } from 'path'

const gitHubRepositoryRegex = /[\w-]+\/[\w-]+/

export async function cloneFromTemplateAsync (pluginDirectoryPath, template) {
  const templateDirectory = resolve(
    __dirname,
    '..',
    'plugin-templates',
    template
  )
  if ((await exists(templateDirectory)) === true) {
    await ensureDir(pluginDirectoryPath)
    await copy(templateDirectory, pluginDirectoryPath)
    const npmIgnoreFile = join(pluginDirectoryPath, '.npmignore')
    if ((await exists(npmIgnoreFile)) === true) {
      // When running via npm/npx, the .gitignore file is renamed to .npmignore,
      // so we need to rename it back
      const gitIgnoreFile = join(pluginDirectoryPath, '.gitignore')
      await move(npmIgnoreFile, gitIgnoreFile)
    }
    return Promise.resolve()
  }
  if (gitHubRepositoryRegex.test(template) === false) {
    return new Error('Invalid GitHub repository')
  }
  return degit(template).clone(pluginDirectoryPath)
}
