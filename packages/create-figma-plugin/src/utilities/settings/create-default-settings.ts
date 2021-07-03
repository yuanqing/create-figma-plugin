import { constants } from '@create-figma-plugin/common'

import { Settings } from '../../types/settings.js'
import { createPluginDisplayName } from './create-plugin-display-name.js'

export function createDefaultSettings(options: {
  name?: string
  template?: string
}): Settings {
  const { name, template } = options
  return {
    displayName:
      typeof name === 'undefined'
        ? constants.packageJson.defaultPluginDisplayName
        : createPluginDisplayName(name),
    name:
      typeof name === 'undefined'
        ? constants.packageJson.defaultPluginName
        : name,
    template:
      typeof template === 'undefined' ? constants.defaultTemplate : template
  }
}
