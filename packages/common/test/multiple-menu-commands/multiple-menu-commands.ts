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
  id: 'a',
  main: null,
  name: 'a',
  parameterOnly: null,
  parameters: null,
  permissions: null,
  relaunchButtons: null,
  ui: null,
  widgetApi: '1.0.0'
}

test('multiple commands', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-multiple-commands'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        commandId: 'c--default',
        main: {
          handler: 'default',
          src: 'c'
        },
        menu: null,
        name: 'b',
        parameterOnly: null,
        parameters: null,
        ui: null
      },
      {
        commandId: 'e--default',
        main: {
          handler: 'default',
          src: 'e'
        },
        menu: null,
        name: 'd',
        parameterOnly: null,
        parameters: null,
        ui: {
          handler: 'default',
          src: 'f'
        }
      }
    ]
  })
})

test('separator', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-separator'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        commandId: 'c--default',
        main: {
          handler: 'default',
          src: 'c'
        },
        menu: null,
        name: 'b',
        parameterOnly: null,
        parameters: null,
        ui: null
      },
      { separator: true },
      {
        commandId: 'e--default',
        main: {
          handler: 'default',
          src: 'e'
        },
        menu: null,
        name: 'd',
        parameterOnly: null,
        parameters: null,
        ui: {
          handler: 'default',
          src: 'f'
        }
      }
    ]
  })
})

test('nested', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-nested'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        commandId: 'c--default',
        main: {
          handler: 'default',
          src: 'c'
        },
        menu: null,
        name: 'b',
        parameterOnly: null,
        parameters: null,
        ui: null
      },
      {
        commandId: null,
        main: null,
        menu: [
          {
            commandId: 'f--default',
            main: {
              handler: 'default',
              src: 'f'
            },
            menu: null,
            name: 'e',
            parameterOnly: null,
            parameters: null,
            ui: {
              handler: 'default',
              src: 'g'
            }
          }
        ],
        name: 'd',
        parameterOnly: null,
        parameters: null,
        ui: null
      }
    ]
  })
})

test('parameters', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-parameters'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        commandId: 'c--default',
        main: {
          handler: 'default',
          src: 'c'
        },
        menu: null,
        name: 'b',
        parameterOnly: null,
        parameters: null,
        ui: null
      },
      {
        commandId: 'e--default',
        main: {
          handler: 'default',
          src: 'e'
        },
        menu: null,
        name: 'd',
        parameterOnly: true,
        parameters: [
          {
            allowFreeform: true,
            description: null,
            key: 'g',
            name: 'h',
            optional: false
          },
          {
            allowFreeform: false,
            description: 'j',
            key: 'i',
            name: 'i',
            optional: true
          }
        ],
        ui: {
          handler: 'default',
          src: 'f'
        }
      }
    ]
  })
})
