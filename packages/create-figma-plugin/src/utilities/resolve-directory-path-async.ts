import { join } from "path"
import fs from "fs-extra"

export async function resolveDirectoryPathAsync(name: string) : Promise<string> {
  let directoryPath = join(process.cwd(), name)
  let suffix = 2
  while ((await fs.pathExists(directoryPath)) === true) {
    directoryPath = join(process.cwd(), `${name}-${suffix}`)
    suffix += 1
  }
  return directoryPath
}
