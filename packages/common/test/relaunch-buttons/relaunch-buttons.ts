import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  api: '1.0.0',
  build: null,
  capabilities: null,
  commandId: 'b--default',
  containsWidget: false,
  editorType: ['figma'],
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  id: 'a',
  main: { handler: 'default', src: 'b' },
  menu: null,
  name: 'a',
  parameterOnly: null,
  parameters: null,
  permissions: null,
  ui: null,
  widgetApi: '1.0.0'
}

test('`main`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-main'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    relaunchButtons: [
      {
        commandId: 'c',
        main: { handler: 'default', src: 'e' },
        multipleSelection: false,
        name: 'd',
        ui: null
      }
    ]
  })
})

test('`main` with named export', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-main-named-export'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    relaunchButtons: [
      {
        commandId: 'c',
        main: { handler: 'f', src: 'e' },
        multipleSelection: false,
        name: 'd',
        ui: null
      }
    ]
  })
})

test('`ui`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-ui'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    relaunchButtons: [
      {
        commandId: 'c',
        main: { handler: 'default', src: 'e' },
        multipleSelection: false,
        name: 'd',
        ui: { handler: 'default', src: 'f' }
      }
    ]
  })
})

test('`ui` with named export', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-ui-named-export'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    relaunchButtons: [
      {
        commandId: 'c',
        main: { handler: 'default', src: 'e' },
        multipleSelection: false,
        name: 'd',
        ui: { handler: 'g', src: 'f' }
      }
    ]
  })
})

test('multiple selection', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-multiple-selection'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    relaunchButtons: [
      {
        commandId: 'c',
        main: { handler: 'default', src: 'e' },
        multipleSelection: true,
        name: 'd',
        ui: null
      }
    ]
  })
})

test('multiple relaunch buttons', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '06-multiple-relaunch-buttons'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    relaunchButtons: [
      {
        commandId: 'c',
        main: { handler: 'default', src: 'e' },
        multipleSelection: false,
        name: 'd',
        ui: null
      },
      {
        commandId: 'f',
        main: {
          handler: 'default',
          src: 'h'
        },
        multipleSelection: true,
        name: 'g',
        ui: {
          handler: 'default',
          src: 'i'
        }
      }
    ]
  })
})
