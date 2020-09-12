import { constants } from '@create-figma-plugin/common'
import * as execa from 'execa'
import * as findUp from 'find-up'
import * as globby from 'globby'
import * as path from 'path'

export async function buildScssModulesTypings(): Promise<void> {
  const pattern = `${constants.src.directory}/**/*.{css,scss}`
  const filePaths = await globby(pattern)
  if (filePaths.length === 0) {
    return
  }
  const tsm = await findUp(path.join('node_modules', '.bin', 'tsm'))
  if (typeof tsm === 'undefined') {
    throw new Error('Cannot find `tsm`')
  }
  await execa(tsm, [pattern, '--implementation', 'sass'])
}
