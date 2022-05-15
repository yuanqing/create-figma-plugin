import fs from 'fs-extra'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main() {
  try {
    const themeCssFilePath = join(
      resolve(__dirname, '..', 'src'),
      'css',
      'theme.css'
    )
    const colors = await parseIconColorsAsync(themeCssFilePath)
    for (const color of colors) {
      console.log(`| '${color}'`) // eslint-disable-line no-console
    }
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function parseIconColorsAsync(
  themeCssFilePath: string
): Promise<Array<string>> {
  const content = await fs.readFile(themeCssFilePath, 'utf8')
  const matches = content.match(/\{([^}]+)\}/m)
  if (matches === null) {
    throw new Error('x')
  }
  const lines = matches[1].trim().split(/\n/g)
  const result: Array<string> = []
  for (const line of lines) {
    const matches = line.trim().match(/--figma-color-icon-([^:]+):/)
    if (matches === null) {
      continue
    }
    result.push(matches[1])
  }
  return result.sort()
}
