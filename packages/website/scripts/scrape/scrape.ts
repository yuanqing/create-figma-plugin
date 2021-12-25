import fs from 'fs-extra'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { fetchDataAsync } from './utilities/fetch-data-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  try {
    const args = process.argv.slice(2)
    if (args[0] !== 'plugin' && args[0] !== 'widget') {
      throw new Error('First argument must be either `plugin` or `widget`')
    }
    const type: 'plugin' | 'widget' = args[0]
    const validIdsFilePath = args[1]
    const validIds: Array<string> = JSON.parse(
      await fs.readFile(validIdsFilePath, 'utf8')
    ).map(function (item: { id: string }) {
      return item.id
    })
    const invalidIdsFilePath = resolve(__dirname, 'invalid-ids.json')
    const invalidIds: Array<string> = JSON.parse(
      await fs.readFile(invalidIdsFilePath, 'utf8')
    )
    const data: Array<Record<string, any>> = await fetchDataAsync(type)
    for (const { versions, id } of data) {
      const manifest = Object.values(versions as Record<string, any>)[0]
        .manifest
      if (manifest.main !== 'build/main.js' && manifest.ui !== 'build/ui.js') {
        continue
      }
      if (validIds.indexOf(id) !== -1 || invalidIds.indexOf(id) !== -1) {
        continue
      }
      console.log(`https://figma.com/community/${type}/${id}`) // eslint-disable-line no-console
    }
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()
