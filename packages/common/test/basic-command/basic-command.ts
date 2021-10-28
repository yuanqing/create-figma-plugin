import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  api: '1.0.0',
  build: null,
  editorType: ['figma'],
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  menu: null,
  parameterOnly: false,
  parameters: null,
  relaunchButtons: null
}

test('`main`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-main'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    ui: null
  })
})

test('`main` with named export', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-main-named-export'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--c',
    id: 'a',
    main: { handler: 'c', src: 'b' },
    name: 'a',
    ui: null
  })
})

test('`ui`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-ui'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    ui: { handler: 'default', src: 'c' }
  })
})

test('`ui` with named export', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-ui-named-export'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: 'a',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    ui: { handler: 'd', src: 'c' }
  })
})

test('`id`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-id'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    commandId: 'b--default',
    id: '42',
    main: { handler: 'default', src: 'b' },
    name: 'a',
    ui: null
  })
})
