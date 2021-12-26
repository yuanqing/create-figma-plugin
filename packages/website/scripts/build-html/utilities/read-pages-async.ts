import fs from 'fs-extra'
import { globby } from 'globby'
import grayMatter from 'gray-matter'
import { Root } from 'mdast'
import { toc } from 'mdast-util-toc'
import path from 'path'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { Plugin, unified } from 'unified'

import { Page } from './types.js'

export async function readPagesAsync(
  globPatterns: Array<string>,
  options: {
    urlPrefix: string
  }
): Promise<Array<Page>> {
  const { urlPrefix } = options
  const filePaths = await globby(globPatterns)
  const result: Array<Page> = []
  for (const filePath of filePaths) {
    const fileContents = await fs.readFile(filePath)
    const parsed = grayMatter(fileContents)
    const id = path.basename(filePath, '.md')
    const { order, title } = parsed.data
    const content: Array<string> = []
    content.push(parsed.content.trim())
    result.push({
      content: parsed.content.trim(),
      metadata: {
        id,
        order,
        title,
        url: order === 1 ? urlPrefix : `${urlPrefix}${id}/`
      },
      toc: await createMarkdownTocAsync(parsed.content)
    })
  }
  return result.sort(function (x: Page, y: Page): number {
    return x.metadata.order - y.metadata.order
  })
}

async function createMarkdownTocAsync(content: string): Promise<string> {
  const processor = unified()
  processor.use(remarkParse)
  processor.use(remarkExtractToc)
  processor.use(remarkStringify)
  const result = await processor.process(content.replace(/^# [^\n]+$/gm, ''))
  return result
    .toString()
    .replace(
      /\*   \[`([^`]+)`]\(#([^)]+)\)/g,
      function (_: string, text: string, url: string) {
        const matches = text.match(/^[^<(]+/)
        const result = matches === null ? text : matches[0]
        return `*  [\`${result}\`](#${url})`
      }
    )
}

const remarkExtractToc: Plugin<[], Root> = function () {
  return function (node: Root) {
    const { map } = toc(node, {
      tight: true
    })
    if (map === null) {
      node.children = []
      delete node.position
      return
    }
    node.children = [map]
    delete node.position
    return
  }
}
