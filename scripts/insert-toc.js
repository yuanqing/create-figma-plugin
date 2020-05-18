const markdownToc = require('markdown-toc')
const fs = require('fs-extra')
const path = require('path')

async function main() {
  const filename = path.resolve(__dirname, '..', 'docs', 'utility-functions.md')
  const contents = await fs.readFile(filename, 'utf8')
  const result = markdownToc
    .insert(contents, { maxdepth: 3, bullet: '-' })
    .replace(/\[const [\w\s,{}[\]]+ = /g, '[') // remove `const {...} = `
    .replace(/\[await /g, '[') // remove `await `
    .replace(/- \[([^\]]+)\]/g, '- [**$1**]') // make headers bold
  await fs.writeFile(filename, result, 'utf8')
}
main()
