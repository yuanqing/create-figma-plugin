import fs from 'fs-extra'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const DEFAULT_SUFFIX = 'default'

const TYPE_NAMES: Record<string, string> = {
  bg: 'BackgroundColor',
  border: 'BorderColor',
  icon: 'IconColor',
  text: 'TextColor'
}

async function main() {
  try {
    const themeCssFilePath = join(
      resolve(__dirname, '..', 'src'),
      'css',
      'theme.css'
    )
    const outputFilePath = resolve(__dirname, '..', 'src', 'types', 'colors.ts')
    await generateColorsTypesAsync(themeCssFilePath, outputFilePath)
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function generateColorsTypesAsync(
  themeCssFilePath: string,
  outputFilePath: string
): Promise<void> {
  const colors = await parseIconColorsAsync(themeCssFilePath)
  const fileContents: Array<string> = []
  for (const tokenPrefix in colors) {
    if (typeof TYPE_NAMES[tokenPrefix] === 'undefined') {
      throw new Error('Unrecognized `tokenPrefix`')
    }
    const result: Array<string> = [`export type ${TYPE_NAMES[tokenPrefix]} =`]
    for (const color of colors[tokenPrefix]) {
      result.push(`  | '${color}'`)
    }
    fileContents.push(`${result.join('\n')}`)
  }
  await fs.writeFile(outputFilePath, `${fileContents.join('\n\n')}\n`)
}

async function parseIconColorsAsync(
  themeCssFilePath: string
): Promise<Record<string, Array<string>>> {
  const content = await fs.readFile(themeCssFilePath, 'utf8')
  const matches = content.match(/\{([^}]+)\}/m)
  if (matches === null) {
    throw new Error('`match` is `null`')
  }
  const lines = matches[1].trim().split(/\n/g)
  const cssVariableRegex = /--figma-color-([^-]+)(?:-([^:]+))?:/
  const result: Record<string, Array<string>> = {}
  for (const line of lines) {
    const matches = line.trim().match(cssVariableRegex)
    if (matches === null) {
      continue
    }
    const prefix = matches[1]
    const suffix =
      typeof matches[2] === 'undefined' ? DEFAULT_SUFFIX : matches[2]
    if (typeof result[prefix] === 'undefined') {
      result[prefix] = []
    }
    result[prefix].push(suffix)
  }
  for (const type in result) {
    result[type].sort()
  }
  return result
}
