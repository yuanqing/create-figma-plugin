import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  api: '1.0.0',
  build: null,
  commandId: 'b--default',
  containsWidget: false,
  editorType: ['figma'],
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  id: 'a',
  main: { handler: 'default', src: 'b' },
  menu: null,
  name: 'a',
  permissions: null,
  relaunchButtons: null,
  ui: null,
  widgetApi: '1.0.0'
}

test('single parameter', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-single-parameter'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: null,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'c',
        name: 'c',
        optional: false
      }
    ]
  })
})

test('name', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-name'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: null,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'c',
        name: 'd',
        optional: false
      }
    ]
  })
})

test('description', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-description'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: null,
    parameters: [
      {
        allowFreeform: false,
        description: 'd',
        key: 'c',
        name: 'c',
        optional: false
      }
    ]
  })
})

test('allow freeform', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-allow-freeform'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: null,
    parameters: [
      {
        allowFreeform: true,
        description: null,
        key: 'c',
        name: 'c',
        optional: false
      }
    ]
  })
})

test('optional', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-optional'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: null,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'c',
        name: 'c',
        optional: true
      }
    ]
  })
})

test('multiple parameters', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '06-multiple-parameters'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: null,
    parameters: [
      {
        allowFreeform: true,
        description: null,
        key: 'c',
        name: 'd',
        optional: false
      },
      {
        allowFreeform: false,
        description: 'f',
        key: 'e',
        name: 'e',
        optional: true
      }
    ]
  })
})

test('not parameter only', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '07-not-parameter-only'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: false,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'c',
        name: 'c',
        optional: false
      }
    ]
  })
})
