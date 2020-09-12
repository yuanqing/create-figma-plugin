import { constants } from '@create-figma-plugin/common'
import * as execa from 'execa'

export async function buildScssModulesTypings(): Promise<void> {
  const pattern = `${constants.src.directory}/**/*.{css,scss}`
  await execa('./node_modules/.bin/tsm', [pattern, '--implementation', 'sass'])
}
