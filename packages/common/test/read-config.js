import test from 'ava'
import { join } from 'path'
import { readConfig } from '../src/read-config'

function changeDirectory (directory) {
  process.chdir(join(__dirname, 'fixtures', directory))
}

test('is a function', function (t) {
  t.plan(1)
  t.true(typeof readConfig === 'function')
})

test('no `package.json`', async function (t) {
  t.plan(1)
  changeDirectory('1-no-package-json')
  t.deepEqual(await readConfig(), {
    name: 'figma-plugin',
    command: 'index.js'
  })
})

test('config key is `undefined`', async function (t) {
  t.plan(1)
  changeDirectory('2-config-undefined')
  t.deepEqual(await readConfig(), {
    name: 'figma-plugin',
    command: 'index.js'
  })
})

test('config key is empty', async function (t) {
  t.plan(1)
  changeDirectory('3-config-empty')
  t.deepEqual(await readConfig(), {
    name: 'figma-plugin',
    command: 'index.js'
  })
})

test('basic command', async function (t) {
  t.plan(1)
  changeDirectory('4-basic-command')
  t.deepEqual(await readConfig(), {
    name: 'foo',
    command: 'bar',
    ui: 'baz'
  })
})

test('single menu command', async function (t) {
  t.plan(1)
  changeDirectory('5-single-menu-command')
  t.deepEqual(await readConfig(), {
    name: 'foo',
    menu: [
      {
        name: 'bar',
        command: 'baz'
      }
    ]
  })
})

test('multiple menu commands', async function (t) {
  t.plan(1)
  changeDirectory('6-multiple-menu-commands')
  t.deepEqual(await readConfig(), {
    name: 'foo',
    menu: [
      {
        name: 'bar',
        command: 'baz'
      },
      {
        separator: true
      },
      {
        name: 'qux',
        command: 'quux',
        ui: 'quuux'
      }
    ]
  })
})
