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
  parameterOnly: false,
  parameters: null,
  relaunchButtons: null,
  ui: null
}

test('`apiVersion`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-api-version'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    apiVersion: '42',
    build: null,
    editorType: ['figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: false
  })
})

test('`build`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-build'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    apiVersion: '1.0.0',
    build: 'c',
    editorType: ['figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: false
  })
})

test('`editorType`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-editor-type'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    apiVersion: '1.0.0',
    build: null,
    editorType: ['figjam', 'figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: false
  })
})

test('`enablePrivatePluginApi`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-enable-private-plugin-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    apiVersion: '1.0.0',
    build: null,
    editorType: ['figma'],
    enablePrivatePluginApi: true,
    enableProposedApi: false
  })
})

test('`enableProposedApi`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-enable-proposed-api'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    apiVersion: '1.0.0',
    build: null,
    editorType: ['figma'],
    enablePrivatePluginApi: false,
    enableProposedApi: true
  })
})
