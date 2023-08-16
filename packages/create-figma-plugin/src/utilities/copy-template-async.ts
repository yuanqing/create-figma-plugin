import fs from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { pathExists } from 'path-exists'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function copyTemplateAsync(
  templateName: string,
  pluginDirectoryPath: string
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
  await fs.cp(templateDirectory, pluginDirectoryPath, { recursive: true })
  const gitIgnoreFilePath = join(pluginDirectoryPath, 'gitignore')
  if ((await pathExists(gitIgnoreFilePath)) === true) {
    const newFilePath = join(pluginDirectoryPath, '.gitignore')
    await fs.rename(gitIgnoreFilePath, newFilePath)
  }
}
