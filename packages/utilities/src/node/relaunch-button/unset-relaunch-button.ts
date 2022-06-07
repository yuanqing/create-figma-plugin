import {
  getRelaunchButtonsData,
  setRelaunchButtonsData
} from './private/update-relaunch-buttons-data.js'

/**
 * Unsets the [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
 * on `node` for the command with the given `relaunchButtonId`. If
 * `relaunchButtonId` is not specified, unsets all relaunch buttons on `node`.
 *
 * @category Node
 */
export function unsetRelaunchButton(
  node: BaseNode,
  relaunchButtonId?: string
): void {
  if (typeof relaunchButtonId === 'undefined') {
    setRelaunchButtonsData(node, {})
    node.setRelaunchData({})
    return
  }
  const relaunchButtonsData = getRelaunchButtonsData(node)
  if (typeof relaunchButtonsData[relaunchButtonId] !== 'undefined') {
    delete relaunchButtonsData[relaunchButtonId]
  }
  setRelaunchButtonsData(node, relaunchButtonsData)
  node.setRelaunchData(relaunchButtonsData)
}
