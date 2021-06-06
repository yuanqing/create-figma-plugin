import {
  getRelaunchButtonsData,
  setRelaunchButtonsData
} from './private/update-relaunch-buttons-data'

/**
 * Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
 * on `node` for the command with the given `relaunchButtonId` as configured
 * under the [**`"relaunchButtons"`**](#relaunchbuttons) key in `package.json`.
 * Any relaunch buttons set previously will be retained. `description` is the
 * text displayed below the relaunch button in the Figma UI.
 *
 * See the [recipe for configuring relaunch buttons](#configuring-relaunch-buttons).
 *
 * @category Node
 */
export function setRelaunchButton(
  node: BaseNode,
  relaunchButtonId: string,
  options: { description: string } = { description: '' }
): void {
  const relaunchButtonsData = {
    ...getRelaunchButtonsData(node),
    [relaunchButtonId]: options.description
  }
  setRelaunchButtonsData(node, relaunchButtonsData)
  node.setRelaunchData(relaunchButtonsData)
}
