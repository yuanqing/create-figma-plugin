/* eslint-disable sort-keys */

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

test('`main`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-main'))
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
      }
    ]
  })
})

test('`main` with named export', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-main-named-export'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        commandId: 'c--d',
        name: 'b',
        main: {
          src: 'c',
          handler: 'd'
        },
        ui: null,
        menu: null,
        parameters: null,
        parameterOnly: true
      }
    ]
  })
})

test('`ui`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-ui'))
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
        ui: {
          src: 'd',
          handler: 'default'
        },
        menu: null,
        parameters: null,
        parameterOnly: true
      }
    ]
  })
})

test('`ui` with named export', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-ui-named-export'))
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
        ui: {
          src: 'd',
          handler: 'e'
        },
        menu: null,
        parameters: null,
        parameterOnly: true
      }
    ]
  })
})
