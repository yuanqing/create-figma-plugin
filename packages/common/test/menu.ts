import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  apiVersion: '1.0.0',
  build: null,
  commandId: null,
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

test('simple', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', 'menu', '01-simple'))
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
      }
    ]
  })
})

test('complex', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', 'menu', '02-complex'))
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
        separator: true
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
            parameterOnly: true,
            parameters: [
              {
                allowFreeform: false,
                description: null,
                key: 'h',
                name: 'g',
                type: 'string'
              },
              {
                allowFreeform: true,
                description: 'k',
                key: 'j',
                name: 'i',
                type: 'string'
              }
            ],
            ui: null
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
