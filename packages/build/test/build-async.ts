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
    api: '1.0.0',
    id: 'figma-plugin',
    main: 'build/main.js',
    name: 'figma-plugin'
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
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'foo'
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
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    menu: [
      {
        command: 'baz--default',
        name: 'bar'
      },
      {
        separator: true
      },
      {
        command: 'quux--default',
        name: 'qux'
      }
    ],
    name: 'foo',
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('relaunch button', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '4-relaunch-button'))
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await createSymlinkAsync()
  await buildAsync(true, false)
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'foo',
    relaunchButtons: [
      {
        command: 'baz',
        name: 'qux'
      }
    ],
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

async function createSymlinkAsync() {
  const sourcePath = resolve(__dirname, '..', '..', 'utilities')
  const destinationPath = join(
    process.cwd(),
    'node_modules',
    '@create-figma-plugin',
    'utilities'
  )
  await ensureSymlink(sourcePath, destinationPath)
}

async function cleanUpAsync() {
  await new Promise(function (resolve, reject) {
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
