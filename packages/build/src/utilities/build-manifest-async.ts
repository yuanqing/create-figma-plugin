import {
  ConfigCommand,
  ConfigCommandSeparator,
  ConfigParameter,
  ConfigRelaunchButton,
  constants,
  readConfigAsync
} from '@create-figma-plugin/common'
import {
  ConfigCodegenPreference,
  ConfigCodegenPreferenceOption
} from '@create-figma-plugin/common/lib/types/config'
import fs from 'fs-extra'
import { globby } from 'globby'

import {
  Manifest,
  ManifestCodegenPreference,
  ManifestCodegenPreferenceOption,
  ManifestMenuItem,
  ManifestMenuItemSeparator,
  ManifestParameter,
  ManifestRelaunchButton
} from '../types/manifest.js'

export async function buildManifestAsync(minify: boolean): Promise<void> {
  const config = await readConfigAsync()
  const {
    api,
    build,
    capabilities,
    codegenLanguages,
    codegenPreferences,
    commandId,
    containsWidget,
    editorType,
    enablePrivatePluginApi,
    enableProposedApi,
    id,
    main,
    menu,
    name,
    parameterOnly,
    parameters,
    permissions,
    relaunchButtons,
    ui,
    widgetApi
  } = config
  const command = { commandId, main, menu, name, parameterOnly, parameters, ui }
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
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  const manifest: Manifest = {
    api,
    widgetApi: containsWidget === true ? widgetApi : undefined,
    editorType,
    containsWidget: containsWidget === true ? containsWidget : undefined,
    id,
    name,
    main: constants.build.pluginCodeFilePath,
    ui: hasUi === true ? constants.build.pluginUiFilePath : undefined,
    parameters:
      command.parameters !== null
        ? createParameters(command.parameters)
        : undefined,
    parameterOnly: command.parameterOnly === false ? false : undefined,
    menu: command.menu !== null ? createMenu(command.menu) : undefined,
    relaunchButtons:
      relaunchButtons !== null
        ? createRelaunchButtons(relaunchButtons)
        : undefined,
    permissions: permissions !== null ? permissions : undefined,
    capabilities: capabilities !== null ? capabilities : undefined,
    codegenLanguages: codegenLanguages !== null ? codegenLanguages : undefined,
    codegenPreferences:
      codegenPreferences !== null
        ? createCodegenPreferences(codegenPreferences)
        : undefined,
    enableProposedApi: enableProposedApi === true ? true : undefined,
    enablePrivatePluginApi: enablePrivatePluginApi === true ? true : undefined,
    build: build !== null ? build : undefined
  }
  /* eslint-enable sort-keys-fix/sort-keys-fix */
  const result = await overrideManifestAsync(manifest)
  const string =
    (minify === true
      ? JSON.stringify(result)
      : JSON.stringify(result, null, 2)) + '\n'
  await fs.outputFile(constants.build.manifestFilePath, string)
}

function hasBundle(command: ConfigCommand, key: 'main' | 'ui'): boolean {
  if (command[key] !== null) {
    return true
  }
  if (command.menu !== null) {
    const result = command.menu.filter(function (
      command: ConfigCommand | ConfigCommandSeparator
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

function createParameters(
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

function createMenu(
  menu: Array<ConfigCommand | ConfigCommandSeparator>
): Array<ManifestMenuItem | ManifestMenuItemSeparator> {
  return menu.map(function (
    item: ConfigCommand | ConfigCommandSeparator
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
      result.parameters = createParameters(item.parameters)
    }
    if (item.parameterOnly === false) {
      result.parameterOnly = false
    }
    if (item.menu !== null) {
      result.menu = createMenu(item.menu)
    }
    return result
  })
}

function createRelaunchButtons(
  relaunchButtons: Array<ConfigRelaunchButton>
): Array<ManifestRelaunchButton> {
  return relaunchButtons.map(function (
    relaunchButton: ConfigRelaunchButton
  ): ManifestRelaunchButton {
    /* eslint-disable sort-keys-fix/sort-keys-fix */
    const result: ManifestRelaunchButton = {
      name: relaunchButton.name,
      command: relaunchButton.commandId
    }
    /* eslint-enable sort-keys-fix/sort-keys-fix */
    if (relaunchButton.multipleSelection === true) {
      result.multipleSelection = true
    }
    return result
  })
}

function createCodegenPreferenceOptions(
  options: Array<ConfigCodegenPreferenceOption>
): Array<ManifestCodegenPreferenceOption> {
  return options.map(function (
    option: ConfigCodegenPreferenceOption
  ): ManifestCodegenPreferenceOption {
    const result: ManifestCodegenPreferenceOption = {
      label: option.label,
      value: option.value
    }

    if (option.isDefault === true) {
      result.isDefault = true
    }

    return result
  })
}

function createCodegenPreferences(
  preferences: Array<ConfigCodegenPreference>
): Array<ManifestCodegenPreference> {
  return preferences.map(function (
    preference: ConfigCodegenPreference
  ): ManifestCodegenPreference {
    const result: ManifestCodegenPreference = {
      itemType: preference.itemType
    }

    if (preference.defaultScaleFactor !== null) {
      result.defaultScaleFactor = preference.defaultScaleFactor
    }

    if (preference.scaledUnit !== null) {
      result.scaledUnit = preference.scaledUnit
    }

    if (preference.default === true) {
      result.default = true
    }

    if (preference.propertyName !== null) {
      result.propertyName = preference.propertyName
    }

    if (preference.label !== null) {
      result.label = preference.label
    }

    if (preference.options !== null) {
      result.options = createCodegenPreferenceOptions(preference.options)
    }

    if (preference.includedLanguages !== null) {
      result.includedLanguages = preference.includedLanguages
    }

    return result
  })
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
  const { default: overrideManifest } = await import(filePaths[0])
  return overrideManifest(manifest)
}
