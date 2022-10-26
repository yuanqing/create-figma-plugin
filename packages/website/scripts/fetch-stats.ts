import fs from 'fs-extra'
import fetch from 'node-fetch'
import pAll from 'p-all'
import textTable from 'text-table'

type Stat = { id: string; name: string; runCount: number; likeCount: number }

const NAME_MAX_LENGTH = 32
const CONCURRENCY = 20

async function main() {
  try {
    const args = process.argv.slice(2)
    if (args[0] !== 'plugin' && args[0] !== 'widget') {
      throw new Error('First argument must be either `plugin` or `widget`')
    }
    const type: 'plugin' | 'widget' = args[0]
    if (typeof args[1] === 'undefined') {
      throw new Error('Need a file path')
    }
    const filePath = args[1]
    const ids: Array<string> = JSON.parse(
      await fs.readFile(filePath, 'utf8')
    ).map(function (item: { id: string }) {
      return item.id
    })
    const stats = await fetchStatsAsync(ids, type)
    printStats(stats, type)
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function fetchStatsAsync(
  ids: Array<string>,
  type: 'plugin' | 'widget'
): Promise<Array<Stat>> {
  const callbacks = ids.map(function (id: string) {
    return function () {
      return fetchStatAsync(id, type)
    }
  })
  const result = await pAll(callbacks, { concurrency: CONCURRENCY })
  return result.sort(function (x: Stat, y: Stat) {
    const delta = y.runCount - x.runCount
    if (delta === 0) {
      return x.name.localeCompare(y.name)
    }
    return delta
  })
}

async function fetchStatAsync(
  id: string,
  type: 'plugin' | 'widget'
): Promise<Stat> {
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
  return {
    id,
    likeCount: meta.like_count,
    name: version.name,
    runCount: meta.unique_run_count
  }
}

function printStats(stats: Array<Stat>, type: 'plugin' | 'widget'): void {
  const data = stats.map(function ({ id, name, runCount, likeCount }: Stat) {
    return [
      name.length > NAME_MAX_LENGTH
        ? `${name.slice(0, NAME_MAX_LENGTH).trim()}…`
        : name,
      new Intl.NumberFormat().format(runCount),
      new Intl.NumberFormat().format(likeCount),
      `https://figma.com/community/${type}/${id}`
    ]
  })
  data.splice(0, 0, ['name', 'runs', 'likes', 'url'])
  const totalRunCount = stats.reduce(function (
    total: number,
    { runCount }: Stat
  ) {
    return total + runCount
  },
  0)
  const totalLikeCount = stats.reduce(function (
    total: number,
    { likeCount }: Stat
  ) {
    return total + likeCount
  },
  0)
  data.push([
    '',
    new Intl.NumberFormat().format(totalRunCount),
    new Intl.NumberFormat().format(totalLikeCount),
    ''
  ])
  const table = textTable(data)
  console.log(table) // eslint-disable-line no-console
}
