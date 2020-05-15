import {
  Config,
  Command,
  RelaunchButton,
  Separator,
  constants
} from '@create-figma-plugin/common'
import { outputFile } from 'fs-extra'
import {
  Manifest,
  ManifestMenuItem,
  ManifestMenuItemSeparator,
  ManifestRelaunchButton
} from './types/manifest'

export async function buildManifestAsync (config: Config): Promise<void> {
  const { name, commandId, main, ui, menu, relaunchButtons } = config
  const command = { name, commandId, main, ui, menu }
  if (hasBundle(command, 'main') === false) {
    throw new Error('Need a `main`')
  }
  const result: Manifest = {
    name: config.name,
    id: config.id,
    api: config.apiVersion,
    main: constants.build.pluginCodeFilePath
  }
  if (hasBundle(command, 'ui') === true) {
    result.ui = constants.build.pluginUiFilePath
  }
  if (menu !== null) {
    result.menu = createMenu(menu) as Array<
      ManifestMenuItem | ManifestMenuItemSeparator
    >
  }
  if (relaunchButtons !== null) {
    result.relaunchButtons = createMenu(relaunchButtons) as Array<
      ManifestRelaunchButton
    >
  }
  const string = JSON.stringify(result) + '\n'
  await outputFile(constants.build.manifestFilePath, string)
}

function hasBundle (command: Command, key: 'main' | 'ui'): boolean {
  if (command[key] !== null) {
    return true
  }
  if (command.menu !== null) {
    return (
      command.menu.filter(function (command) {
        if (command === '-') {
          return false
        }
        return hasBundle(command, key)
      }).length > 0
    )
  }
  return false
}

function createMenu (
  menu: Array<Separator | Command | RelaunchButton>
): Array<
  ManifestMenuItem | ManifestMenuItemSeparator | ManifestRelaunchButton
> {
  return menu.map(function (item) {
    if (item === '-') {
      return { separator: true }
    }
    const result: ManifestMenuItem | ManifestRelaunchButton = {
      name: item.name
    }
    if (item.commandId !== null) {
      result.command = item.commandId
    }
    const menu = (item as Command).menu
    if (menu !== null) {
      ;(result as ManifestMenuItem).menu = createMenu(menu)
    }
    if ((item as RelaunchButton).multipleSelection === true) {
      ;(result as ManifestRelaunchButton).multipleSelection = true
    }
    return result
  })
}
