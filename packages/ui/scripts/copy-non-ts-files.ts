import fs from 'fs-extra'
import { globby } from 'globby'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main() {
  try {
    const globPatterns = [join(resolve(__dirname, '..', 'src'), '**', '*')]
    await copyNonTsFiles(globPatterns)
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function copyNonTsFiles(globPatterns: Array<string>): Promise<void> {
  const filePaths = await globby(globPatterns)
  const nonTsFilePaths = filePaths.filter(function (filePath: string): boolean {
    return /\.tsx?$/.test(filePath) === false
  })
  const srcPrefixRegex = new RegExp(`^${resolve(__dirname, '..', 'src')}`)
  const promises = nonTsFilePaths.map(function (
    filePath: string
  ): Promise<void> {
    const outputFilePath = filePath.replace(
      srcPrefixRegex,
      resolve(__dirname, '..', 'lib')
    )
    return fs.copy(filePath, outputFilePath)
  })
  await Promise.all(promises)
}
