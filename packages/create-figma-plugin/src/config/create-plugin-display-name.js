import { constants } from '@create-figma-plugin/common'
import { capitalCase } from 'capital-case'

export function createPluginDisplayName (name) {
  if (typeof name === 'undefined') {
    return constants.packageJson.defaultPluginDisplayName
  }
  return capitalCase(name.replace(/^figma-/, ''))
}
