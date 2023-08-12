/* eslint-disable sort-keys-fix/sort-keys-fix */

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import test from 'ava'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  api: '1.0.0',
  widgetApi: '1.0.0',
  editorType: ['figma'],
  containsWidget: false,
  id: 'figma-plugin',
  commandId: 'src/main.ts--default',
  name: 'figma-plugin',
  main: {
    src: 'src/main.ts',
    handler: 'default'
  },
  ui: null,
  menu: null,
  parameters: null,
  parameterOnly: true,
  relaunchButtons: null,
  capabilities: null,
  permissions: null,
  networkAccess: null,
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  build: null,
  rest: null
}

test('no `package.json`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-no-package-json'))
  t.deepEqual(await readConfigAsync(), config)
})

test('config key `undefined`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-undefined'))
  t.deepEqual(await readConfigAsync(), config)
})

test('config key empty', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-empty'))
  t.deepEqual(await readConfigAsync(), config)
})
