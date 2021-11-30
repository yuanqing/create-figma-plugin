/**
 * Checks if the given `node` is truely visible
 *
 * @returns Returns `true` if the `node` and all its parents are visible,
 * else `false`.
 * @category Node
 */

export function isVisible(node: SceneNode): boolean {
  if (!node.visible) {
    return false
  }
  if (node.parent === null || node.parent.type === 'PAGE') {
    return true
  }
  return isVisible(node.parent as SceneNode)
}
