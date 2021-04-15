/**
 * Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
 * on `node` for the command with the given `relaunchButtonId` as configured
 * under [**`"relaunchButtons"`**](#relaunchbuttons) in
 * `package.json`. `description` is the text displayed below the relaunch
 * button in the Figma UI.
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
  node.setRelaunchData({ [relaunchButtonId]: options.description })
}
