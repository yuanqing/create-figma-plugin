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
  commandId: 'b--default',
  name: 'a',
  main: { src: 'b', handler: 'default' },
  ui: null,
  menu: null,
  parameters: null,
  parameterOnly: true,
  rest: null
}

test('`main`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-main'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    relaunchButtons: [
      {
        commandId: 'c',
        name: 'd',
        main: {
          src: 'e',
          handler: 'default'
        },
        ui: null,
        multipleSelection: false
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
        name: 'd',
        main: {
          src: 'e',
          handler: 'f'
        },
        ui: null,
        multipleSelection: false
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
        name: 'd',
        main: { src: 'e', handler: 'default' },
        ui: { src: 'f', handler: 'default' },
        multipleSelection: false
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
        name: 'd',
        main: { src: 'e', handler: 'default' },
        ui: { src: 'f', handler: 'g' },
        multipleSelection: false
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
        name: 'd',
        main: { src: 'e', handler: 'default' },
        ui: null,
        multipleSelection: true
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
        name: 'd',
        main: { src: 'e', handler: 'default' },
        ui: null,
        multipleSelection: false
      },
      {
        commandId: 'f',
        name: 'g',
        main: {
          src: 'h',
          handler: 'default'
        },
        ui: {
          src: 'i',
          handler: 'default'
        },
        multipleSelection: true
      }
    ]
  })
})
