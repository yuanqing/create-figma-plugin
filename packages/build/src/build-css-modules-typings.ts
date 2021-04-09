import { constants } from '@create-figma-plugin/common'
import * as execa from 'execa'
import * as findUp from 'find-up'
import { join } from 'path'

export async function buildCssModulesTypings(): Promise<void> {
  const tcm = await findUp(join('node_modules', '.bin', 'tcm'))
  if (typeof tcm === 'undefined') {
    throw new Error('Cannot find `tcm`')
  }
  await execa(tcm, ['--camelCase', constants.src.directory])
}
