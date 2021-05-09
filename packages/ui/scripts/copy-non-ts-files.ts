import fs from 'fs-extra'
import globby from 'globby'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  const allFiles = await globby([
    join(resolve(__dirname, '..', 'src'), '**', '*')
  ])
  const nonTsFiles = allFiles.filter(function (file): boolean {
    return /\.tsx?$/.test(file) === false
  })
  const promises = nonTsFiles.map(function (file): Promise<void> {
    const copiedFile = file.replace('/src/', '/lib/')
    return fs.copy(file, copiedFile)
  })
  await Promise.all(promises)
}
main()
