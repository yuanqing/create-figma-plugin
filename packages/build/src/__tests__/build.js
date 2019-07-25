import test from 'ava'
import { exists } from 'fs-extra'
import { join } from 'path'
import rimraf from 'rimraf'
import { promisify } from 'util'
import { build } from '../build'

function changeDirectory (directory) {
  process.chdir(join(__dirname, '__fixtures__', directory))
}

const rimrafPromisified = promisify(rimraf)
async function cleanUp () {
  await rimrafPromisified(join(process.cwd(), 'manifest.json'))
  await rimrafPromisified(join(process.cwd(), 'build'))
}

test.afterEach.always(cleanUp)

test.serial('no config', async function (t) {
  t.plan(3)
  changeDirectory('1-no-config')
  await cleanUp()
  await build()
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    name: 'plugin',
    api: '0.6.0',
    main: 'build/main.js'
  })
  t.true(await exists('build/main.js'))
  t.false(await exists('build/ui.js'))
})

test.serial('basic command', async function (t) {
  t.plan(3)
  changeDirectory('2-basic-command')
  await cleanUp()
  await build()
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    name: 'foo',
    api: '0.6.0',
    main: 'build/main.js'
  })
  t.true(await exists('build/main.js'))
  t.false(await exists('build/ui.js'))
})

test.serial('multiple menu commands', async function (t) {
  t.plan(3)
  changeDirectory('3-multiple-menu-commands')
  await cleanUp()
  await build()
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    name: 'foo',
    api: '0.6.0',
    main: 'build/main.js',
    ui: 'build/ui.js',
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
        command: 'quux'
      }
    ]
  })
  t.true(await exists('build/main.js'))
  t.true(await exists('build/ui.js'))
})
