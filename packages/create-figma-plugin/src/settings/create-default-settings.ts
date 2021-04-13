import { constants } from '@create-figma-plugin/common'
import * as gitUserName from 'git-user-name'

import type { Settings } from '../types/settings'
import { createPluginDisplayName } from './create-plugin-display-name'

export function createDefaultSettings(options: Settings): Settings {
  const { name, template } = options
  const author = gitUserName()
  return {
    author: author === null ? undefined : author,
    displayName:
      typeof name === 'undefined'
        ? constants.packageJson.defaultPluginDisplayName
        : createPluginDisplayName(name),
    license: constants.packageJson.defaultLicense,
    name:
      typeof name === 'undefined'
        ? constants.packageJson.defaultPluginName
        : name,
    template:
      typeof template === 'undefined' ? constants.defaultTemplate : template,
    version: constants.packageJson.defaultVersion
  }
}
