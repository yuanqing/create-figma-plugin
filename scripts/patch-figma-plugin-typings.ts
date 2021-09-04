import fs from 'fs-extra'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  try {
    const tsFilePath = resolve(
      __dirname,
      '..',
      'node_modules',
      '@figma',
      'plugin-typings',
      'index.d.ts'
    )
    const ts = await fs.readFile(tsFilePath, 'utf8')
    const constConsoleRegex = /const console: Console\n/
    if (constConsoleRegex.test(ts) === false) {
      return
    }
    const result = ts.replace(constConsoleRegex, '')
    await fs.writeFile(tsFilePath, result)
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()
