import { outputFile, readFile } from 'fs-extra'
import * as globby from 'globby'
import * as mustache from 'mustache'
import { join } from 'path'

import { CreateFigmaPluginVersions } from './types/create-figma-plugin-versions'
import { Settings } from './types/settings'

const isUtf8 = require('is-utf8')

type Values = Settings & {
  createFigmaPluginVersions: CreateFigmaPluginVersions
}

export async function interpolateValuesIntoFilesAsync(
  directory: string,
  values: Values
): Promise<void> {
  const filePaths = await globby('**/*', {
    cwd: directory,
    dot: true
  })
  await Promise.all(
    filePaths.map(async function (filePath) {
      const absolutePath = join(directory, filePath)
      const buffer = await readFile(absolutePath)
      const fileContents = isUtf8(buffer)
        ? interpolate(buffer.toString(), values)
        : buffer
      return outputFile(absolutePath, fileContents)
    })
  )
}

function interpolate(string: string, values: Values): string {
  return mustache.render(string, values)
}
