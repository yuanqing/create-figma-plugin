import * as execa from 'execa'
import * as findUp from 'find-up'
import { pathExists } from 'fs-extra'
import { join } from 'path'

export async function typeCheckAsync(): Promise<void> {
  const tsc = await findUp(join('node_modules', '.bin', 'tsc'))
  if (typeof tsc === 'undefined') {
    throw new Error('Cannot find `tsc`')
  }
  if ((await pathExists('tsconfig.json')) === false) {
    throw new Error('Need a tsconfig.json')
  }
  try {
    await execa.command(`${tsc} --noEmit --project tsconfig.json`)
  } catch (error) {
    const index = error.message.indexOf('\n')
    if (index === -1) {
      throw error
    }
    throw new Error(`TypeScript error\n${error.message.substring(index + 1)}`) // Drop first line from execa
  }
}
