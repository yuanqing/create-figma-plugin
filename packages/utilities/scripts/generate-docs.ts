import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { writeFileAsync } from '@create-figma-plugin/common'
import { createCategories, parseExportedFunctionsAsync } from 'generate-ts-docs'

import { renderFunctionDataToMarkdown } from './render-function-data-to-markdown.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  try {
    const globPatterns = [
      'src/**/*.ts',
      '!src/mixed-values.ts',
      '!src/**/private/**/*'
    ]
    const tsconfigFilePath = resolve(__dirname, '..', 'tsconfig.json')
    const args = process.argv.slice(2)
    if (args.length === 0) {
      throw new Error('Need an output file path')
    }
    const outputFilePath = args[0]
    await generateDocsAsync(globPatterns, tsconfigFilePath, outputFilePath)
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function generateDocsAsync(
  globPatterns: Array<string>,
  tsconfigFilePath: string,
  outputFilePath: string
): Promise<void> {
  const lines: Array<string> = []
  const functionsData = await parseExportedFunctionsAsync(globPatterns, {
    tsconfigFilePath
  })
  const categories = createCategories(functionsData)
  lines.push('---')
  lines.push('{')
  lines.push('  "order": 5,')
  lines.push('  "title": "Utilities"')
  lines.push('}')
  lines.push('---')
  lines.push(
    '<!-- THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. -->'
  )
  lines.push('')
  lines.push('# Utilities')
  lines.push('')
  lines.push('## Overview')
  lines.push('')
  lines.push(
    '`@create-figma-plugin/utilities` is a library of utility functions for common Figma/FigJam plugin/widget operations. It is meant to complement the Figma/FigJam [plugin API](https://figma.com/plugin-docs/api/api-reference/) and [widget API](https://figma.com/widget-docs/api/api-reference/).'
  )
  lines.push('')
  lines.push('To install:')
  lines.push('')
  lines.push('```sh')
  lines.push('$ npm install @create-figma-plugin/utilities')
  lines.push('```')
  lines.push('')
  lines.push(
    'When used with the `build-figma-plugin` CLI, only the functions explicitly imported by your plugin/widget will be included in the generated JavaScript bundle(s).'
  )
  lines.push('')
  for (const category of categories) {
    lines.push(`## ${category.name}`)
    lines.push('')
    lines.push('```ts')
    if (category.functionsData.length === 1) {
      lines.push(
        `import { ${category.functionsData[0].name} } from '@create-figma-plugin/utilities'`
      )
    } else {
      lines.push('import {')
      const functionNames: Array<string> = []
      for (const { name } of category.functionsData) {
        functionNames.push(`  ${name}`)
      }
      lines.push(functionNames.join(',\n'))
      lines.push("} from '@create-figma-plugin/utilities'")
    }
    lines.push('```')
    lines.push('')
    for (const functionData of category.functionsData) {
      lines.push(
        renderFunctionDataToMarkdown(functionData, {
          headerLevel: 3
        })
      )
    }
  }
  await writeFileAsync(outputFilePath, lines.join('\n').trim())
}
