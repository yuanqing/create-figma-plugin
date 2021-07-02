import test from 'ava'
import fs from 'fs-extra'
import { dirname, join } from 'path'
import rimraf from 'rimraf'
import { fileURLToPath } from 'url'

import { createFigmaPluginAsync } from '../src/create-figma-plugin-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

test('use default', async function (t) {
  t.plan(7)
  process.chdir(join(__dirname, 'fixtures', '01-use-default'))
  await cleanUpAsync()
  t.false(await fs.pathExists('figma-plugin'))
  await createFigmaPluginAsync(
    { name: 'figma-plugin', template: 'default' },
    true
  )
  t.true(await fs.pathExists('figma-plugin'))
  t.true(await fs.pathExists('figma-plugin/.gitignore'))
  t.true(await fs.pathExists('figma-plugin/node_modules'))
  t.true(await fs.pathExists('figma-plugin/package.json'))
  t.true(await fs.pathExists('figma-plugin/README.md'))
  t.true(await fs.pathExists('figma-plugin/src/main.ts'))
  await cleanUpAsync()
})

async function cleanUpAsync(): Promise<void> {
  await new Promise<void>(function (resolve, reject) {
    rimraf(join(process.cwd(), 'figma-plugin'), function (error) {
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })
}
