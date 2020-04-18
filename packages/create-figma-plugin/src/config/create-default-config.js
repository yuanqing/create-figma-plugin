import gitUserName from 'git-user-name'
import { constants } from '@create-figma-plugin/common'
import { createPluginDisplayName } from './create-plugin-display-name'

export function createDefaultConfig ({ name, template }) {
  return {
    name:
      typeof name === 'undefined'
        ? constants.packageJson.defaultPluginName
        : name,
    displayName: createPluginDisplayName(name),
    template:
      typeof template === 'undefined' ? constants.defaultTemplate : template,
    version: constants.defaultVersion,
    author: gitUserName(),
    license: constants.defaultLicense
  }
}
