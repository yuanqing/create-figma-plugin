import test from 'ava'
import findUp from 'find-up'
import fs from 'fs-extra'
import { dirname, join } from 'path'
import rimraf from 'rimraf'
import { fileURLToPath } from 'url'

import { buildAsync } from '../src/build-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

test('no config', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '01-no-config'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: 'figma-plugin',
    main: 'build/main.js',
    name: 'figma-plugin'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('basic command', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '02-basic-command'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('command with UI', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '03-command-with-ui'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('multiple menu commands', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '04-multiple-menu-commands'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
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
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('nested menu commands', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '05-nested-menu-commands'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
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
  t.true(await fs.pathExists('build/main.js'))
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('relaunch button', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '06-relaunch-button'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
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
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('custom styles', async function (t) {
  t.plan(7)
  process.chdir(join(__dirname, 'fixtures', '07-custom-styles'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  t.false(await fs.pathExists('src/styles.css.d.ts'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  t.true(await fs.pathExists('src/styles.css.d.ts'))
  await cleanUpAsync()
})

test('preact', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '08-preact'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('esbuild main config', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '09-esbuild-main-config'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x'
  })
  t.true(await fs.pathExists('build/main.js'))
  const mainJs = await fs.readFile('build/main.js', 'utf8')
  t.true(/\/\/ comment appended to main\.js/.test(mainJs) === true)
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('esbuild ui config', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '10-esbuild-ui-config'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  const uiJs = await fs.readFile('build/ui.js', 'utf8')
  t.true(/\/\/ comment appended to ui\.js/.test(uiJs) === true)
  await cleanUpAsync()
})

test('UI with image asset', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '11-ui-with-image-asset'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await symlinkFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    id: '42',
    main: 'build/main.js',
    name: 'x',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  const uiJs = await fs.readFile('build/ui.js', 'utf8')
  t.true(/data:image\/svg\+xml/.test(uiJs) === true)
  await cleanUpAsync()
})

async function symlinkFigmaPluginTypingsAsync(): Promise<void> {
  const directoryPath = await findUp(
    join('node_modules', '@figma', 'plugin-typings'),
    {
      type: 'directory'
    }
  )
  if (typeof directoryPath === 'undefined') {
    throw new Error('Cannot find `node_modules/@figma`')
  }
  await fs.ensureSymlink(
    directoryPath,
    join(process.cwd(), 'node_modules', '@figma', 'plugin-typings')
  )
}

async function symlinkCreateFigmaPluginTsConfigAsync(): Promise<void> {
  const directoryPath = await findUp(join('packages', 'tsconfig'), {
    type: 'directory'
  })
  if (typeof directoryPath === 'undefined') {
    throw new Error('Cannot find the `tsconfig` package')
  }
  await fs.ensureSymlink(
    directoryPath,
    join(process.cwd(), 'node_modules', '@create-figma-plugin', 'tsconfig')
  )
}

async function cleanUpAsync(): Promise<void> {
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
