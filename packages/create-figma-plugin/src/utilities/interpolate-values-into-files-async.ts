import fs from 'fs-extra'
import globby from 'globby'
import isUtf8 from 'is-utf8'
import mustache from 'mustache'
import { join } from 'path'

import { CreateFigmaPluginVersions } from '../types/create-figma-plugin-versions.js'
import { Settings } from '../types/settings.js'

export async function interpolateValuesIntoFilesAsync(
  directory: string,
  values: Settings & {
    versions: CreateFigmaPluginVersions
  }
): Promise<void> {
  const filePaths = await globby('**/*', {
    cwd: directory,
    dot: true
  })
  await Promise.all(
    filePaths.map(async function (filePath): Promise<void> {
      const absolutePath = join(directory, filePath)
      const buffer = await fs.readFile(absolutePath)
      const fileContents = isUtf8(buffer)
        ? mustache.render(buffer.toString(), values)
        : buffer
      await fs.outputFile(absolutePath, fileContents)
    })
  )
}
