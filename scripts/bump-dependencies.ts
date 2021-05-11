import globby from 'globby'
import ncu, { RunResults } from 'npm-check-updates'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main(): Promise<void> {
  try {
    const parentDirectoryPath = resolve(__dirname, '..')
    const globPatterns = [
      join(parentDirectoryPath, 'package.json'),
      join(parentDirectoryPath, 'packages', '**', 'package.json')
    ]
    await bumpDependencies(globPatterns)
  } catch (error) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()

async function bumpDependencies(globPatterns: Array<string>): Promise<void> {
  const args = process.argv.slice(2) // Modules passed in as CLI arguments will _not_ be bumped
  const packageJsonFilePaths = await globby(globPatterns, {
    deep: 2
  })
  const promises: Array<Promise<RunResults>> = []
  for (const filePath of packageJsonFilePaths) {
    promises.push(
      ncu.run({
        packageFile: filePath,
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
