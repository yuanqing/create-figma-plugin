import findUp from 'find-up'
import { ensureSymlink, pathExists, readFile } from 'fs-extra'
import { join } from 'path'
import * as rimraf from 'rimraf'
import { test } from 'tap'

import { buildAsync } from '../src/build-async'

test('no config', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '1-no-config'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('node_modules'))
  await createFigmaTypingsSymlinksAsync()
  await buildAsync({ minify: false, typecheck: true })
  const manifestJson = JSON.parse(await readFile('build/manifest.json', 'utf8'))
  t.same(manifestJson, {
    api: '1.0.0',
    id: 'figma-plugin',
    main: 'main.js',
    name: 'figma-plugin'
  })
  t.ok(await pathExists('build/main.js'))
  t.notOk(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('basic command', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '2-basic-command'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('node_modules'))
  await createFigmaTypingsSymlinksAsync()
  await buildAsync({ minify: false, typecheck: true })
  const manifestJson = JSON.parse(await readFile('build/manifest.json', 'utf8'))
  t.same(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'main.js',
    name: 'x'
  })
  t.ok(await pathExists('build/main.js'))
  t.notOk(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('command with UI', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '3-command-with-ui'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('node_modules'))
  await createFigmaTypingsSymlinksAsync()
  await buildAsync({ minify: false, typecheck: true })
  const manifestJson = JSON.parse(await readFile('build/manifest.json', 'utf8'))
  t.same(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'main.js',
    name: 'x',
    ui: 'ui.js'
  })
  t.ok(await pathExists('build/main.js'))
  t.ok(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('multiple menu commands', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '4-multiple-menu-commands'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('node_modules'))
  await createFigmaTypingsSymlinksAsync()
  await buildAsync({ minify: false, typecheck: true })
  const manifestJson = JSON.parse(await readFile('build/manifest.json', 'utf8'))
  t.same(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'main.js',
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
    ui: 'ui.js'
  })
  t.ok(await pathExists('build/main.js'))
  t.ok(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('nested menu commands', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '5-nested-menu-commands'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('node_modules'))
  await createFigmaTypingsSymlinksAsync()
  await buildAsync({ minify: false, typecheck: true })
  const manifestJson = JSON.parse(await readFile('build/manifest.json', 'utf8'))
  t.same(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'main.js',
    menu: [
      {
        menu: [
          {
            command: 'src/foo.ts--default',
            name: 'z'
          }
        ],
        name: 'y'
      }
    ],
    name: 'x'
  })
  t.ok(await pathExists('build/main.js'))
  t.notOk(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('relaunch button', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '6-relaunch-button'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('node_modules'))
  await createFigmaTypingsSymlinksAsync()
  await buildAsync({ minify: false, typecheck: true })
  const manifestJson = JSON.parse(await readFile('build/manifest.json', 'utf8'))
  t.same(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'main.js',
    name: 'x',
    relaunchButtons: [
      {
        command: 'foo',
        name: 'x'
      },
      {
        command: 'bar',
        multipleSelection: true,
        name: 'y'
      }
    ],
    ui: 'ui.js'
  })
  t.ok(await pathExists('build/main.js'))
  t.ok(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('custom styles', async function (t) {
  t.plan(7)
  process.chdir(join(__dirname, 'fixtures', '7-custom-styles'))
  await cleanUpAsync()
  t.notOk(await pathExists('src/styles.css.d.ts'))
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('node_modules'))
  await createFigmaTypingsSymlinksAsync()
  await buildAsync({ minify: false, typecheck: true })
  const manifestJson = JSON.parse(await readFile('build/manifest.json', 'utf8'))
  t.same(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'main.js',
    name: 'x',
    ui: 'ui.js'
  })
  t.ok(await pathExists('src/styles.css.d.ts'))
  t.ok(await pathExists('build/main.js'))
  t.ok(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('preact', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '8-preact'))
  await cleanUpAsync()
  t.notOk(await pathExists('build'))
  t.notOk(await pathExists('node_modules'))
  await createFigmaTypingsSymlinksAsync()
  await buildAsync({ minify: false, typecheck: true })
  const manifestJson = JSON.parse(await readFile('build/manifest.json', 'utf8'))
  t.same(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'main.js',
    name: 'x',
    ui: 'ui.js'
  })
  t.ok(await pathExists('build/main.js'))
  t.ok(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

async function createFigmaTypingsSymlinksAsync() {
  const directoryPath = await findUp(join('node_modules', '@figma'), {
    type: 'directory'
  })
  if (typeof directoryPath === 'undefined') {
    throw new Error('Cannot find `node_modules/@figma`')
  }
  await ensureSymlink(
    directoryPath,
    join(process.cwd(), 'node_modules', '@figma')
  )
}

async function cleanUpAsync() {
  const promises = [
    new Promise<void>(function (resolve, reject) {
      rimraf(join(process.cwd(), '{build,node_modules}'), function (error) {
        if (error) {
          reject(error)
          return
        }
        resolve()
      })
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
