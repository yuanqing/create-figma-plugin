import fs from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { pathExists } from 'path-exists'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function copyTemplateAsync(
  templateName: string,
  pluginDirectoryPath: string,
  exclude?: string
): Promise<void> {
  const templateDirectory = resolve(
    __dirname,
    '..',
    '..',
    'templates',
    templateName
  )
  if ((await pathExists(pluginDirectoryPath)) === false) {
    await fs.mkdir(pluginDirectoryPath, { mode: 0o2775 })
  }
  const excludes = exclude?.split(',') || []
  await fs.cp(templateDirectory, pluginDirectoryPath, {
    filter: (source) => {
      // Skip the source file if it is in the excludes list
      return !excludes?.some((file) => source.includes(file))
    },
    recursive: true
  })
  const gitIgnoreFilePath = join(pluginDirectoryPath, 'gitignore')
  if ((await pathExists(gitIgnoreFilePath)) === true) {
    const newFilePath = join(pluginDirectoryPath, '.gitignore')
    await fs.rename(gitIgnoreFilePath, newFilePath)
  }
}
