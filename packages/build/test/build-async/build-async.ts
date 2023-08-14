/* eslint-disable sort-keys-fix/sort-keys-fix */

import { exec, ExecException } from 'node:child_process'
import fs from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { constants } from '@create-figma-plugin/common'
import test from 'ava'
import { findUp } from 'find-up'
import { pathExists } from 'path-exists'
import { rimraf } from 'rimraf'

import { buildAsync } from '../../src/build-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const buildAsyncOptions = {
  exitOnError: true,
  clearPreviousLine: false,
  minify: false,
  typecheck: true
}

test('no config', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '01-no-config')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: 'figma-plugin',
    name: 'figma-plugin',
    main: 'build/main.js'
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('basic command', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '02-basic-command')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js'
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('basic command with UI', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '03-basic-command-with-ui')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('basic command with parameters', async function (t) {
  t.plan(6)
  const directoryPath = join(
    __dirname,
    'fixtures',
    '04-basic-command-with-parameters'
  )
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    parameters: [
      {
        key: 'c',
        name: 'b',
        description: 'd',
        allowFreeform: true,
        optional: true
      }
    ],
    parameterOnly: false
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('menu command', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '05-menu-command')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    menu: [
      {
        name: 'b',
        command: 'src/main.ts--default'
      }
    ]
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('menu command with UI', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '06-menu-command-with-ui')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js',
    menu: [
      {
        name: 'b',
        command: 'src/main.ts--default'
      }
    ]
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('menu command with parameters', async function (t) {
  t.plan(6)
  const directoryPath = join(
    __dirname,
    'fixtures',
    '07-menu-command-with-parameters'
  )
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    menu: [
      {
        name: 'b',
        command: 'src/main.ts--default',
        parameters: [
          {
            key: 'd',
            name: 'c',
            description: 'e',
            allowFreeform: true,
            optional: true
          }
        ],
        parameterOnly: false
      }
    ]
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('multiple menu commands', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '08-multiple-menu-commands')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js',
    menu: [
      {
        name: 'b',
        command: 'src/foo.ts--default'
      },
      {
        separator: true
      },
      {
        menu: [
          {
            name: 'd',
            command: 'src/bar/main.ts--default',
            parameters: [
              {
                key: 'f',
                name: 'e',
                description: 'g',
                allowFreeform: true,
                optional: true
              }
            ],
            parameterOnly: false
          }
        ],
        name: 'c'
      }
    ]
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('additional fields', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '09-additional-fields')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '42',
    widgetApi: '43',
    editorType: ['figjam'],
    containsWidget: true,
    id: '44',
    name: 'a',
    main: 'build/main.js',
    capabilities: ['textreview'],
    permissions: ['activeusers'],
    networkAccess: {
      allowedDomains: ['foo.com'],
      devAllowedDomains: ['bar.com'],
      reasoning: 'baz'
    },
    enablePrivatePluginApi: true,
    enableProposedApi: true,
    build: 'b',
    x: 'y'
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('relaunch button', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '10-relaunch-button')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js',
    relaunchButtons: [
      {
        name: 'c',
        command: 'b'
      },
      {
        name: 'e',
        command: 'd',
        multipleSelection: true
      }
    ]
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('UI with image asset', async function (t) {
  t.plan(7)
  const directoryPath = join(__dirname, 'fixtures', '11-ui-with-image-asset')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  const uiJs = await fs.readFile('build/ui.js', 'utf8')
  t.true(/data:image\/svg\+xml/.test(uiJs) === true)
  await cleanUpAsync()
})

test('CSS modules', async function (t) {
  t.plan(9)
  const directoryPath = join(__dirname, 'fixtures', '12-css-modules')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  t.false(await pathExists('src/styles.css.d.ts'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  const uiJs = await fs.readFile('build/ui.js', 'utf8')
  t.true(/\._foo_[^ ]+ {/.test(uiJs) === true)
  t.true(await pathExists('src/styles.css.d.ts'))
  await cleanUpAsync()
})

test('global CSS', async function (t) {
  t.plan(9)
  const directoryPath = join(__dirname, 'fixtures', '13-global-css')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  t.false(await pathExists('src/styles.css.d.ts'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  const uiJs = await fs.readFile('build/ui.js', 'utf8')
  t.true(/\.foo {/.test(uiJs) === true)
  t.true(await pathExists('src/styles.css.d.ts'))
  await cleanUpAsync()
})

test('preact', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '14-preact')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('react', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '15-react')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('esbuild main config - js', async function (t) {
  t.plan(7)
  const directoryPath = join(__dirname, 'fixtures', '16-esbuild-main-config-js')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js'
  })
  t.true(await pathExists('build/main.js'))
  const mainJs = await fs.readFile('build/main.js', 'utf8')
  t.true(/\/\/ comment appended to main\.js/.test(mainJs) === true)
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('esbuild main config - cjs', async function (t) {
  t.plan(7)
  const directoryPath = join(
    __dirname,
    'fixtures',
    '17-esbuild-main-config-cjs'
  )
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js'
  })
  t.true(await pathExists('build/main.js'))
  const mainJs = await fs.readFile('build/main.js', 'utf8')
  t.true(/\/\/ comment appended to main\.js/.test(mainJs) === true)
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('esbuild ui config - js', async function (t) {
  t.plan(7)
  const directoryPath = join(__dirname, 'fixtures', '18-esbuild-ui-config-js')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  const uiJs = await fs.readFile('build/ui.js', 'utf8')
  t.true(/\/\/ comment appended to ui\.js/.test(uiJs) === true)
  await cleanUpAsync()
})

test('esbuild ui config - cjs', async function (t) {
  t.plan(7)
  const directoryPath = join(__dirname, 'fixtures', '19-esbuild-ui-config-cjs')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    ui: 'build/ui.js'
  })
  t.true(await pathExists('build/main.js'))
  t.true(await pathExists('build/ui.js'))
  const uiJs = await fs.readFile('build/ui.js', 'utf8')
  t.true(/\/\/ comment appended to ui\.js/.test(uiJs) === true)
  await cleanUpAsync()
})

test('override manifest - js', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '20-override-manifest-js')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    x: 'y'
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('override manifest - cjs', async function (t) {
  t.plan(6)
  const directoryPath = join(__dirname, 'fixtures', '21-override-manifest-cjs')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({ ...buildAsyncOptions, outputDirectory: directoryPath })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js',
    x: 'y'
  })
  t.true(await pathExists('build/main.js'))
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('process.env.NODE_ENV', async function (t) {
  t.plan(7)
  const directoryPath = join(__dirname, 'fixtures', '22-process-env-node-env')
  process.chdir(directoryPath)
  await cleanUpAsync()
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    ...buildAsyncOptions,
    minify: true,
    outputDirectory: directoryPath
  })
  const manifestJson = JSON.parse(await fs.readFile('manifest.json', 'utf8'))
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js'
  })
  t.true(await pathExists('build/main.js'))
  const mainJs = await fs.readFile('build/main.js', 'utf8')
  t.true(mainJs.indexOf('process.env.NODE_ENV==="production"') !== -1)
  t.false(await pathExists('build/ui.js'))
  await cleanUpAsync()
})

test('output directory', async function (t) {
  t.plan(8)
  const outputDirectoryName = 'my-plugin'
  const directoryPath = join(__dirname, 'fixtures', '23-output-directory')
  process.chdir(directoryPath)
  await cleanUpAsync()
  await fs.rm(outputDirectoryName, { force: true, recursive: true })
  t.false(await pathExists('build'))
  t.false(await pathExists('manifest.json'))
  t.false(await pathExists('node_modules'))
  t.false(await pathExists(outputDirectoryName))
  await installFigmaPluginTypingsAsync()
  await symlinkCreateFigmaPluginTsConfigAsync()
  await buildAsync({
    ...buildAsyncOptions,
    outputDirectory: join(directoryPath, outputDirectoryName)
  })
  t.false(await pathExists('build'))
  const manifestJson = JSON.parse(
    await fs.readFile('foo/manifest.json', 'utf8')
  )
  t.deepEqual(manifestJson, {
    api: '1.0.0',
    editorType: ['figma'],
    id: '42',
    name: 'a',
    main: 'build/main.js'
  })
  t.true(await pathExists('foo/build/main.js'))
  t.false(await pathExists('foo/build/ui.js'))
  await cleanUpAsync()
  await fs.rm(outputDirectoryName, { force: true, recursive: true })
})

async function installFigmaPluginTypingsAsync(): Promise<void> {
  const directoryPath = join(process.cwd(), 'node_modules')
  if ((await pathExists(directoryPath)) === false) {
    await fs.mkdir(directoryPath)
  }
  await new Promise<void>(function (resolve, reject) {
    exec(
      `npm install --no-save @figma/plugin-typings@${constants.packageJson.versions.pluginTypings}`,
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
  if ((await pathExists(directoryPath)) === false) {
    await fs.symlink(
      directoryPath,
      join(process.cwd(), 'node_modules', '@create-figma-plugin', 'tsconfig')
    )
  }
}

async function cleanUpAsync(): Promise<void> {
  await rimraf(join(process.cwd(), '{build,manifest.json,node_modules}'), {
    glob: true
  })
  await rimraf(join(process.cwd(), 'src', '*.css.d.ts'), { glob: true })
}
