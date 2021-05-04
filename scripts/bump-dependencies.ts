import globby from 'globby'
import ncu from 'npm-check-updates'
import * as path from 'path'

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const parentDirectory = path.resolve(__dirname, '..')
  const globs = [
    path.join(parentDirectory, 'package.json'),
    path.join(parentDirectory, 'packages', '**', 'package.json')
  ]
  const packageJsonFiles = await globby(globs, { deep: 2 })
  const promises: Array<Promise<void>> = []
  packageJsonFiles.forEach(function (packageJsonFile: string): void {
    async function run(): Promise<void> {
      await ncu.run({
        packageFile: packageJsonFile,
        packageManager: 'npm',
        reject: args,
        silent: false,
        target: 'latest',
        upgrade: true
      })
    }
    promises.push(run())
  })
  await Promise.all(promises)
}
main()
