import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

test('is a function', function (t) {
  t.plan(1)
  t.true(typeof readConfigAsync === 'function')
})

test('no `package.json`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-no-package-json'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'src/main.ts--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: 'figma-plugin',
    main: { handler: 'default', src: 'src/main.ts' },
    menu: null,
    name: 'figma-plugin',
    relaunchButtons: null,
    ui: null
  })
})

test('config key is `undefined`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-config-undefined'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'src/main.ts--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: 'figma-plugin',
    main: { handler: 'default', src: 'src/main.ts' },
    menu: null,
    name: 'figma-plugin',
    relaunchButtons: null,
    ui: null
  })
})

test('config key is empty', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-config-empty'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'src/main.ts--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: 'figma-plugin',
    main: { handler: 'default', src: 'src/main.ts' },
    menu: null,
    name: 'figma-plugin',
    relaunchButtons: null,
    ui: null
  })
})

test('basic command', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-basic-command'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'bar--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: { handler: 'default', src: 'bar' },
    menu: null,
    name: 'foo',
    relaunchButtons: null,
    ui: { handler: 'default', src: 'baz' }
  })
})

test('basic command without `id`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-basic-command-without-id'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'bar--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: 'foo',
    main: { handler: 'default', src: 'bar' },
    menu: null,
    name: 'foo',
    relaunchButtons: null,
    ui: { handler: 'default', src: 'baz' }
  })
})

test('single menu command', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '06-single-menu-command'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: null,
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: null,
    menu: [
      {
        commandId: 'baz--default',
        main: { handler: 'default', src: 'baz' },
        menu: null,
        name: 'bar',
        ui: null
      }
    ],
    name: 'foo',
    relaunchButtons: null,
    ui: null
  })
})

test('single menu command with `handler`', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', '07-single-menu-command-with-handler')
  )
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: null,
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: null,
    menu: [
      {
        commandId: 'baz--qux',
        main: { handler: 'qux', src: 'baz' },
        menu: null,
        name: 'bar',
        ui: null
      }
    ],
    name: 'foo',
    relaunchButtons: null,
    ui: null
  })
})

test('multiple menu commands', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '08-multiple-menu-commands'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: null,
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: null,
    menu: [
      {
        commandId: 'baz--qux',
        main: { handler: 'qux', src: 'baz' },
        menu: null,
        name: 'bar',
        ui: null
      },
      { separator: true },
      {
        commandId: 'quuux--default',
        main: { handler: 'default', src: 'quuux' },
        menu: null,
        name: 'quux',
        ui: { handler: 'default', src: 'quuuux' }
      }
    ],
    name: 'foo',
    relaunchButtons: null,
    ui: null
  })
})

test('nested menu commands', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '09-nested-menu-commands'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: null,
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: null,
    menu: [
      {
        commandId: null,
        main: null,
        menu: [
          {
            commandId: 'qux--default',
            main: { handler: 'default', src: 'qux' },
            menu: null,
            name: 'baz',
            ui: { handler: 'default', src: 'quux' }
          }
        ],
        name: 'bar',
        ui: null
      }
    ],
    name: 'foo',
    relaunchButtons: null,
    ui: null
  })
})

test('relaunch button', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '10-relaunch-button'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'bar--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: { handler: 'default', src: 'bar' },
    menu: null,
    name: 'foo',
    relaunchButtons: [
      {
        commandId: 'qux',
        main: { handler: 'default', src: 'quuux' },
        multipleSelection: false,
        name: 'quux',
        ui: null
      }
    ],
    ui: { handler: 'default', src: 'baz' }
  })
})

test('relaunch button with multiple selection', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', '11-relaunch-button-with-multiple-selection')
  )
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'bar--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: { handler: 'default', src: 'bar' },
    menu: null,
    name: 'foo',
    relaunchButtons: [
      {
        commandId: 'qux',
        main: { handler: 'default', src: 'quuux' },
        multipleSelection: true,
        name: 'quux',
        ui: null
      }
    ],
    ui: { handler: 'default', src: 'baz' }
  })
})
