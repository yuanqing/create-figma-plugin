import { constants } from '@create-figma-plugin/common'
import * as execa from 'execa'
import * as globby from 'globby'

export async function buildScssModulesTypings(): Promise<void> {
  const pattern = `${constants.src.directory}/**/*.{css,scss}`
  const filePaths = await globby(pattern)
  if (filePaths.length === 0) {
    return
  }
  await execa('./node_modules/.bin/tsm', [pattern, '--implementation', 'sass'])
}
