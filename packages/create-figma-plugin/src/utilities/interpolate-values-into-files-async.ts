import { outputFile, readFile } from 'fs-extra'
import globby from 'globby'
import mustache from 'mustache'
import { join } from 'path'

import { CreateFigmaPluginVersions } from '../types/create-figma-plugin-versions'
import { Settings } from '../types/settings'

const isUtf8 = require('is-utf8')

export async function interpolateValuesIntoFilesAsync(
  directory: string,
  values: Settings & {
    createFigmaPluginVersions: CreateFigmaPluginVersions
  }
): Promise<void> {
  const filePaths = await globby('**/*', {
    cwd: directory,
    dot: true
  })
  await Promise.all(
    filePaths.map(async function (filePath): Promise<void> {
      const absolutePath = join(directory, filePath)
      const buffer = await readFile(absolutePath)
      const fileContents = isUtf8(buffer)
        ? mustache.render(buffer.toString(), values)
        : buffer
      await outputFile(absolutePath, fileContents)
    })
  )
}
