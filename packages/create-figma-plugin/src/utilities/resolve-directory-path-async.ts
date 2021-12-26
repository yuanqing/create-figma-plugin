import fs from 'fs-extra'
import { join } from 'path'

export async function resolveDirectoryPathAsync(
  directoryName: string
): Promise<string> {
  let result = join(process.cwd(), directoryName)
  let suffix = 2
  while ((await fs.pathExists(result)) === true) {
    result = join(process.cwd(), `${directoryName}-${suffix}`)
    suffix += 1
  }
  return result
}
