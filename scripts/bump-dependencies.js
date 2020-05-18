const globby = require('globby')
const ncu = require('npm-check-updates')
const path = require('path')

async function main() {
  const parentDirectory = path.resolve(__dirname, '..')
  const globs = [
    path.join(parentDirectory, 'package.json'),
    path.join(parentDirectory, 'packages', '**', 'package.json')
  ]
  const packageJsonFiles = await globby(globs, { deep: 2 })
  const promises = []
  packageJsonFiles.forEach(function (packageJsonFile) {
    promises.push(
      ncu.run({
        packageFile: packageJsonFile,
        packageManager: 'npm',
        silent: false,
        upgrade: true
      })
    )
  })
  await Promise.all(promises)
}
main()
