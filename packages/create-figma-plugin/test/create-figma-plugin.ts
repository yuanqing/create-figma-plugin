import { pathExists } from 'fs-extra'
import { join } from 'path'
import rimraf from 'rimraf'
import { test } from 'tap'

import { createFigmaPluginAsync } from '../src/create-figma-plugin-async'

test('use default', async function (t) {
  t.plan(7)
  process.chdir(join(__dirname, 'fixtures', '1-use-default'))
  await cleanUpAsync()
  t.notOk(await pathExists('figma-plugin'))
  await createFigmaPluginAsync(
    { name: 'figma-plugin', template: 'default' },
    true
  )
  t.ok(await pathExists('figma-plugin'))
  t.ok(await pathExists('figma-plugin/.gitignore'))
  t.ok(await pathExists('figma-plugin/node_modules'))
  t.ok(await pathExists('figma-plugin/package.json'))
  t.ok(await pathExists('figma-plugin/README.md'))
  t.ok(await pathExists('figma-plugin/src/main.ts'))
  await cleanUpAsync()
})

async function cleanUpAsync() {
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
