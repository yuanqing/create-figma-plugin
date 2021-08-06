import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  apiVersion: '1.0.0',
  build: null,
  commandId: 'b--default',
  editorType: ['figma'],
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  id: 'a',
  main: { handler: 'default', src: 'b' },
  menu: null,
  name: 'a',
  relaunchButtons: null,
  ui: null
}

test('single parameter', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-single-parameter'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: false,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'd',
        name: 'c',
        optional: false
      }
    ]
  })
})

test('description', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-description'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: false,
    parameters: [
      {
        allowFreeform: false,
        description: 'e',
        key: 'd',
        name: 'c',
        optional: false
      }
    ]
  })
})

test('allow freeform', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-allow-freeform'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: false,
    parameters: [
      {
        allowFreeform: true,
        description: null,
        key: 'd',
        name: 'c',
        optional: false
      }
    ]
  })
})

test('optional', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-optional'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: false,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'd',
        name: 'c',
        optional: true
      }
    ]
  })
})

test('multiple parameters', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-multiple-parameters'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: false,
    parameters: [
      {
        allowFreeform: true,
        description: null,
        key: 'd',
        name: 'c',
        optional: false
      },
      {
        allowFreeform: false,
        description: 'g',
        key: 'f',
        name: 'e',
        optional: true
      }
    ]
  })
})

test('parameter only', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '06-parameter-only'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    parameterOnly: true,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'd',
        name: 'c',
        optional: false
      }
    ]
  })
})
