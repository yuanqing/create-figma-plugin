import { constants } from '@create-figma-plugin/common'
import execa from 'execa'
import findUp from 'find-up'
import { join } from 'path'

export async function buildCssModulesTypingsAsync(): Promise<void> {
  const tcm = await findUp(join('node_modules', '.bin', 'tcm'))
  if (typeof tcm === 'undefined') {
    throw new Error('Cannot find `tcm`')
  }
  await execa(tcm, [constants.src.directory])
}
