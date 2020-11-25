/**
 * Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
 * on `node` for the command with the given `relaunchButtonId` as configured
 * under [**`"relaunchButtons"`**](/docs/configuration.md#relaunchbuttons) in
 * `package.json`. `description` is the text displayed below the relaunch
 * button in the Figma UI.
 *
 * See the [recipe for configuring relaunch buttons](/docs/recipes/relaunch-buttons.md#readme).
 *
 * @category Node
 */
export function setRelaunchButton(
  node: BaseNode,
  key: string,
  options?: { description: string }
) {
  const description = options?.description || ''
  node.setRelaunchData({ [key]: description })
}
