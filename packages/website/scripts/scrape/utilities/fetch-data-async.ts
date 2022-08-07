import fetch from 'node-fetch'
import pAll from 'p-all'

export async function fetchDataAsync(
  type: 'plugin' | 'widget'
): Promise<Array<{ id: string; name: string; isMatch: boolean }>> {
  const data: Array<Record<string, any>> = await fetchFeedAsync(type)
  const callbacks = data.map(function (item: Record<string, any>) {
    return function () {
      return fetchVersionsAsync({ id: item.id, type })
    }
  })
  return pAll(callbacks, { concurrency: 20 })
}

async function fetchFeedAsync(
  type: 'plugin' | 'widget'
): Promise<Array<Record<string, any>>> {
  let result: Array<Record<string, any>> = []
  let url = `https://www.figma.com/api/feed/${type}s?sort_by=name&page_size=50`
  while (typeof url !== 'undefined') {
    const response = await fetch(url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const json: any = await response.json()
    result = result.concat(json.meta.resources)
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
  const version = meta.versions[Object.keys(meta.versions)[0]]
  const isMatch =
    version.manifest.main === 'build/main.js' ||
    version.manifest.ui === 'build/ui.js'
  return {
    id,
    isMatch,
    name: version.name
  }
}
