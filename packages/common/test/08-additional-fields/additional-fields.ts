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
  id: 'a',
  commandId: 'b--default',
  name: 'a',
  main: { src: 'b', handler: 'default' },
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

test('`api`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '42'
  })
})

test('`widgetApi`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-widget-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    widgetApi: '42',
    containsWidget: true
  })
})

test('`editorType`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-editor-type'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    editorType: ['figjam', 'figma']
  })
})

test('`containsWidget`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-contains-widget'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    editorType: ['figjam'],
    containsWidget: true
  })
})

test('`capabilities`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-capabilities'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    capabilities: ['textreview']
  })
})

test('`permissions`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '06-permissions'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    permissions: ['currentuser']
  })
})

test('`networkAccess`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '07-network-access'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    networkAccess: {
      allowedDomains: ['foo.com'],
      devAllowedDomains: ['bar.com'],
      reasoning: 'baz'
    }
  })
})

test('`enablePrivatePluginApi`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '08-enable-private-plugin-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    enablePrivatePluginApi: true
  })
})

test('`enableProposedApi`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '09-enable-proposed-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    enableProposedApi: true
  })
})

test('`build`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '10-build'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    build: 'c'
  })
})

test('rest', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '11-rest'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    rest: {
      x: 'y'
    }
  })
})
