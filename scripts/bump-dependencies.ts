import { globby } from 'globby'
import { run } from 'npm-check-updates'
import { Index } from 'npm-check-updates/build/src/types/IndexType'
import { PackageFile } from 'npm-check-updates/build/src/types/PackageFile'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  try {
    const parentDirectoryPath = resolve(__dirname, '..')
    const globPatterns = [
      join(parentDirectoryPath, 'package.json'),
      join(parentDirectoryPath, 'packages', '*', 'package.json')
    ]
    const ignoredModules = process.argv.slice(2) // Modules passed in as CLI arguments will _not_ be bumped
    await bumpDependencies(globPatterns, ignoredModules)
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function bumpDependencies(
  globPatterns: Array<string>,
  ignoredModules: Array<string>
): Promise<void> {
  const packageJsonFilePaths = await globby(globPatterns, {
    deep: 2
  })
  const promises: Array<Promise<void | PackageFile | Index<string>>> = []
  for (const filePath of packageJsonFilePaths) {
    promises.push(
      run({
        packageFile: filePath,
        packageManager: 'npm',
        reject: ignoredModules,
        silent: false,
        target: 'latest',
        upgrade: true
      })
    )
  }
  await Promise.all(promises)
}
