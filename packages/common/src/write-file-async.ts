import fs from 'node:fs/promises'

import { dirname } from 'path'
import { pathExists } from 'path-exists'

export async function writeFileAsync(
  outputFilePath: string,
  fileContents: string | Buffer
): Promise<void> {
  const directoryName = dirname(outputFilePath)
  if ((await pathExists(directoryName)) === false) {
    await fs.mkdir(directoryName, { recursive: true })
  }
  await fs.writeFile(outputFilePath, fileContents)
}