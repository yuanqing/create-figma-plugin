import fetch from 'node-fetch'

export async function fetchDataAsync(
  type: 'plugin' | 'widget'
): Promise<Array<Record<string, any>>> {
  let result: Array<Record<string, any>> = []
  let url = `https://www.figma.com/api/${type}s/browse?sort_by=popular&sort_order=desc&resource_type=${type}s&page_size=50`
  while (typeof url !== 'undefined') {
    const response = await fetch(url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const json = await response.json()
    result = result.concat(json.meta[`${type}s`])
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
