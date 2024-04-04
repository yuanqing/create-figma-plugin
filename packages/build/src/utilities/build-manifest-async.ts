/* eslint-disable sort-keys-fix/sort-keys-fix */

import { resolve } from 'node:path'

import {
  Config,
  ConfigCommand,
  ConfigMenuItemSeparator,
  ConfigNetworkAccess,
  ConfigParameter,
  ConfigRelaunchButton,
  constants,
  Manifest,
  ManifestMenuItem,
  ManifestMenuItemSeparator,
  ManifestNetworkAccess,
  ManifestParameter,
  ManifestRelaunchButton,
  writeFileAsync
} from '@create-figma-plugin/common'
import { globby } from 'globby'

import { importFresh } from './import-fresh.js'

export async function buildManifestAsync(options: {
  config: Config
  minify: boolean
  outputDirectory: string
}): Promise<void> {
  const { config, minify, outputDirectory } = options
  const {
    api,
    widgetApi,
    editorType,
    containsWidget,
    commandId,
    id,
    name,
    main,
    ui,
    menu,
    parameters,
    parameterOnly,
    relaunchButtons,
    capabilities,
    permissions,
    documentAccess,
    networkAccess,
    enablePrivatePluginApi,
    enableProposedApi,
    build,
    rest
  } = config
  const command = { commandId, name, main, ui, menu, parameters, parameterOnly }
  if (hasBundle(command, 'main') === false) {
    throw new Error('Need a `main` entry point')
  }
  const hasUi =
    hasBundle(command, 'ui') === true ||
    (relaunchButtons !== null &&
      relaunchButtons.filter(function (
        relaunchButton: ConfigRelaunchButton
      ): boolean {
        return relaunchButton.ui !== null
      }).length > 0)
  const manifest: Manifest = {
    api,
    widgetApi: containsWidget === true ? widgetApi : undefined,
    editorType,
    containsWidget: containsWidget === true ? containsWidget : undefined,
    id,
    name,
    main: constants.build.pluginCodeFilePath,
    ui: hasUi === true ? constants.build.pluginUiFilePath : undefined,
    menu: command.menu !== null ? createManifestMenu(command.menu) : undefined,
    parameters:
      command.parameters !== null
        ? createManifestParameters(command.parameters)
        : undefined,
    parameterOnly: command.parameterOnly === false ? false : undefined,
    relaunchButtons:
      relaunchButtons !== null
        ? createManifestRelaunchButtons(relaunchButtons)
        : undefined,
    capabilities: capabilities !== null ? capabilities : undefined,
    permissions: permissions !== null ? permissions : undefined,
    documentAccess: documentAccess !== null ? documentAccess : undefined,
    networkAccess:
      networkAccess !== null
        ? createManifestNetworkAccess(networkAccess)
        : undefined,
    enableProposedApi: enableProposedApi === true ? true : undefined,
    enablePrivatePluginApi: enablePrivatePluginApi === true ? true : undefined,
    build: build !== null ? build : undefined,
    ...(rest !== null ? rest : {})
  }
  const result = await overrideManifestAsync(manifest)
  const string =
    (minify === true
      ? JSON.stringify(result)
      : JSON.stringify(result, null, 2)) + '\n'
  const outputFilePath = resolve(
    outputDirectory,
    constants.build.manifestFilePath
  )
  await writeFileAsync(outputFilePath, string)
}

function hasBundle(command: ConfigCommand, key: 'main' | 'ui'): boolean {
  if (command[key] !== null) {
    return true
  }
  if (command.menu !== null) {
    const result = command.menu.filter(function (
      command: ConfigCommand | ConfigMenuItemSeparator
    ): boolean {
      if ('separator' in command) {
        return false
      }
      return hasBundle(command, key)
    })
    return result.length > 0
  }
  return false
}

function createManifestParameters(
  parameters: Array<ConfigParameter>
): Array<ManifestParameter> {
  return parameters.map(function (
    parameter: ConfigParameter
  ): ManifestParameter {
    const result: ManifestParameter = {
      key: parameter.key,
      name: parameter.name
    }
    if (parameter.description !== null) {
      result.description = parameter.description
    }
    if (parameter.allowFreeform === true) {
      result.allowFreeform = true
    }
    if (parameter.optional === true) {
      result.optional = true
    }
    return result
  })
}

function createManifestMenu(
  menu: Array<ConfigCommand | ConfigMenuItemSeparator>
): Array<ManifestMenuItem | ManifestMenuItemSeparator> {
  return menu.map(function (
    item: ConfigCommand | ConfigMenuItemSeparator
  ): ManifestMenuItem | ManifestMenuItemSeparator {
    if ('separator' in item) {
      return { separator: true }
    }
    const result: ManifestMenuItem = {
      name: item.name
    }
    if (item.commandId !== null) {
      result.command = item.commandId
    }
    if (item.parameters !== null) {
      result.parameters = createManifestParameters(item.parameters)
    }
    if (item.parameterOnly === false) {
      result.parameterOnly = false
    }
    if (item.menu !== null) {
      result.menu = createManifestMenu(item.menu)
    }
    return result
  })
}

function createManifestRelaunchButtons(
  relaunchButtons: Array<ConfigRelaunchButton>
): Array<ManifestRelaunchButton> {
  return relaunchButtons.map(function (
    relaunchButton: ConfigRelaunchButton
  ): ManifestRelaunchButton {
    const result: ManifestRelaunchButton = {
      name: relaunchButton.name,
      command: relaunchButton.commandId
    }
    if (relaunchButton.multipleSelection === true) {
      result.multipleSelection = true
    }
    return result
  })
}

function createManifestNetworkAccess(
  networkAccess: ConfigNetworkAccess
): ManifestNetworkAccess {
  const { allowedDomains, devAllowedDomains, reasoning } = networkAccess
  const result: ManifestNetworkAccess = {
    allowedDomains
  }
  if (devAllowedDomains !== null) {
    result.devAllowedDomains = devAllowedDomains
  }
  if (reasoning !== null) {
    result.reasoning = reasoning
  }
  return result
}

async function overrideManifestAsync(
  manifest: Manifest
): Promise<Record<string, any>> {
  const filePaths = await globby(constants.build.manifestConfigGlobPattern, {
    absolute: true
  })
  if (filePaths.length === 0) {
    return manifest
  }
  const { default: overrideManifest } = await importFresh(filePaths[0])
  return overrideManifest(manifest)
}
