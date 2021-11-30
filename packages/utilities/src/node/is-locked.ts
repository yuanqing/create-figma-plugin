/**
 * Checks if the given `node` is truely locked
 *
 * @returns Returns `true` if the `node` or one of its parents is locked,
 * else `false`.
 * @category Node
 */

export function isLocked(node: BaseNode): boolean {
  if ((node as SceneNode).locked) {
    if (node.parent) {
      if (node.parent.type === 'PAGE') return true
      return isLocked(node.parent)
    }
    return true
  }
  return false
}
