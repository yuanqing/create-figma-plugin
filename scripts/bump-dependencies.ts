import globby from 'globby'
import ncu, { RunResults } from 'npm-check-updates'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  const args = process.argv.slice(2) // Modules passed in as CLI arguments will _not_ be bumped
  const parentDirectoryPath = resolve(__dirname, '..')
  const packageJsonFiles = [
    join(parentDirectoryPath, 'package.json'),
    ...(await globby(
      join(parentDirectoryPath, 'packages', '**', 'package.json'),
      {
        deep: 2
      }
    ))
  ]
  const promises: Array<Promise<RunResults>> = []
  for (const packageJsonFile of packageJsonFiles) {
    promises.push(
      ncu.run({
        packageFile: packageJsonFile,
        packageManager: 'npm',
        reject: args,
        silent: false,
        target: 'latest',
        upgrade: true
      })
    )
  }
  await Promise.all(promises)
}
main()
