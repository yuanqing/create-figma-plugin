import { constants } from '@create-figma-plugin/common'
import { titleCase } from 'title-case'

import { Settings } from '../types/settings.js'

export function createSettings(options: {
  name?: string
  template?: string
}): Settings {
  const { name, template } = options
  return {
    displayName:
      typeof name === 'undefined'
        ? constants.packageJson.defaultPluginDisplayName
        : createPluginDisplayName(name),
    figmaPluginTypingsVersion: constants.figmaPluginTypingsVersion,
    name:
      typeof name === 'undefined'
        ? constants.packageJson.defaultPluginName
        : name,
    template:
      typeof template === 'undefined' ? constants.defaultTemplateName : template
  }
}

function createPluginDisplayName(name: string): string {
  return titleCase(name.replace(/^figma-/, '').replace(/-/g, ' '))
}
