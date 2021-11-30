/**
 * Checks if the given `node` is truely visible
 *
 * @returns Returns `true` if the `node` and all its parents are visible,
 * else `false`.
 * @category Node
 */

export function isVisible(node: BaseNode): boolean {
  if ((node as SceneNode).visible) {
    if (node.parent) {
      if (node.parent.type === 'PAGE') return true
      return isVisible(node.parent)
    }
    return true
  }
  return false
}
