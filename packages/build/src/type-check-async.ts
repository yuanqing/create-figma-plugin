import * as execa from 'execa'
import * as findUp from 'find-up'
import * as globby from 'globby'
import { join } from 'path'

const tscCliArgs = [
  '--esModuleInterop',
  '--isolatedModules',
  '--jsx react',
  '--jsxFactory h',
  '--noEmit',
  '--pretty',
  '--resolveJsonModule',
  '--strict',
  '--typeRoots ./node_modules/@figma,./node_modules/@types'
]

export async function typeCheckAsync(): Promise<void> {
  const tsc = await findUp(join('node_modules', '.bin', 'tsc'))
  if (typeof tsc === 'undefined') {
    throw new Error('Cannot find `tsc`')
  }
  const files = await globby(['./**/*.{ts,tsx}', '!node_modules'])
  if (files.length === 0) {
    throw new Error('TypeScript error\nNo TypeScript files')
  }
  try {
    await execa.command(`${tsc} ${files.join(' ')} ${tscCliArgs.join(' ')}`)
  } catch (error) {
    const index = error.message.indexOf('\n')
    if (index === -1) {
      throw error
    }
    throw new Error(`TypeScript error\n${error.message.substring(index + 1)}`) // Drop first line from execa
  }
}
