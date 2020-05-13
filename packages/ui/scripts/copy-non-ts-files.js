const fs = require('fs-extra')
const globby = require('globby')
const path = require('path')

async function main () {
  const glob = path.join(path.resolve(__dirname, '..'), 'src', '**', '*')
  const allFiles = await globby(glob)
  const nonTsFiles = allFiles.filter(function (file) {
    return /\.tsx?$/.test(file) === false
  })
  const promises = nonTsFiles.map(function (file) {
    const copiedFile = file.replace('packages/ui/src/', 'packages/ui/lib/')
    return fs.copy(file, copiedFile)
  })
  await Promise.all(promises)
}
main()
