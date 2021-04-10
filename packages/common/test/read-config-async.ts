import { join } from 'path'
import { test } from 'tap'

import { readConfigAsync } from '../src/read-config-async'

test('is a function', function (t) {
  t.plan(1)
  t.ok(typeof readConfigAsync === 'function')
})

test('no `package.json`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '1-no-package-json'))
  t.same(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'main.ts--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: 'figma-plugin',
    main: { handler: 'default', src: 'src/main.ts' },
    menu: null,
    name: 'figma-plugin',
    relaunchButtons: null,
    remainderOptions: {},
    ui: null
  })
})

test('config key is `undefined`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '2-config-undefined'))
  t.same(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'main.ts--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: 'figma-plugin',
    main: { handler: 'default', src: 'src/main.ts' },
    menu: null,
    name: 'figma-plugin',
    relaunchButtons: null,
    remainderOptions: {},
    ui: null
  })
})

test('config key is empty', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '3-config-empty'))
  t.same(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'main.ts--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: 'figma-plugin',
    main: { handler: 'default', src: 'src/main.ts' },
    menu: null,
    name: 'figma-plugin',
    relaunchButtons: null,
    remainderOptions: {},
    ui: null
  })
})

test('basic command', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '4-basic-command'))
  t.same(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'bar--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: { handler: 'default', src: 'src/bar' },
    menu: null,
    name: 'foo',
    relaunchButtons: null,
    remainderOptions: {},
    ui: { handler: 'default', src: 'src/baz' }
  })
})

test('basic command without `id`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '5-basic-command-without-id'))
  t.same(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'bar--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: 'foo',
    main: { handler: 'default', src: 'src/bar' },
    menu: null,
    name: 'foo',
    relaunchButtons: null,
    remainderOptions: {},
    ui: { handler: 'default', src: 'src/baz' }
  })
})

test('single menu command', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '6-single-menu-command'))
  t.same(await readConfigAsync(), {
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
        main: { handler: 'default', src: 'src/baz' },
        menu: null,
        name: 'bar',
        ui: null
      }
    ],
    name: 'foo',
    relaunchButtons: null,
    remainderOptions: {},
    ui: null
  })
})

test('single menu command with `handler`', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', '7-single-menu-command-with-handler')
  )
  t.same(await readConfigAsync(), {
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
        main: { handler: 'qux', src: 'src/baz' },
        menu: null,
        name: 'bar',
        ui: null
      }
    ],
    name: 'foo',
    relaunchButtons: null,
    remainderOptions: {},
    ui: null
  })
})

test('multiple menu commands', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '8-multiple-menu-commands'))
  t.same(await readConfigAsync(), {
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
        main: { handler: 'qux', src: 'src/baz' },
        menu: null,
        name: 'bar',
        ui: null
      },
      { separator: true },
      {
        commandId: 'quuux--default',
        main: { handler: 'default', src: 'src/quuux' },
        menu: null,
        name: 'quux',
        ui: { handler: 'default', src: 'src/quuuux' }
      }
    ],
    name: 'foo',
    relaunchButtons: null,
    remainderOptions: {},
    ui: null
  })
})

test('nested menu commands', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '9-nested-menu-commands'))
  t.same(await readConfigAsync(), {
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
            main: { handler: 'default', src: 'src/qux' },
            menu: null,
            name: 'baz',
            ui: { handler: 'default', src: 'src/quux' }
          }
        ],
        name: 'bar',
        ui: null
      }
    ],
    name: 'foo',
    relaunchButtons: null,
    remainderOptions: {},
    ui: null
  })
})

test('relaunch button', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '10-relaunch-button'))
  t.same(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'bar--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: { handler: 'default', src: 'src/bar' },
    menu: null,
    name: 'foo',
    relaunchButtons: [
      {
        commandId: 'qux',
        main: { handler: 'default', src: 'src/quuux' },
        multipleSelection: false,
        name: 'quux',
        ui: null
      }
    ],
    remainderOptions: {},
    ui: { handler: 'default', src: 'src/baz' }
  })
})

test('relaunch button with multiple selection', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', '11-relaunch-button-with-multiple-selection')
  )
  t.same(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: null,
    commandId: 'bar--default',
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    id: '42',
    main: { handler: 'default', src: 'src/bar' },
    menu: null,
    name: 'foo',
    relaunchButtons: [
      {
        commandId: 'qux',
        main: { handler: 'default', src: 'src/quuux' },
        multipleSelection: true,
        name: 'quux',
        ui: null
      }
    ],
    remainderOptions: {},
    ui: { handler: 'default', src: 'src/baz' }
  })
})

test('additional options', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '12-additional-options'))
  t.same(await readConfigAsync(), {
    apiVersion: '1.0.0',
    build: 'qux',
    commandId: 'bar--default',
    enablePrivatePluginApi: true,
    enableProposedApi: true,
    id: '42',
    main: { handler: 'default', src: 'src/bar' },
    menu: null,
    name: 'foo',
    relaunchButtons: null,
    remainderOptions: {},
    ui: { handler: 'default', src: 'src/baz' }
  })
})
