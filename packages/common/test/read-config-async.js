import test from 'ava'
import { join } from 'path'
import { readConfigAsync } from '../src/read-config-async'

function changeDirectory (directory) {
  process.chdir(join(__dirname, 'fixtures', directory))
}

test('is a function', function (t) {
  t.plan(1)
  t.true(typeof readConfigAsync === 'function')
})

test('no `package.json`', async function (t) {
  t.plan(1)
  changeDirectory('1-no-package-json')
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'figma-plugin',
    id: 'figma-plugin',
    command: 'index.js--default',
    main: { src: 'index.js', handler: 'default' },
    relaunchButtons: []
  })
})

test('config key is `undefined`', async function (t) {
  t.plan(1)
  changeDirectory('2-config-undefined')
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'figma-plugin',
    id: 'figma-plugin',
    command: 'index.js--default',
    main: { src: 'index.js', handler: 'default' },
    relaunchButtons: []
  })
})

test('config key is empty', async function (t) {
  t.plan(1)
  changeDirectory('3-config-empty')
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'figma-plugin',
    id: 'figma-plugin',
    command: 'index.js--default',
    main: { src: 'index.js', handler: 'default' },
    relaunchButtons: []
  })
})

test('basic command', async function (t) {
  t.plan(1)
  changeDirectory('4-basic-command')
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    command: 'bar--default',
    main: { src: 'bar', handler: 'default' },
    ui: { src: 'baz', handler: 'default' },
    relaunchButtons: []
  })
})

test('basic command without `id`', async function (t) {
  t.plan(1)
  changeDirectory('5-basic-command-without-id')
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: 'foo',
    command: 'bar--default',
    main: { src: 'bar', handler: 'default' },
    ui: { src: 'baz', handler: 'default' },
    relaunchButtons: []
  })
})

test('single menu command', async function (t) {
  t.plan(1)
  changeDirectory('6-single-menu-command')
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    menu: [
      {
        name: 'bar',
        command: 'baz--default',
        main: { src: 'baz', handler: 'default' },
        ui: null
      }
    ],
    relaunchButtons: []
  })
})

test('single menu command with `handler`', async function (t) {
  t.plan(1)
  changeDirectory('7-single-menu-command-with-handler')
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    menu: [
      {
        name: 'bar',
        command: 'baz--qux',
        main: { src: 'baz', handler: 'qux' },
        ui: null
      }
    ],
    relaunchButtons: []
  })
})

test('multiple menu commands', async function (t) {
  t.plan(1)
  changeDirectory('8-multiple-menu-commands')
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    menu: [
      {
        name: 'bar',
        command: 'baz--qux',
        main: { src: 'baz', handler: 'qux' },
        ui: null
      },
      {
        separator: true
      },
      {
        name: 'quux',
        command: 'quuux--default',
        main: { src: 'quuux', handler: 'default' },
        ui: { src: 'quuuux', handler: 'default' }
      }
    ],
    relaunchButtons: []
  })
})

test('relaunch button', async function (t) {
  t.plan(1)
  changeDirectory('9-relaunch-button')
  t.deepEqual(await readConfigAsync(), {
    apiVersion: '1.0.0',
    name: 'foo',
    id: '42',
    menu: [
      {
        name: 'bar',
        command: 'baz--default',
        main: { src: 'baz', handler: 'default' },
        ui: null
      }
    ],
    relaunchButtons: [
      {
        name: 'quux',
        command: 'qux',
        main: { src: 'quuux', handler: 'default' },
        ui: null
      }
    ]
  })
})
