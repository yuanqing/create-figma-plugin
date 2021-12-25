import fs from 'fs-extra'
import { globby } from 'globby'
import { basename, extname } from 'path'

export async function readDataAsync(
  globPatterns: Array<string>
): Promise<Record<string, any>> {
  const filePaths = await globby(globPatterns)
  const result: Record<string, any> = []
  for (const filePath of filePaths) {
    const key = basename(filePath, extname(filePath)).replace(
      /-(\w)/g,
      function (_: string, character: string) {
        return character.toUpperCase()
      }
    )
    if (typeof result[key] !== 'undefined') {
      throw new Error('`result[key]` is not `undefined`')
    }
    result[key] = JSON.parse(await fs.readFile(filePath, 'utf8'))
  }
  return result
}
