import test from 'ava'
import { ensureSymlink, exists } from 'fs-extra'
import { join, resolve } from 'path'
import rimraf from 'rimraf'
import { build } from '../src/build'

function changeDirectory (directory) {
  process.chdir(join(__dirname, 'fixtures', directory))
}

async function cleanUp () {
  return new Promise(function (resolve, reject) {
    rimraf(join(process.cwd(), '{build,manifest.json,node_modules}'), function (
      error
    ) {
      if (error) {
        return reject(error)
      }
      resolve()
    })
  })
}
test.afterEach.always(cleanUp)

function setUp () {
  const sourcePath = resolve(__dirname, '..', '..', 'utilities')
  const destinationPath = join(
    process.cwd(),
    'node_modules',
    '@create-figma-plugin',
    'utilities'
  )
  return ensureSymlink(sourcePath, destinationPath)
}

test.serial('no config', async function (t) {
  t.plan(6)
  changeDirectory('1-no-config')
  await cleanUp()
  t.false(await exists('build'))
  t.false(await exists('manifest.json'))
  t.false(await exists('node_modules'))
  await setUp()
  await build()
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    name: 'figma-plugin',
    id: 'figma-plugin',
    api: '1.0.0',
    main: 'build/main.js'
  })
  t.true(await exists('build/main.js'))
  t.false(await exists('build/ui.js'))
})

test.serial('basic command', async function (t) {
  t.plan(6)
  changeDirectory('2-basic-command')
  await cleanUp()
  t.false(await exists('build'))
  t.false(await exists('manifest.json'))
  t.false(await exists('node_modules'))
  await setUp()
  await build()
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    name: 'foo',
    id: '42',
    api: '1.0.0',
    main: 'build/main.js'
  })
  t.true(await exists('build/main.js'))
  t.false(await exists('build/ui.js'))
})

test.serial('multiple menu commands', async function (t) {
  t.plan(6)
  changeDirectory('3-multiple-menu-commands')
  await cleanUp()
  t.false(await exists('build'))
  t.false(await exists('manifest.json'))
  t.false(await exists('node_modules'))
  await setUp()
  await build()
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    name: 'foo',
    id: '42',
    api: '1.0.0',
    main: 'build/main.js',
    ui: 'build/ui.js',
    menu: [
      {
        name: 'bar',
        command: 'baz--default'
      },
      {
        separator: true
      },
      {
        name: 'qux',
        command: 'quux--default'
      }
    ]
  })
  t.true(await exists('build/main.js'))
  t.true(await exists('build/ui.js'))
})
