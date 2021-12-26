import fs from 'fs-extra'
import htmlMinifier from 'html-minifier'
import lodashTemplate from 'lodash.template'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlightJs from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkExternalLinks from 'remark-external-links'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkToRehype from 'remark-rehype'
import { unified } from 'unified'

import { Page } from './types.js'

export async function writeHtmlAsync(options: {
  data: Record<string, any>
  htmlTemplate: string
  outputDirectoryPath: string
  pages: Array<Page>
  urlPrefix: string
  version: string
}): Promise<void> {
  const { data, htmlTemplate, outputDirectoryPath, pages, urlPrefix, version } =
    options
  for (const page of pages) {
    const previousPage = pages.find(function ({
      metadata: { order }
    }: Page): boolean {
      return order === page.metadata.order - 1
    })
    const nextPage = pages.find(function ({
      metadata: { order }
    }: Page): boolean {
      return order === page.metadata.order + 1
    })
    const html = await renderToHtmlAsync({
      data,
      htmlTemplate,
      nextPage: typeof nextPage === 'undefined' ? null : nextPage,
      page,
      pages,
      previousPage: typeof previousPage === 'undefined' ? null : previousPage,
      urlPrefix,
      version
    })
    const outputFilePath =
      page.metadata.order === 1
        ? path.join(outputDirectoryPath, 'index.html')
        : path.join(outputDirectoryPath, page.metadata.id, 'index.html')
    await fs.outputFile(outputFilePath, html)
  }
}

async function renderToHtmlAsync(options: {
  data: Record<string, any>
  htmlTemplate: string
  nextPage: null | Page
  page: Page
  pages: Array<Page>
  previousPage: null | Page
  urlPrefix: string
  version: string
}): Promise<string> {
  const {
    data,
    htmlTemplate,
    pages,
    page,
    previousPage,
    nextPage,
    urlPrefix,
    version
  } = options
  const interpolatedData = {
    ...data,
    getPageUrlById: function (id: string) {
      const result = pages.find(function (page: Page) {
        return page.metadata.id === id
      })
      if (typeof result === 'undefined') {
        throw new Error(`Invalid \`id\`: ${id}`)
      }
      return result.metadata.url
    },
    metadata: page.metadata,
    nextPage,
    pages,
    previousPage,
    urlPrefix,
    version
  }
  const content = await renderMarkdownToHtmlAsync(
    lodashTemplate(page.content, { interpolate: /<%=([\s\S]+?)%>/g })(
      interpolatedData
    )
  )
  const toc =
    page.toc === null ? null : await renderMarkdownToHtmlAsync(page.toc)
  const html = lodashTemplate(htmlTemplate)({
    ...interpolatedData,
    content,
    toc
  })
  return htmlMinifier.minify(html, {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeTagWhitespace: true
  })
}

async function renderMarkdownToHtmlAsync(content: string): Promise<string> {
  const processor = unified()
  processor.use(remarkParse)
  processor.use(remarkGfm)
  processor.use(remarkExternalLinks, { rel: false, target: '_blank' })
  processor.use(remarkToRehype, {
    allowDangerousHtml: true
  })
  processor.use(rehypeSlug)
  processor.use(rehypeAutolinkHeadings, {
    behavior: 'append',
    content: {
      type: 'text',
      value: '#'
    },
    properties: {
      ariaHidden: true,
      class: 'content__header-link',
      tabIndex: -1
    },
    test: ['h2', 'h3', 'h4', 'h5', 'h6']
  })
  processor.use(rehypeHighlightJs, {
    subset: false
  })
  processor.use(rehypeStringify, {
    allowDangerousHtml: true
  })
  const result = await processor.process(content)
  return result.toString()
}
