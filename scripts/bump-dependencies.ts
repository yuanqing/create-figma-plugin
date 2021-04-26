import globby from 'globby'
import ncu from 'npm-check-updates'
import * as path from 'path'

async function main(): Promise<void> {
  const parentDirectory = path.resolve(__dirname, '..')
  const globs = [
    path.join(parentDirectory, 'package.json'),
    path.join(parentDirectory, 'packages', '**', 'package.json')
  ]
  const packageJsonFiles = await globby(globs, { deep: 2 })
  const promises: Array<Promise<void>> = []
  packageJsonFiles.forEach(function (packageJsonFile) {
    async function run() {
      await ncu.run({
        packageFile: packageJsonFile,
        packageManager: 'npm',
        silent: false,
        upgrade: true
      })
    }
    promises.push(run())
  })
  await Promise.all(promises)
}
main()
