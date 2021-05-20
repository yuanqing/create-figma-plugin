import fs from 'fs-extra'
import globby from 'globby'

async function main(): Promise<void> {
  const globPatterns = process.argv.slice(2)
  try {
    await checkHtmlAnchorLinks(globPatterns)
  } catch (error) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function checkHtmlAnchorLinks(
  globPatterns: Array<string>
): Promise<void> {
  const filePaths = await globby(globPatterns)
  for (const filePath of filePaths) {
    const html = await fs.readFile(filePath, 'utf8')
    const ids: Record<string, true> = extractIds(html)
    const links = extractAnchorLinks(html)
    for (const link of links) {
      if (typeof ids[link] === 'undefined') {
        throw new Error(`Invalid \`href\`: #${link}`)
      }
    }
  }
}

function extractIds(html: string): Record<string, true> {
  const regex = new RegExp(` id="([^"]+)"`, 'g')
  const iterator = html.matchAll(regex)
  const result: Record<string, true> = {}
  for (const matches of iterator) {
    result[matches[1]] = true
  }
  return result
}

function extractAnchorLinks(html: string): Array<string> {
  const regex = new RegExp(` href="#([^"]+)"`, 'g')
  const iterator = html.matchAll(regex)
  const result: Array<string> = []
  for (const matches of iterator) {
    result.push(matches[1])
  }
  return result
}
