/**
 * Checks if the given `node` is locked.
 *
 * @returns Returns `true` if the `node` or one of its parent nodes is locked,
 * else `false`.
 * @category Node
 */

export function isLocked(node: SceneNode): boolean {
  if (node.locked === true) {
    return true
  }
  if (node.parent === null || node.parent.type === 'PAGE') {
    return false
  }
  return isLocked(node.parent as SceneNode)
}
