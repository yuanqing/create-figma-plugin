import { ensureSymlink, pathExists } from 'fs-extra'
import { join, resolve } from 'path'
import * as rimraf from 'rimraf'
import { test } from 'tap'

import { buildAsync } from '../src/build-async'

test('no config', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '1-no-config'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('manifest.json'))
  t.notOk(await pathExists('node_modules'))
  await createSymlinksAsync()
  await buildAsync({ minify: false, typecheck: false })
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    api: '1.0.0',
    id: 'figma-plugin',
    main: 'build/main.js',
    name: 'figma-plugin'
  })
  t.ok(await pathExists('build/main.js'))
  t.notOk(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('basic command', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '2-basic-command'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('manifest.json'))
  t.notOk(await pathExists('node_modules'))
  await createSymlinksAsync()
  await buildAsync({ minify: false, typecheck: false })
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x'
  })
  t.ok(await pathExists('build/main.js'))
  t.notOk(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('command with UI', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '3-command-with-ui'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('manifest.json'))
  t.notOk(await pathExists('node_modules'))
  await createSymlinksAsync()
  await buildAsync({ minify: false, typecheck: false })
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x',
    ui: 'build/ui.js'
  })
  t.ok(await pathExists('build/main.js'))
  t.ok(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('multiple menu commands', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '4-multiple-menu-commands'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('manifest.json'))
  t.notOk(await pathExists('node_modules'))
  await createSymlinksAsync()
  await buildAsync({ minify: false, typecheck: false })
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    menu: [
      {
        command: 'src/foo.ts--default',
        name: 'y'
      },
      {
        separator: true
      },
      {
        command: 'src/bar/main.ts--default',
        name: 'z'
      }
    ],
    name: 'x',
    ui: 'build/ui.js'
  })
  t.ok(await pathExists('build/main.js'))
  t.ok(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('relaunch button', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '5-relaunch-button'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('manifest.json'))
  t.notOk(await pathExists('node_modules'))
  await createSymlinksAsync()
  await buildAsync({ minify: false, typecheck: false })
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x',
    relaunchButtons: [
      {
        command: 'bar',
        name: 'y'
      }
    ]
  })
  t.ok(await pathExists('build/main.js'))
  t.notOk(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('custom styles', async function (t) {
  t.plan(8)
  process.chdir(join(__dirname, 'fixtures', '6-custom-styles'))
  await cleanUpAsync()
  t.notOk(await pathExists('src/styles.css.d.ts'))
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('manifest.json'))
  t.notOk(await pathExists('node_modules'))
  await createSymlinksAsync()
  await buildAsync({ minify: false, typecheck: false })
  const manifestJsonPath = join(process.cwd(), 'manifest.json')
  t.deepEqual(require(manifestJsonPath), {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x',
    ui: 'build/ui.js'
  })
  t.ok(await pathExists('src/styles.css.d.ts'))
  t.ok(await pathExists('build/main.js'))
  t.ok(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

async function createSymlinksAsync() {
  await ensureSymlink(
    resolve(__dirname, '..', '..', '..', 'node_modules', '@figma'),
    join(process.cwd(), 'node_modules', '@figma')
  )
}

async function cleanUpAsync() {
  const promises = [
    new Promise<void>(function (resolve, reject) {
      rimraf(
        join(process.cwd(), '{build,manifest.json,node_modules}'),
        function (error) {
          if (error) {
            reject(error)
            return
          }
          resolve()
        }
      )
    }),
    new Promise<void>(function (resolve, reject) {
      rimraf(join(process.cwd(), 'src', '*.css.d.ts'), function (error) {
        if (error) {
          reject(error)
          return
        }
        resolve()
      })
    })
  ]
  await Promise.all(promises)
}
