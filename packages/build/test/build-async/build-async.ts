import test from 'ava'
import { exec, ExecException } from 'child_process'
import { findUp } from 'find-up'
import fs from 'fs-extra'
import { dirname, join } from 'path'
import rimraf from 'rimraf'
import { fileURLToPath } from 'url'

import { buildAsync } from '../../src/build-async.js'

const figmaPluginsTypingsVersion = '1.33.0'

const __dirname = dirname(fileURLToPath(import.meta.url))

test('no config', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '01-no-config'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
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
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('basic command with UI', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '03-basic-command-with-ui'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('basic command with parameters', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '04-basic-command-with-parameters'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a',
    parameterOnly: true,
    parameters: [
      {
        allowFreeform: true,
        description: 'd',
        key: 'c',
        name: 'b',
        optional: true
      }
    ]
  })
  t.true(await fs.pathExists('build/main.js'))
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('menu command', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '05-menu-command'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    menu: [
      {
        command: 'src/main.ts--default',
        name: 'b'
      }
    ],
    name: 'a'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('menu command with UI', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '06-menu-command-with-ui'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    menu: [
      {
        command: 'src/main.ts--default',
        name: 'b'
      }
    ],
    name: 'a',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('menu command with parameters', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '07-menu-command-with-parameters'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    menu: [
      {
        command: 'src/main.ts--default',
        name: 'b',
        parameterOnly: true,
        parameters: [
          {
            allowFreeform: true,
            description: 'e',
            key: 'd',
            name: 'c',
            optional: true
          }
        ]
      }
    ],
    name: 'a'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('multiple menu commands', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '08-multiple-menu-commands'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    menu: [
      {
        command: 'src/foo.ts--default',
        name: 'b'
      },
      {
        separator: true
      },
      {
        menu: [
          {
            command: 'src/bar/main.ts--default',
            name: 'd',
            parameterOnly: true,
            parameters: [
              {
                allowFreeform: true,
                description: 'g',
                key: 'f',
                name: 'e',
                optional: true
              }
            ]
          }
        ],
        name: 'c'
      }
    ],
    name: 'a',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('additional fields', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '09-additional-fields'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '42',
    build: 'a',
    editorType: ['figjam', 'figma'],
    enablePrivatePluginApi: true,
    enableProposedApi: true,
    id: '43',
    main: 'build/main.js',
    name: 'a'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('relaunch button', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '10-relaunch-button'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a',
    relaunchButtons: [
      {
        command: 'b',
        name: 'c'
      },
      {
        command: 'd',
        multipleSelection: true,
        name: 'e'
      }
    ],
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('UI with image asset', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '11-ui-with-image-asset'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  const uiJs = await fs.readFile('build/ui.js', 'utf8')
  t.true(/data:image\/svg\+xml/.test(uiJs) === true)
  await cleanUpAsync()
})

test('custom styles', async function (t) {
  t.plan(7)
  process.chdir(join(__dirname, 'fixtures', '12-custom-styles'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  t.false(await fs.pathExists('src/styles.css.d.ts'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  t.true(await fs.pathExists('src/styles.css.d.ts'))
  await cleanUpAsync()
})

test('preact', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '13-preact'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('esbuild main config', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '14-esbuild-main-config'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a'
  })
  t.true(await fs.pathExists('build/main.js'))
  const mainJs = await fs.readFile('build/main.js', 'utf8')
  t.true(/\/\/ comment appended to main\.js/.test(mainJs) === true)
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('esbuild ui config', async function (t) {
  t.plan(6)
  process.chdir(join(__dirname, 'fixtures', '15-esbuild-ui-config'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a',
    ui: 'build/ui.js'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.true(await fs.pathExists('build/ui.js'))
  const uiJs = await fs.readFile('build/ui.js', 'utf8')
  t.true(/\/\/ comment appended to ui\.js/.test(uiJs) === true)
  await cleanUpAsync()
})

test('override manifest', async function (t) {
  t.plan(5)
  process.chdir(join(__dirname, 'fixtures', '16-override-manifest'))
  await cleanUpAsync()
  t.false(await fs.pathExists('build'))
  t.false(await fs.pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    clearPreviousLine: false,
    minify: false,
    typecheck: true
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    main: 'build/main.js',
    name: 'a',
    x: 'y'
  })
  t.true(await fs.pathExists('build/main.js'))
  t.false(await fs.pathExists('build/ui.js'))
  await cleanUpAsync()
})

async function installFigmaPluginTypingsAsync(): Promise<void> {
  await fs.ensureDir(join(process.cwd(), 'node_modules'))
  await new Promise<void>(function (resolve, reject) {
    exec(
      `npm install --no-save --prefer-offline @figma/plugin-typings@${figmaPluginsTypingsVersion}`,
      {},
      function (error: ExecException | null): void {
        if (error) {
          reject(error)
          return
        }
        resolve()
      }
    )
  })
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
