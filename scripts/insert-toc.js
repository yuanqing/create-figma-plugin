const markdownToc = require('markdown-toc')
const fs = require('fs-extra')
const path = require('path')

async function main () {
  const filename = path.resolve(__dirname, '..', 'docs', '3-api.md')
  const contents = await fs.readFile(filename, 'utf8')
  const regex = /\[const \w+ = /g
  const result = markdownToc
    .insert(contents, { maxdepth: 3, bullet: '-' })
    .replace(regex, '[')
  await fs.writeFile(filename, result, 'utf8')
}
main()
