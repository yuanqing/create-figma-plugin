/* eslint-disable sort-keys */

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
    editorType: ['figjam', 'figma', 'slides']
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

test('rest', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-rest'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    rest: {
      x: 'y'
    }
  })
})
