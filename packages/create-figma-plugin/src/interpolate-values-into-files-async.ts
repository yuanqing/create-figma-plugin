import { outputFile, readFile } from 'fs-extra'
import * as globby from 'globby'
import * as mustache from 'mustache'
import { join } from 'path'

import { Settings } from './types/settings'
const isUtf8 = require('is-utf8')

export async function interpolateValuesIntoFilesAsync(
  directory: string,
  values: Settings
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

function interpolate(string: string, values: Settings): string {
  return mustache.render(string, values)
}
