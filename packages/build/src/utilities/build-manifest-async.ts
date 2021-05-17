import {
  ConfigCommand,
  ConfigCommandSeparator,
  ConfigRelaunchButton,
  constants,
  readConfigAsync
} from '@create-figma-plugin/common'
import fs from 'fs-extra'

import {
  Manifest,
  ManifestMenuItem,
  ManifestMenuItemSeparator,
  ManifestRelaunchButton
} from '../types/manifest.js'

export async function buildManifestAsync(minify: boolean): Promise<void> {
  const config = await readConfigAsync()
  const {
    build,
    enablePrivatePluginApi,
    enableProposedApi,
    name,
    commandId,
    main,
    ui,
    menu,
    relaunchButtons
  } = config
  const command = { commandId, main, menu, name, ui }
  if (hasBundle(command, 'main') === false) {
    throw new Error('Need a `main` entry point')
  }
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  const result: Manifest = {
    name: config.name,
    id: config.id,
    api: config.apiVersion,
    main: constants.build.pluginCodeFilePath
  }
  /* eslint-enable sort-keys-fix/sort-keys-fix */
  if (hasBundle(command, 'ui') === true) {
    result.ui = constants.build.pluginUiFilePath
  } else {
    if (relaunchButtons !== null) {
      const relaunchButtonsWithUi = relaunchButtons.filter(function (
        relaunchButton: ConfigRelaunchButton
      ): boolean {
        return relaunchButton.ui !== null
      })
      if (relaunchButtonsWithUi.length > 0) {
        result.ui = constants.build.pluginUiFilePath
      }
    }
  }
  if (command.menu !== null) {
    result.menu = createMenu(command.menu)
  }
  if (relaunchButtons !== null) {
    result.relaunchButtons = createRelaunchButtons(relaunchButtons)
  }
  if (enableProposedApi === true) {
    result.enableProposedApi = true
  }
  if (enablePrivatePluginApi === true) {
    result.enablePrivatePluginApi = true
  }
  if (build !== null) {
    result.build = build
  }
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
