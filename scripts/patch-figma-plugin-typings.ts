import fs from 'fs-extra'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const strings = [
  'const console: Console\n',
  'const fetch: (url: string, init?: FetchOptions) => Promise<FetchResponse>\n'
]

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
    let result = await fs.readFile(tsFilePath, 'utf8')
    for (const string of strings) {
      result = result.replace(string, '')
    }
    await fs.writeFile(tsFilePath, result)
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()
