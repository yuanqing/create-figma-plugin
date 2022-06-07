import {
  getRelaunchButtonsData,
  setRelaunchButtonsData
} from './private/update-relaunch-buttons-data.js'

/**
 * Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
 * on `node` for the command with the given `relaunchButtonId` as configured
 * under the [**`"relaunchButtons"`**](<%- query('page', 'configuration').url %>#relaunchbuttons) key in `package.json`.
 * Any relaunch buttons set previously will be retained.
 *
 * See the [recipe for configuring relaunch buttons](<%- query('page', 'recipes').url %>#configuring-relaunch-buttons).
 *
 * @param options.description  The text to display below the relaunch button
 * in the Figma UI.
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
