import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  apiVersion: '1.0.0',
  build: null,
  commandId: 'src/main.ts--default',
  editorType: ['figma'],
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  id: 'figma-plugin',
  main: { handler: 'default', src: 'src/main.ts' },
  menu: null,
  name: 'figma-plugin',
  parameterOnly: false,
  parameters: null,
  relaunchButtons: null,
  ui: null
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
