import * as fs from 'fs-extra'
import {
  createCategories,
  parseExportedFunctionsAsync,
  renderCategoriesToMarkdownToc,
  renderCategoryToMarkdown
} from 'generate-ts-docs'
import * as path from 'path'

const rootDirectoryPath = path.resolve(__dirname, '..', '..', '..')
const tsconfigFilePath = path.join(rootDirectoryPath, 'tsconfig.shared.json')
const outputFilePath = path.join(rootDirectoryPath, 'docs', 'utilities.md')

async function main() {
  const lines: Array<string> = []
  const functionsData = await parseExportedFunctionsAsync(['./src/**/*.ts'], {
    tsconfigFilePath
  })
  const categories = createCategories(functionsData)
  lines.push('# Utilities')
  lines.push('')
  lines.push(renderCategoriesToMarkdownToc(categories))
  lines.push('')
  for (const category of categories) {
    lines.push(renderCategoryToMarkdown(category, { headerLevel: 2 }))
  }
  await fs.outputFile(outputFilePath, lines.join('\n').trim())
}
main()
