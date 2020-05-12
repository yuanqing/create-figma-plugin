import { ensureSymlink, pathExists } from 'fs-extra'
import { join, resolve } from 'path'
import * as rimraf from 'rimraf'
import { test } from 'tap'
import { buildAsync } from '../src/build-async'

test('no config', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '1-no-config'))
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await createSymlinkAsync()
  await buildAsync(true, false)
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    name: 'figma-plugin',
    id: 'figma-plugin',
    api: '1.0.0',
    main: 'build/main.js'
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('basic command', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '2-basic-command'))
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await createSymlinkAsync()
  await buildAsync(true, false)
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    name: 'foo',
    id: '42',
    api: '1.0.0',
    main: 'build/main.js'
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('multiple menu commands', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '3-multiple-menu-commands'))
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await createSymlinkAsync()
  await buildAsync(true, false)
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
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

async function createSymlinkAsync () {
  const sourcePath = resolve(__dirname, '..', '..', 'utilities')
  const destinationPath = join(
    process.cwd(),
    'node_modules',
    '@create-figma-plugin',
    'utilities'
  )
  await ensureSymlink(sourcePath, destinationPath)
}

async function cleanUpAsync () {
  return new Promise(function (resolve, reject) {
    rimraf(join(process.cwd(), '{build,manifest.json,node_modules}'), function (
      error
    ) {
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })
}
