import * as fs from 'fs-extra'
import {
  groupFunctionsDataByCategory,
  parseExportedFunctionsAsync,
  stringifyCategoryToMarkdown
} from 'generate-ts-docs'
import * as path from 'path'

const markdownToc = require('markdown-toc')

const monorepoRootDirectoryPath = path.resolve(__dirname, '..', '..', '..')

async function main() {
  const apiDocsMarkdown = await createApiDocsMarkdownAsync()
  const markdownToc = createMarkdownToc(apiDocsMarkdown)
  const fileContent = ['# Utilities', markdownToc, apiDocsMarkdown].join('\n\n')
  await fs.outputFile(
    path.join(monorepoRootDirectoryPath, 'docs', 'utilities.md'),
    fileContent
  )
}
main()

async function createApiDocsMarkdownAsync(): Promise<string> {
  const functionsData = await parseExportedFunctionsAsync(['./src/**/*.ts'], {
    tsconfigFilePath: path.join(
      monorepoRootDirectoryPath,
      'tsconfig.shared.json'
    )
  })
  const categories = groupFunctionsDataByCategory(functionsData)
  const result: Array<string> = []
  for (const category of categories) {
    result.push(stringifyCategoryToMarkdown(category))
  }
  return result.join('')
}

function createMarkdownToc(markdown: string) {
  const { json } = markdownToc(markdown)
  const result: Array<string> = []
  for (const { content, slug, lvl } of json) {
    if (lvl === 2) {
      result.push(`- [**${content}**](#${slug})`)
    }
    if (lvl === 3) {
      result.push(`  - [${content}](#${slug})`)
    }
  }
  return result.join('\n')
}
