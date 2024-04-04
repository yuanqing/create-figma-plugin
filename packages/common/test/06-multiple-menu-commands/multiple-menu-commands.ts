/* eslint-disable sort-keys-fix/sort-keys-fix */

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import test from 'ava'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  api: '1.0.0',
  widgetApi: '1.0.0',
  editorType: ['figma'],
  containsWidget: false,
  id: 'a',
  commandId: null,
  name: 'a',
  main: null,
  ui: null,
  parameters: null,
  parameterOnly: true,
  relaunchButtons: null,
  rest: null
}

test('multiple commands', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-multiple-commands'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        commandId: 'c--default',
        name: 'b',
        main: {
          src: 'c',
          handler: 'default'
        },
        ui: null,
        menu: null,
        parameters: null,
        parameterOnly: true
      },
      {
        commandId: 'e--default',
        name: 'd',
        main: {
          src: 'e',
          handler: 'default'
        },
        ui: {
          src: 'f',
          handler: 'default'
        },
        menu: null,
        parameters: null,
        parameterOnly: true
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
        name: 'b',
        main: {
          src: 'c',
          handler: 'default'
        },
        ui: null,
        menu: null,
        parameters: null,
        parameterOnly: true
      },
      { separator: true },
      {
        commandId: 'e--default',
        name: 'd',
        main: {
          src: 'e',
          handler: 'default'
        },
        ui: {
          src: 'f',
          handler: 'default'
        },
        menu: null,
        parameters: null,
        parameterOnly: true
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
        name: 'b',
        main: {
          src: 'c',
          handler: 'default'
        },
        ui: null,
        menu: null,
        parameters: null,
        parameterOnly: true
      },
      {
        commandId: null,
        name: 'd',
        main: null,
        ui: null,
        menu: [
          {
            commandId: 'f--default',
            name: 'e',
            main: {
              src: 'f',
              handler: 'default'
            },
            ui: {
              src: 'g',
              handler: 'default'
            },
            menu: null,
            parameters: null,
            parameterOnly: true
          }
        ],
        parameters: null,
        parameterOnly: true
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
        name: 'b',
        main: {
          src: 'c',
          handler: 'default'
        },
        ui: null,
        menu: null,
        parameters: null,
        parameterOnly: true
      },
      {
        commandId: 'e--default',
        name: 'd',
        main: {
          src: 'e',
          handler: 'default'
        },
        ui: {
          src: 'f',
          handler: 'default'
        },
        menu: null,
        parameters: [
          {
            key: 'g',
            name: 'h',
            description: null,
            allowFreeform: true,
            optional: false
          },
          {
            key: 'i',
            name: 'i',
            description: 'j',
            allowFreeform: false,
            optional: true
          }
        ],
        parameterOnly: true
      }
    ]
  })
})
