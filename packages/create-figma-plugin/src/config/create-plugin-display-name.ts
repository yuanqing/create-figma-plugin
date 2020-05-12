import { constants } from '@create-figma-plugin/common'
import * as titleCase from 'titlecase'

export function createPluginDisplayName (name) {
  if (typeof name === 'undefined') {
    return constants.packageJson.defaultPluginDisplayName
  }
  return titleCase(name.replace(/^figma-/, '').replace(/-/g, ' '))
}
