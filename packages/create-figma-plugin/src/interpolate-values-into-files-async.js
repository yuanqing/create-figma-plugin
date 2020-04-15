import { readFile, outputFile } from 'fs-extra'
import globby from 'globby'
import { join } from 'path'
import isUtf8 from 'is-utf8'
import mustache from 'mustache'
import packageJson from '../package.json'

mustache.escape = function (text) {
  return text
}

export async function interpolateValuesIntoFilesAsync (directory, values) {
  const filePaths = await globby('**/*', {
    cwd: directory,
    dot: true
  })
  return Promise.all(
    filePaths.map(async function (filePath) {
      const absolutePath = join(directory, filePath)
      const buffer = await readFile(absolutePath)
      const fileContents = isUtf8(buffer)
        ? interpolate(buffer.toString(), {
            CREATE_FIGMA_PLUGIN_VERSION: packageJson.version,
            ...values
          })
        : buffer
      return outputFile(absolutePath, fileContents)
    })
  )
}

function interpolate (string, data) {
  return mustache.render(string, data)
}
