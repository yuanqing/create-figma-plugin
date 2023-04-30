import fs from 'fs-extra'
import fetch from 'node-fetch'
import pAll from 'p-all'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const CONCURRENCY = 10

const __dirname = dirname(fileURLToPath(import.meta.url))

const invalidIdsFilePath = join(__dirname, 'invalid-ids.json')
const ignoredIdsFilePath = join(__dirname, 'ignored-ids.json')

async function main(): Promise<void> {
  try {
    const args = process.argv.slice(2)
    if (args[0] !== 'plugin' && args[0] !== 'widget') {
      throw new Error('First argument must be either `plugin` or `widget`')
    }
    const type: 'plugin' | 'widget' = args[0]
    if (typeof args[1] === 'undefined') {
      throw new Error('Need a file path')
    }
    const validIdsFilePath = args[1]
    const maxPages = typeof args[2] === 'undefined' ? -1 : parseInt(args[2])
    const validIds: Array<string> = JSON.parse(
      await fs.readFile(validIdsFilePath, 'utf8')
    ).map(function (item: { id: string }) {
      return item.id
    })
    const invalidIds: Array<string> = JSON.parse(
      await fs.readFile(invalidIdsFilePath, 'utf8')
    )
    const ignoredIds: Array<string> = JSON.parse(
      await fs.readFile(ignoredIdsFilePath, 'utf8')
    )
    const data: Array<Record<string, any>> = await fetchDataAsync({
      maxPages,
      type
    })
    for (const { id, isMatch, name } of data) {
      if (
        isMatch === false ||
        validIds.indexOf(id) !== -1 ||
        invalidIds.indexOf(id) !== -1 ||
        ignoredIds.indexOf(id) !== -1
      ) {
        continue
      }
      console.log(`https://figma.com/community/${type}/${id} - ${name}`) // eslint-disable-line no-console
    }
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

export async function fetchDataAsync(options: {
  type: 'plugin' | 'widget'
  maxPages: number
}): Promise<Array<{ id: string; name: string; isMatch: boolean }>> {
  const { type, maxPages } = options
  const data: Array<Record<string, any>> = await fetchFeedAsync({
    maxPages,
    type
  })
  const callbacks = data.map(function (item: Record<string, any>) {
    return function () {
      return fetchVersionsAsync({ id: item.id, type })
    }
  })
  return pAll(callbacks, { concurrency: CONCURRENCY })
}

async function fetchFeedAsync(options: {
  type: 'plugin' | 'widget'
  maxPages: number
}): Promise<Array<Record<string, any>>> {
  const { type, maxPages } = options
  let result: Array<Record<string, any>> = []
  let url = `/api/feed/${type}s?sort_by=published_at&page_size=100`
  let i = 0
  while (typeof url !== 'undefined') {
    if (maxPages !== -1 && i === maxPages) {
      break
    }
    i += 1
    const response = await fetch(`https://www.figma.com${url}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const json: any = await response.json()
    const resources = json.meta.resources.filter(function (resource: {
      roles: { is_public: boolean }
    }) {
      return resource.roles.is_public === true
    })
    result = result.concat(resources)
    url = json.pagination.next_page
  }
  return deduplicateArray(result)
}

function deduplicateArray(
  data: Array<Record<string, any>>
): Array<Record<string, any>> {
  const result: Array<Record<string, any>> = []
  const ids: Record<string, boolean> = {}
  for (const item of data) {
    const id = item.id
    if (ids[id] !== true) {
      result.push(item)
      ids[id] = true
    }
  }
  return result
}

async function fetchVersionsAsync(options: {
  id: string
  type: string
}): Promise<{ id: string; name: string; isMatch: boolean }> {
  const { id, type } = options
  const response = await fetch(
    `https://www.figma.com/api/${type}s/${id}/versions`,
    {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
  )
  const json: any = await response.json()
  const meta = json.meta[Object.keys(json.meta)[0]]
  const version =
    meta.versions[
      Object.keys(meta.versions).sort(function (a, b) {
        return b.localeCompare(a, [], { numeric: true })
      })[0]
    ]
  const isMatch =
    version.manifest.main === 'build/main.js' ||
    version.manifest.ui === 'build/ui.js'
  return {
    id,
    isMatch,
    name: version.name
  }
}
