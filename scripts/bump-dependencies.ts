import globby from 'globby'
import ncu from 'npm-check-updates'
import * as path from 'path'

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const parentDirectoryPath = path.resolve(__dirname, '..')
  const globs = [
    path.join(parentDirectoryPath, 'package.json'),
    path.join(parentDirectoryPath, 'packages', '**', 'package.json')
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
