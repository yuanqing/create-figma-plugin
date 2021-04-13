import type {
  Config,
  ConfigCommand,
  ConfigCommandSeparator,
  ConfigFile,
  ConfigRelaunchButton
} from '@create-figma-plugin/common'
import { constants, readConfigAsync } from '@create-figma-plugin/common'
import { build } from 'esbuild'
import { join } from 'path'

import { esbuildCssModulesPlugin } from './esbuild-css-modules-plugin'
import { typeCheckAsync } from './type-check-async'
import type { BuildOptions } from './types/build'

interface EntryFile extends ConfigFile {
  commandId: string
}

export async function buildBundlesAsync(options: BuildOptions): Promise<void> {
  const config = await readConfigAsync()
  if (options.typecheck === true) {
    await typeCheckAsync()
  }
  try {
    await buildMainBundleAsync(config, options.minify)
    await buildUiBundleAsync(config, options.minify)
  } catch (error) {
    throw new Error(`esbuild error\n${error.message}`)
  }
}

async function buildMainBundleAsync(
  config: Config,
  minify: boolean
): Promise<void> {
  const js = createMainEntryFile(config)
  await build({
    bundle: true,
    logLevel: 'error',
    minify,
    outfile: join(process.cwd(), constants.build.directoryName, 'main.js'),
    stdin: {
      contents: js,
      resolveDir: process.cwd()
    },
    target: 'es2017'
  })
}

function createMainEntryFile(config: Config): string {
  const { relaunchButtons, ...command } = config
  const modules: Array<EntryFile> = []
  extractModule(command, 'main', modules)
  if (modules.length === 0) {
    throw new Error('Need a main entry point')
  }
  if (relaunchButtons !== null) {
    extractModules(relaunchButtons, 'main', modules)
  }
  return `
    const modules = ${createRequireCode(modules)};
    const commandId = (${modules.length === 1} || figma.command === '') ? '${
    modules[0].commandId
  }' : figma.command;
    modules[commandId]();
  `
}

async function buildUiBundleAsync(
  config: Config,
  minify: boolean
): Promise<void> {
  const js = createUiEntryFile(config)
  if (js === null) {
    return
  }
  await build({
    bundle: true,
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    logLevel: 'error',
    minify,
    outfile: join(process.cwd(), constants.build.directoryName, 'ui.js'),
    plugins: [esbuildCssModulesPlugin(minify)],
    stdin: {
      contents: js,
      resolveDir: process.cwd()
    },
    target: 'chrome58'
  })
}

function createUiEntryFile(config: Config): null | string {
  const { relaunchButtons, ...command } = config
  const modules: EntryFile[] = []
  extractModule(command, 'ui', modules)
  if (relaunchButtons !== null) {
    extractModules(relaunchButtons, 'ui', modules)
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
        'UI not defined for the command corresponding to ' + commandId
      );
    }
    modules[commandId](rootNode, __SHOW_UI_DATA__);
  `
}

function extractModules(
  items: Array<ConfigCommandSeparator | ConfigCommand | ConfigRelaunchButton>,
  key: 'ui' | 'main',
  result: Array<EntryFile>
): void {
  for (const item of items) {
    if ('separator' in item) {
      continue
    }
    extractModule(item, key, result)
  }
}

function extractModule(
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
    extractModules(command.menu, key, result)
  }
}

function createRequireCode(entryFiles: Array<EntryFile>): string {
  const code: string[] = []
  for (const entryFile of entryFiles) {
    code.push(
      `'${entryFile.commandId}':require('./${entryFile.src}')['${entryFile.handler}']`
    )
  }
  return `{${code.join(',')}}`
}
