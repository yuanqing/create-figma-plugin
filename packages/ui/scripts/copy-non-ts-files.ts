import { copy } from 'fs-extra'
import globby from 'globby'
import { join, resolve } from 'path'

async function main(): Promise<void> {
  const glob = join(resolve(__dirname, '..'), 'src', '**', '*')
  const allFiles = await globby(glob)
  const nonTsFiles = allFiles.filter(function (file) {
    return /\.tsx?$/.test(file) === false
  })
  const promises = nonTsFiles.map(function (file) {
    const copiedFile = file.replace('/src/', '/lib/')
    return copy(file, copiedFile)
  })
  await Promise.all(promises)
}
main()
