import { transformSync } from 'esbuild'
import fs from 'fs-extra'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  try {
    const rootDirectoryPath = resolve(__dirname, '..')
    const tsFilePath = join(
      rootDirectoryPath,
      'src',
      'gumroad',
      'validate-gumroad-license-key-main-async.ts'
    )
    const scriptFilePath = join(
      rootDirectoryPath,
      'src',
      'gumroad',
      'private',
      'script.js'
    )
    await interpolateScriptAsync(tsFilePath, scriptFilePath)
  } catch (error) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function interpolateScriptAsync(
  tsFilePath: string,
  scriptFilePath: string
) {
  const scriptJs = await readScriptAsync(scriptFilePath)
  const ts = await fs.readFile(tsFilePath, 'utf8')
  const result = ts.replace(
    /(const __html__ = )[^\n]+/,
    function (_, match: string) {
      return match + '`<script>' + scriptJs + '</script>`'
    }
  )
  await fs.writeFile(tsFilePath, result)
}

async function readScriptAsync(scriptFilePath: string): Promise<string> {
  const js = await fs.readFile(scriptFilePath, 'utf8')
  const { code } = transformSync(js, { minify: true })
  return code.trim().replace(/__([^_]+)__/g, function (_, match: string) {
    return '${' + match + '}'
  })
}
