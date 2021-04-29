import degit from 'degit'
import { copy, ensureDir, move, pathExists } from 'fs-extra'
import { join, resolve } from 'path'

const gitHubRepositoryRegex = /[\w-]+\/[\w-]+/

export async function cloneFromTemplateAsync(
  pluginDirectoryPath: string,
  template: string
): Promise<void> {
  const templateDirectory = resolve(
    __dirname,
    '..',
    'plugin-templates',
    template
  )
  if ((await pathExists(templateDirectory)) === true) {
    await ensureDir(pluginDirectoryPath, 0o2775)
    await copy(templateDirectory, pluginDirectoryPath)
    const npmIgnoreFile = join(pluginDirectoryPath, '.npmignore')
    if ((await pathExists(npmIgnoreFile)) === true) {
      // When running via npm/npx, the .gitignore file is renamed to .npmignore,
      // so we need to rename it back
      const gitIgnoreFile = join(pluginDirectoryPath, '.gitignore')
      await move(npmIgnoreFile, gitIgnoreFile)
    }
    return
  }
  if (gitHubRepositoryRegex.test(template) === false) {
    throw new Error('Invalid GitHub repository')
  }
  await degit(template, {}).clone(pluginDirectoryPath)
}
