/**
 * Checks if the given `node` is visible.
 *
 * @returns Returns `true` if the `node` and all its parent nodes are visible,
 * else `false`.
 * @category Node
 */

export function isVisible(node: SceneNode): boolean {
  if (node.visible === false) {
    return false
  }
  if (node.parent === null || node.parent.type === 'PAGE') {
    return true
  }
  return isVisible(node.parent as SceneNode)
}
