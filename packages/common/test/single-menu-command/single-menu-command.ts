import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  api: '1.0.0',
  build: null,
  commandId: null,
  containsWidget: false,
  editorType: ['figma'],
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  main: null,
  name: 'a',
  parameterOnly: false,
  parameters: null,
  permissions: null,
  relaunchButtons: null,
  ui: null,
  widgetApi: '1.0.0'
}

test('`main`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-main'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    id: 'a',
    menu: [
      {
        commandId: 'c--default',
        main: {
          handler: 'default',
          src: 'c'
        },
        menu: null,
        name: 'b',
        parameterOnly: false,
        parameters: null,
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
    id: 'a',
    menu: [
      {
        commandId: 'c--d',
        main: {
          handler: 'd',
          src: 'c'
        },
        menu: null,
        name: 'b',
        parameterOnly: false,
        parameters: null,
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
    id: 'a',
    menu: [
      {
        commandId: 'c--default',
        main: {
          handler: 'default',
          src: 'c'
        },
        menu: null,
        name: 'b',
        parameterOnly: false,
        parameters: null,
        ui: {
          handler: 'default',
          src: 'd'
        }
      }
    ]
  })
})

test('`ui` with named export', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-ui-named-export'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    id: 'a',
    menu: [
      {
        commandId: 'c--default',
        main: {
          handler: 'default',
          src: 'c'
        },
        menu: null,
        name: 'b',
        parameterOnly: false,
        parameters: null,
        ui: {
          handler: 'e',
          src: 'd'
        }
      }
    ]
  })
})
