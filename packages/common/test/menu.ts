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
        commandId: 'e--f',
        main: {
          handler: 'f',
          src: 'e'
        },
        menu: null,
        name: 'd',
        parameterOnly: true,
        parameters: [
          {
            allowFreeform: false,
            description: null,
            key: 'j',
            name: 'i',
            type: 'string'
          },
          {
            allowFreeform: true,
            description: 'm',
            key: 'l',
            name: 'k',
            type: 'string'
          }
        ],
        ui: {
          handler: 'h',
          src: 'g'
        }
      }
    ]
  })
})

test('nested', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', 'menu', '03-nested'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        commandId: null,
        main: null,
        menu: [
          {
            commandId: 'd--default',
            main: { handler: 'default', src: 'd' },
            menu: null,
            name: 'c',
            parameterOnly: false,
            parameters: null,
            ui: null
          }
        ],
        name: 'b',
        parameterOnly: false,
        parameters: null,
        ui: null
      }
    ]
  })
})
