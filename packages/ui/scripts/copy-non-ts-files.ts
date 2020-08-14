import * as fs from 'fs-extra'
import * as globby from 'globby'
import * as path from 'path'

async function main(): Promise<void> {
  const glob = path.join(path.resolve(__dirname, '..'), 'src', '**', '*')
  const allFiles = await globby(glob)
  const nonTsFiles = allFiles.filter(function (file) {
    return /\.tsx?$/.test(file) === false
  })
  const promises = nonTsFiles.map(function (file) {
    const copiedFile = file.replace('/src/', '/lib/')
    return fs.copy(file, copiedFile)
  })
  await Promise.all(promises)
}
main()
