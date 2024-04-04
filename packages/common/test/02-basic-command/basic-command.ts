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
  menu: null,
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
    id: 'a',
    commandId: 'b--default',
    name: 'a',
    main: { src: 'b', handler: 'default' },
    ui: null
  })
})

test('`main` with named export', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-main-named-export'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    id: 'a',
    commandId: 'b--c',
    name: 'a',
    main: { src: 'b', handler: 'c' },
    ui: null
  })
})

test('`ui`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-ui'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    id: 'a',
    commandId: 'b--default',
    name: 'a',
    main: { src: 'b', handler: 'default' },
    ui: { src: 'c', handler: 'default' }
  })
})

test('`ui` with named export', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-ui-named-export'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    id: 'a',
    commandId: 'b--default',
    name: 'a',
    main: { src: 'b', handler: 'default' },
    ui: { src: 'c', handler: 'd' }
  })
})

test('`id`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-id'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    id: '42',
    commandId: 'b--default',
    name: 'a',
    main: { src: 'b', handler: 'default' },
    ui: null
  })
})
