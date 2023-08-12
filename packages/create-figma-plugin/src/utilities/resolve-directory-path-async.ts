import { join } from 'node:path'

import { pathExists } from 'path-exists'

export async function resolveDirectoryPathAsync(
  directoryName: string
): Promise<string> {
  let result = join(process.cwd(), directoryName)
  let suffix = 2
  while ((await pathExists(result)) === true) {
    result = join(process.cwd(), `${directoryName}-${suffix}`)
    suffix += 1
  }
  return result
}
