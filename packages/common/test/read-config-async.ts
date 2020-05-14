import { join } from 'path'
import { test } from 'tap'
import { readConfigAsync } from '../src/read-config-async'

test('is a function', function (t) {
  t.plan(1)
  t.true(typeof readConfigAsync === 'function')
})

test('no `package.json`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '1-no-package-json'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'figma-plugin',
    id: 'figma-plugin',
    commandId: 'index.js--default',
    main: { src: 'index.js', handler: 'default' },
    ui: undefined,
    menu: undefined,
    relaunchButtons: undefined
  })
})

test('config key is `undefined`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '2-config-undefined'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'figma-plugin',
    id: 'figma-plugin',
    commandId: 'index.js--default',
    main: { src: 'index.js', handler: 'default' },
    ui: undefined,
    menu: undefined,
    relaunchButtons: undefined
  })
})

test('config key is empty', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '3-config-empty'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'figma-plugin',
    id: 'figma-plugin',
    commandId: 'index.js--default',
    main: { src: 'index.js', handler: 'default' },
    ui: undefined,
    menu: undefined,
    relaunchButtons: undefined
  })
})

test('basic command', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '4-basic-command'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    commandId: 'bar--default',
    main: { src: 'bar', handler: 'default' },
    ui: { src: 'baz', handler: 'default' },
    menu: undefined,
    relaunchButtons: undefined
  })
})

test('basic command without `id`', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '5-basic-command-without-id'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: 'foo',
    commandId: 'bar--default',
    main: { src: 'bar', handler: 'default' },
    ui: { src: 'baz', handler: 'default' },
    menu: undefined,
    relaunchButtons: undefined
  })
})

test('single menu command', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '6-single-menu-command'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    commandId: undefined,
    main: undefined,
    ui: undefined,
    menu: [
      {
        name: 'bar',
        commandId: 'baz--default',
        main: { src: 'baz', handler: 'default' },
        ui: undefined,
        menu: undefined
      }
    ],
    relaunchButtons: undefined
  })
})

test('single menu command with `handler`', async function (t) {
  t.plan(1)
  process.chdir(
    join(__dirname, 'fixtures', '7-single-menu-command-with-handler')
  )
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    commandId: undefined,
    main: undefined,
    ui: undefined,
    menu: [
      {
        name: 'bar',
        commandId: 'baz--qux',
        main: { src: 'baz', handler: 'qux' },
        ui: undefined,
        menu: undefined
      }
    ],
    relaunchButtons: undefined
  })
})

test('multiple menu commands', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '8-multiple-menu-commands'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    commandId: undefined,
    main: undefined,
    ui: undefined,
    menu: [
      {
        name: 'bar',
        commandId: 'baz--qux',
        main: { src: 'baz', handler: 'qux' },
        ui: undefined,
        menu: undefined
      },
      {
        separator: true
      },
      {
        name: 'quux',
        commandId: 'quuux--default',
        main: { src: 'quuux', handler: 'default' },
        ui: { src: 'quuuux', handler: 'default' },
        menu: undefined
      }
    ],
    relaunchButtons: undefined
  })
})

test('relaunch button', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '9-relaunch-button'))
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    commandId: undefined,
    main: undefined,
    ui: undefined,
    menu: [
      {
        name: 'bar',
        commandId: 'baz--default',
        main: { src: 'baz', handler: 'default' },
        ui: undefined,
        menu: undefined
      }
    ],
    relaunchButtons: [
      {
        name: 'quux',
        commandId: 'qux',
        main: { src: 'quuux', handler: 'default' },
        ui: undefined
      }
    ]
  })
})
