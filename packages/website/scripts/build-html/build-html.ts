import fs from 'fs-extra'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { readDataAsync } from './utilities/read-data-async.js'
import { readPagesAsync } from './utilities/read-pages-async.js'
import { writeHtmlAsync } from './utilities/write-html-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  try {
    const urlPrefix = process.argv[2]
    const rootDirectoryPath = resolve(__dirname, '..', '..')
    const dataDirectoryPath = resolve(rootDirectoryPath, 'data')
    const data = await readDataAsync([`${dataDirectoryPath}/*.json`])
    const pagesDirectoryPath = resolve(rootDirectoryPath, 'docs')
    const pages = await readPagesAsync([`${pagesDirectoryPath}/*.md`], {
      urlPrefix
    })
    const templateFilePath = resolve(
      __dirname,
      '..',
      '..',
      'src',
      'html',
      'template.html'
    )
    const htmlTemplate = await fs.readFile(templateFilePath, 'utf8')
    const outputDirectoryPath = resolve(rootDirectoryPath, 'build', urlPrefix)
    await writeHtmlAsync({
      data,
      htmlTemplate,
      outputDirectoryPath,
      pages,
      urlPrefix
    })
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()
