import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import test from 'ava'
import { pathExists } from 'path-exists'
import { rimraf } from 'rimraf'

import { createFigmaPluginAsync } from '../src/create-figma-plugin-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

test('empty', async function (t) {
  t.plan(9)
  process.chdir(join(__dirname, 'fixtures', '01-empty'))
  await cleanUpAsync('figma-plugin')
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
  await cleanUpAsync('figma-plugin')
})

test('directory-exists', async function (t) {
  t.plan(10)
  process.chdir(join(__dirname, 'fixtures', '02-directory-exists'))
  await cleanUpAsync('figma-plugin-2')
  t.false(await pathExists('figma-plugin-2'))
  await createFigmaPluginAsync({
    name: 'figma-plugin',
    template: 'plugin/hello-world'
  })
  t.true(await pathExists('figma-plugin'))
  t.true(await pathExists('figma-plugin-2'))
  t.true(await pathExists('figma-plugin-2/.gitignore'))
  t.true(await pathExists('figma-plugin-2/.vscode'))
  t.true(await pathExists('figma-plugin-2/node_modules'))
  t.true(await pathExists('figma-plugin-2/package.json'))
  t.true(await pathExists('figma-plugin-2/README.md'))
  t.true(await pathExists('figma-plugin-2/src'))
  t.true(await pathExists('figma-plugin-2/src/main.ts'))
  await cleanUpAsync('figma-plugin-2')
})

async function cleanUpAsync(directoryName: string): Promise<void> {
  await rimraf(join(process.cwd(), directoryName))
}
