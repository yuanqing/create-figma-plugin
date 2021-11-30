/**
 * Checks if the given `node` is truely locked
 *
 * @returns Returns `true` if the `node` or one of its parents is locked,
 * else `false`.
 * @category Node
 */

export function isLocked(node: SceneNode): boolean {
  if (node.locked) {
    return true
  }
  if (node.parent === null || node.parent.type === 'PAGE') {
    return false
  }
  return isLocked(node.parent as SceneNode)
}
