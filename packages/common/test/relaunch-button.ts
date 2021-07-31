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
  menu: null
}

test('simple', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', 'relaunch-button', '01-simple'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: null,
    relaunchButtons: [
      {
        commandId: 'c',
        main: { handler: 'default', src: 'e' },
        multipleSelection: false,
        name: 'd',
        parameterOnly: false,
        parameters: null,
        ui: null
      }
    ],
    ui: null
  })
})

test('complex', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', 'relaunch-button', '02-complex'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: null,
    relaunchButtons: [
      {
        commandId: 'c',
        main: { handler: 'default', src: 'e' },
        multipleSelection: false,
        name: 'd',
        parameterOnly: false,
        parameters: null,
        ui: null
      },
      {
        commandId: 'f',
        main: {
          handler: 'i',
          src: 'h'
        },
        multipleSelection: false,
        name: 'g',
        parameterOnly: true,
        parameters: [
          {
            allowFreeform: false,
            description: null,
            key: 'm',
            name: 'l',
            type: 'string'
          },
          {
            allowFreeform: true,
            description: 'p',
            key: 'o',
            name: 'n',
            type: 'string'
          }
        ],
        ui: {
          handler: 'k',
          src: 'j'
        }
      }
    ],
    ui: null
  })
})

test('multiple selection', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', 'relaunch-button', '03-multiple-selection')
  )
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    parameterOnly: false,
    parameters: null,
    relaunchButtons: [
      {
        commandId: 'c',
        main: { handler: 'default', src: 'e' },
        multipleSelection: true,
        name: 'd',
        parameterOnly: false,
        parameters: null,
        ui: null
      }
    ],
    ui: null
  })
})
