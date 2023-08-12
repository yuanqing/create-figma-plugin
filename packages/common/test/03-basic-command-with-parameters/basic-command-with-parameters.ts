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
  relaunchButtons: null,
  capabilities: null,
  permissions: null,
  networkAccess: null,
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  build: null,
  rest: null
}

test('single parameter', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-single-parameter'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameters: [
      {
        key: 'c',
        name: 'c',
        description: null,
        allowFreeform: false,
        optional: false
      }
    ],
    parameterOnly: true
  })
})

test('`name`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-name'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameters: [
      {
        key: 'c',
        name: 'd',
        description: null,
        allowFreeform: false,
        optional: false
      }
    ],
    parameterOnly: true
  })
})

test('description', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-description'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameters: [
      {
        key: 'c',
        name: 'c',
        description: 'd',
        allowFreeform: false,
        optional: false
      }
    ],
    parameterOnly: true
  })
})

test('`allowFreeform`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-allow-freeform'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameters: [
      {
        key: 'c',
        name: 'c',
        allowFreeform: true,
        description: null,
        optional: false
      }
    ],
    parameterOnly: true
  })
})

test('`optional`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-optional'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameters: [
      {
        key: 'c',
        name: 'c',
        description: null,
        allowFreeform: false,
        optional: true
      }
    ],
    parameterOnly: true
  })
})

test('multiple parameters', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '06-multiple-parameters'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameters: [
      {
        key: 'c',
        name: 'd',
        description: null,
        allowFreeform: true,
        optional: false
      },
      {
        key: 'e',
        name: 'e',
        description: 'f',
        allowFreeform: false,
        optional: true
      }
    ],
    parameterOnly: true
  })
})

test('`parameterOnly` false', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '07-parameter-only-false'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameters: [
      {
        key: 'c',
        name: 'c',
        description: null,
        allowFreeform: false,
        optional: false
      }
    ],
    parameterOnly: false
  })
})
