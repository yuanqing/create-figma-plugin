import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  apiVersion: '1.0.0',
  build: null,
  commandId: null,
  editorType: ['figma'],
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  id: 'a',
  main: null,
  name: 'a',
  parameterOnly: false,
  parameters: null,
  relaunchButtons: null,
  ui: null
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
        parameterOnly: false,
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
        parameterOnly: false,
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
        parameterOnly: false,
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
        parameterOnly: false,
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
        parameterOnly: false,
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
            parameterOnly: false,
            parameters: null,
            ui: {
              handler: 'default',
              src: 'g'
            }
          }
        ],
        name: 'd',
        parameterOnly: false,
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
        parameterOnly: false,
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
            key: 'h',
            name: 'g',
            optional: false
          },
          {
            allowFreeform: false,
            description: 'k',
            key: 'j',
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
