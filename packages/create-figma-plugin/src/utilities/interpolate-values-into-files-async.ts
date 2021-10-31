import fs from 'fs-extra'
import { globby } from 'globby'
import isUtf8 from 'is-utf8'
import mustache from 'mustache'
import { join } from 'path'

export async function interpolateValuesIntoFilesAsync(
  directory: string,
  values: Record<string, any>
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
