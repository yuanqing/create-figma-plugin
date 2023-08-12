import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import test from 'ava'
import { pathExists } from 'path-exists'
import { rimraf } from 'rimraf'

import { createFigmaPluginAsync } from '../src/create-figma-plugin-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

test('plugin template', async function (t) {
  t.plan(9)
  process.chdir(__dirname)
  await cleanUpAsync()
  t.false(await pathExists('figma-plugin'))
  await createFigmaPluginAsync({
    name: 'figma-plugin',
    template: 'plugin/hello-world'
  })
  t.true(await pathExists('figma-plugin'))
  t.true(await pathExists('figma-plugin/.gitignore'))
  t.true(await pathExists('figma-plugin/.vscode'))
  t.true(await pathExists('figma-plugin/node_modules'))
  t.true(await pathExists('figma-plugin/package.json'))
  t.true(await pathExists('figma-plugin/README.md'))
  t.true(await pathExists('figma-plugin/src'))
  t.true(await pathExists('figma-plugin/src/main.ts'))
  await cleanUpAsync()
})

async function cleanUpAsync(): Promise<void> {
  await rimraf(join(process.cwd(), 'figma-plugin'))
}
