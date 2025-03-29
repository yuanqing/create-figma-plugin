/* eslint-disable sort-keys */

import fs from 'node:fs/promises'
import { join } from 'node:path'

import slugify from '@sindresorhus/slugify'
import { pathExists } from 'path-exists'

import { constants } from './constants.js'
import { log } from './log.js'
import {
  Config,
  ConfigCommand,
  ConfigFile,
  ConfigMenuItemSeparator,
  ConfigParameter,
  ConfigRelaunchButton
} from './types/config.js'
import {
  RawConfigCommand,
  RawConfigFile,
  RawConfigParameter,
  RawConfigRelaunchButtons
} from './types/private/raw-config.js'

const defaultConfig: Config = {
  id: constants.packageJson.defaultName,
  api: constants.build.manifestPluginApi,
  widgetApi: constants.build.manifestWidgetApi,
  editorType: ['figma'],
  containsWidget: false,
  commandId: join(constants.build.srcDirectoryName, 'main.ts--default'),
  name: constants.packageJson.defaultName,
  main: {
    src: join(constants.build.srcDirectoryName, 'main.ts'),
    handler: 'default'
  },
  ui: null,
  menu: null,
  parameters: null,
  parameterOnly: true,
  relaunchButtons: null,
  rest: null
}

export async function readConfigAsync(): Promise<Config> {
  const packageJsonPath = join(process.cwd(), 'package.json')
  if ((await pathExists(packageJsonPath)) === false) {
    log.info('Using default configuration')
    return defaultConfig
  }
  const packageJson: any = JSON.parse(
    await fs.readFile(packageJsonPath, 'utf8')
  )
  const config = packageJson[constants.packageJson.configKey]
  if (typeof config === 'undefined' || Object.keys(config).length === 0) {
    return defaultConfig
  }
  const {
    id,
    api,
    widgetApi,
    editorType,
    containsWidget,
    name,
    main,
    ui,
    menu,
    parameters,
    parameterOnly,
    relaunchButtons,
    ...rest
  } = config
  return {
    api: typeof api === 'undefined' ? constants.build.manifestPluginApi : api,
    widgetApi:
      typeof widgetApi === 'undefined'
        ? constants.build.manifestWidgetApi
        : widgetApi,
    ...parseCommand({ name, ui, main, menu, parameters, parameterOnly }),
    editorType: typeof editorType === 'undefined' ? ['figma'] : editorType,
    containsWidget:
      typeof containsWidget === 'undefined' ? false : containsWidget,
    id: typeof id === 'undefined' ? slugify(name) : id,
    relaunchButtons:
      typeof relaunchButtons === 'undefined'
        ? null
        : parseRelaunchButtons(relaunchButtons),
    rest: Object.keys(rest).length === 0 ? null : rest
  }
}

function parseCommand(command: RawConfigCommand): ConfigCommand {
  const { name, main, ui, menu, parameters, parameterOnly } = command
  return {
    commandId: typeof main === 'undefined' ? null : parseCommandId(main),
    name,
    main: typeof main === 'undefined' ? null : parseFile(main),
    ui: typeof ui === 'undefined' ? null : parseFile(ui),
    menu:
      typeof menu === 'undefined'
        ? null
        : menu.map(function (
            command: RawConfigCommand | '-'
          ): ConfigCommand | ConfigMenuItemSeparator {
            if (command === '-') {
              return { separator: true }
            }
            return parseCommand(command)
          }),
    parameters:
      typeof parameters === 'undefined' ? null : parseParameters(parameters),
    parameterOnly: typeof parameterOnly === 'undefined' ? true : parameterOnly
  }
}

function parseCommandId(main: RawConfigFile): string {
  if (typeof main === 'string') {
    return `${main}--default`
  }
  const { src, handler } = main
  if (typeof handler === 'undefined') {
    return `${src}--default`
  }
  return `${src}--${handler}`
}

function parseParameters(
  parameters: Array<RawConfigParameter>
): Array<ConfigParameter> {
  const result: Array<ConfigParameter> = []
  for (const parameter of parameters) {
    const { allowFreeform, description, key, name, optional } = parameter
    result.push({
      allowFreeform:
        typeof allowFreeform === 'undefined' ? false : allowFreeform,
      description: typeof description === 'undefined' ? null : description,
      key,
      name: typeof name === 'undefined' ? key : name,
      optional: typeof optional === 'undefined' ? false : optional
    })
  }
  return result
}

function parseRelaunchButtons(
  relaunchButtons: RawConfigRelaunchButtons
): Array<ConfigRelaunchButton> {
  const result: Array<ConfigRelaunchButton> = []
  for (const commandId in relaunchButtons) {
    const { name, main, ui, multipleSelection } = relaunchButtons[commandId]
    if (typeof main === 'undefined') {
      throw new Error(`Need a \`main\` for relaunch button: ${name}`)
    }
    result.push({
      commandId,
      main: parseFile(main),
      multipleSelection:
        typeof multipleSelection === 'undefined' ? false : multipleSelection,
      name,
      ui: typeof ui === 'undefined' ? null : parseFile(ui)
    })
  }
  return result
}

function parseFile(file: RawConfigFile): ConfigFile {
  if (typeof file === 'string') {
    return {
      src: file,
      handler: 'default'
    }
  }
  const { src, handler } = file
  if (typeof handler === 'undefined') {
    return {
      src,
      handler: 'default'
    }
  }
  return { src, handler }
}
