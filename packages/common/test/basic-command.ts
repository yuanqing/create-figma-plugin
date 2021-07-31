import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  apiVersion: '1.0.0',
  build: null,
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  menu: null,
  relaunchButtons: null
}

test('`id`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', 'basic-command', '01-id'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: '42',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: null,
    ui: null
  })
})

test('`main`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', 'basic-command', '02-main'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: null,
    ui: null
  })
})

test('`main` with named export', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', 'basic-command', '03-main-named-export')
  )
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--c',
    id: 'a',
    main: { handler: 'c', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: null,
    ui: null
  })
})

test('`ui`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', 'basic-command', '04-ui'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: null,
    ui: { handler: 'default', src: 'c' }
  })
})

test('`ui` with named export', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', 'basic-command', '05-ui-named-export')
  )
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: null,
    ui: { handler: 'd', src: 'c' }
  })
})

test('single parameter', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', 'basic-command', '06-single-parameter')
  )
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'd',
        name: 'c',
        type: 'string'
      }
    ],
    ui: null
  })
})

test('multiple parameters', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', 'basic-command', '07-multiple-parameters')
  )
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'd',
        name: 'c',
        type: 'string'
      },
      {
        allowFreeform: true,
        description: 'g',
        key: 'f',
        name: 'e',
        type: 'string'
      }
    ],
    ui: null
  })
})

test('parameter only', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', 'basic-command', '08-parameter-only')
  )
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: true,
    parameters: [
      {
        allowFreeform: false,
        description: null,
        key: 'd',
        name: 'c',
        type: 'string'
      }
    ],
    ui: null
  })
})
