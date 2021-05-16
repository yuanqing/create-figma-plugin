import { constants } from '@create-figma-plugin/common'
import { exec, ExecException } from 'child_process'
import findUp from 'find-up'
import { join } from 'path'

export async function buildCssModulesTypingsAsync(): Promise<void> {
  const tcm = await findUp(join('node_modules', '.bin', 'tcm'))
  if (typeof tcm === 'undefined') {
    throw new Error('Cannot find `tcm`')
  }
  return new Promise(function (resolve, reject) {
    exec(
      `${tcm} ${constants.src.directory}`,
      function (error: null | ExecException) {
        if (error !== null) {
          reject(error.message)
          return
        }
        resolve()
      }
    )
  })
}
