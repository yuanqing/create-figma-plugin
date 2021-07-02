import {
  Config,
  ConfigCommand,
  ConfigCommandSeparator,
  ConfigFile,
  ConfigRelaunchButton,
  constants,
  readConfigAsync
} from '@create-figma-plugin/common'
import { build, BuildOptions } from 'esbuild'
import fs from 'fs-extra'
import indentString from 'indent-string'
import { join, resolve } from 'path'

import { esbuildCssModulesPlugin } from './esbuild-css-modules-plugin.js'

interface EntryFile extends ConfigFile {
  readonly commandId: string
}

export async function buildBundlesAsync(minify: boolean): Promise<void> {
  const config = await readConfigAsync()
  await Promise.all([
    buildMainBundleAsync({
      config,
      minify
    }),
    buildUiBundleAsync({
      config,
      minify
    })
  ])
}

async function createEsbuildConfig(
  buildOptions: BuildOptions,
  esbuildConfigFilePath: string
): Promise<BuildOptions> {
  const absolutePath = resolve(esbuildConfigFilePath)
  if ((await fs.pathExists(absolutePath)) === false) {
    return buildOptions
  }
  const { default: overrideEsbuildConfig } = await import(absolutePath)
  return overrideEsbuildConfig(buildOptions)
}

async function buildMainBundleAsync(options: {
  config: Config
  minify: boolean
}): Promise<void> {
  const { config, minify } = options
  const js = createMainEntryFile(config)
  try {
    const esbuildConfig: BuildOptions = {
      bundle: true,
      logLevel: 'silent',
      minify,
      outfile: join(process.cwd(), constants.build.directoryName, 'main.js'),
      stdin: {
        contents: js,
        resolveDir: process.cwd()
      },
      // Spread and rest properties are not supported in the plugin main
      // context, and must be transpiled down.
      // See https://esbuild.github.io/content-types/#javascript
      target: 'es2017'
    }
    await build(
      await createEsbuildConfig(
        esbuildConfig,
        constants.build.mainConfigFilePath
      )
    )
  } catch (error) {
    throw new Error(formatEsbuildErrorMessage(error.message))
  }
}

function createMainEntryFile(config: Config): string {
  const { relaunchButtons, ...command } = config
  const entryFiles: Array<EntryFile> = []
  extractEntryFile(command, 'main', entryFiles)
  if (entryFiles.length === 0) {
    throw new Error('Need a `main` entry point')
  }
  if (relaunchButtons !== null) {
    extractEntryFiles(relaunchButtons, 'main', entryFiles)
  }
  return `
    const modules = ${createRequireCode(entryFiles)};
    const commandId = (${entryFiles.length === 1} || figma.command === '') ? '${
    entryFiles[0].commandId
  }' : figma.command;
    modules[commandId]();
  `
}

async function buildUiBundleAsync(options: {
  config: Config
  minify: boolean
}): Promise<void> {
  const { config, minify } = options
  const js = createUiEntryFile(config)
  if (js === null) {
    return
  }
  try {
    const esbuildConfig: BuildOptions = {
      bundle: true,
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      loader: {
        '.gif': 'dataurl',
        '.jpg': 'dataurl',
        '.png': 'dataurl',
        '.svg': 'dataurl'
      },
      logLevel: 'silent',
      minify,
      outfile: join(process.cwd(), constants.build.directoryName, 'ui.js'),
      plugins: [esbuildCssModulesPlugin(minify)],
      stdin: {
        contents: js,
        resolveDir: process.cwd()
      },
      target: 'chrome58'
    }
    await build(
      await createEsbuildConfig(esbuildConfig, constants.build.uiConfigFilePath)
    )
  } catch (error) {
    throw new Error(formatEsbuildErrorMessage(error.message))
  }
}

function createUiEntryFile(config: Config): null | string {
  const { relaunchButtons, ...command } = config
  const modules: Array<EntryFile> = []
  extractEntryFile(command, 'ui', modules)
  if (relaunchButtons !== null) {
    extractEntryFiles(relaunchButtons, 'ui', modules)
  }
  if (modules.length === 0) {
    return null
  }
  return `
    const rootNode = document.getElementById('create-figma-plugin');
    const modules = ${createRequireCode(modules)};
    const commandId = __FIGMA_COMMAND__ === '' ? '${
      modules[0].commandId
    }' : __FIGMA_COMMAND__;
    if (typeof modules[commandId] === 'undefined') {
      throw new Error(
        'No UI defined for command \`' + commandId + '\`'
      );
    }
    modules[commandId](rootNode, __SHOW_UI_DATA__);
  `
}

function extractEntryFiles(
  items: Array<ConfigCommandSeparator | ConfigCommand | ConfigRelaunchButton>,
  key: 'ui' | 'main',
  result: Array<EntryFile>
): void {
  for (const item of items) {
    if ('separator' in item) {
      continue
    }
    extractEntryFile(item, key, result)
  }
}

function extractEntryFile(
  command: ConfigCommand | ConfigRelaunchButton,
  key: 'ui' | 'main',
  result: Array<EntryFile>
): void {
  const commandId = command.commandId
  if (commandId !== null) {
    const item = command[key] as null | ConfigFile
    if (item !== null) {
      const { src, handler } = item
      result.push({
        commandId,
        handler,
        src
      })
    }
  }
  if ('menu' in command && command.menu !== null) {
    extractEntryFiles(command.menu, key, result)
  }
}

function createRequireCode(entryFiles: Array<EntryFile>): string {
  const code: Array<string> = []
  for (const entryFile of entryFiles) {
    code.push(
      `'${entryFile.commandId}':require('./${entryFile.src}')['${entryFile.handler}']`
    )
  }
  return `{${code.join(',')}}`
}

function formatEsbuildErrorMessage(string: string): string {
  return `esbuild error\n${indentString(string, 4)}`
}
