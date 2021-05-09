import globby from 'globby'
import ncu from 'npm-check-updates'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  const args = process.argv.slice(2) // modules passed in as CLI arguments will _not_ be bumped
  const parentDirectoryPath = resolve(__dirname, '..')
  const globs = [
    join(parentDirectoryPath, 'package.json'),
    join(parentDirectoryPath, 'packages', '**', 'package.json')
  ]
  const packageJsonFiles = await globby(globs, { deep: 2 })
  const promises: Array<Promise<void>> = []
  packageJsonFiles.forEach(function (packageJsonFile: string): void {
    async function runAsync(): Promise<void> {
      await ncu.run({
        packageFile: packageJsonFile,
        packageManager: 'npm',
        reject: args,
        silent: false,
        target: 'latest',
        upgrade: true
      })
    }
    promises.push(runAsync())
  })
  await Promise.all(promises)
}
main()
