import degit from 'degit'
import fs from 'fs-extra'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const gitHubRepositoryRegex = /[\w-]+\/[\w-]+/

export async function cloneFromTemplateAsync(
  pluginDirectoryPath: string,
  template: string
): Promise<void> {
  const templateDirectory = resolve(
    __dirname,
    '..',
    '..',
    'plugin-templates',
    template
  )
  if ((await fs.pathExists(templateDirectory)) === true) {
    await fs.ensureDir(pluginDirectoryPath, 0o2775)
    await fs.copy(templateDirectory, pluginDirectoryPath)
    const npmIgnoreFile = join(pluginDirectoryPath, '.npmignore')
    if ((await fs.pathExists(npmIgnoreFile)) === true) {
      // When running via npm/npx, the .gitignore file is renamed to .npmignore,
      // so we need to rename it back
      const gitIgnoreFile = join(pluginDirectoryPath, '.gitignore')
      await fs.move(npmIgnoreFile, gitIgnoreFile)
    }
    return
  }
  if (gitHubRepositoryRegex.test(template) === false) {
    throw new Error('Invalid GitHub repository')
  }
  await degit(template, {}).clone(pluginDirectoryPath)
}
