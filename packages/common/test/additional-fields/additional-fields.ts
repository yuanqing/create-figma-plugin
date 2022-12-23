import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  commandId: 'b--default',
  id: 'a',
  main: { handler: 'default', src: 'b' },
  menu: null,
  name: 'a',
  parameterOnly: null,
  parameters: null,
  relaunchButtons: null,
  ui: null
}

test('`api`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '42',
    build: null,
    capabilities: null,
    containsWidget: false,
    editorType: ['figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    permissions: null,
    widgetApi: '1.0.0'
  })
})

test('`widgetApi`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-widget-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '1.0.0',
    build: null,
    capabilities: null,
    containsWidget: true,
    editorType: ['figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    permissions: null,
    widgetApi: '42'
  })
})

test('`editorType`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-editor-type'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '1.0.0',
    build: null,
    capabilities: null,
    containsWidget: false,
    editorType: ['figjam', 'figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    permissions: null,
    widgetApi: '1.0.0'
  })
})

test('`containsWidget`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-contains-widget'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '1.0.0',
    build: null,
    capabilities: null,
    containsWidget: true,
    editorType: ['figjam'],
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    permissions: null,
    widgetApi: '1.0.0'
  })
})

test('`permissions`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-permissions'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '1.0.0',
    build: null,
    capabilities: null,
    containsWidget: false,
    editorType: ['figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    permissions: ['currentuser'],
    widgetApi: '1.0.0'
  })
})

test('`capabilities`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '06-capabilities'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '1.0.0',
    build: null,
    capabilities: ['textreview'],
    containsWidget: false,
    editorType: ['figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    permissions: null,
    widgetApi: '1.0.0'
  })
})

test('`enablePrivatePluginApi`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '07-enable-private-plugin-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '1.0.0',
    build: null,
    capabilities: null,
    containsWidget: false,
    editorType: ['figma'],
    enablePrivatePluginApi: true,
    enableProposedApi: false,
    permissions: null,
    widgetApi: '1.0.0'
  })
})

test('`enableProposedApi`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '08-enable-proposed-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '1.0.0',
    build: null,
    capabilities: null,
    containsWidget: false,
    editorType: ['figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: true,
    permissions: null,
    widgetApi: '1.0.0'
  })
})

test('`build`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '09-build'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    api: '1.0.0',
    build: 'c',
    capabilities: null,
    containsWidget: false,
    editorType: ['figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    permissions: null,
    widgetApi: '1.0.0'
  })
})
