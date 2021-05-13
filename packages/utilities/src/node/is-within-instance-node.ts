/**
 * Checks if the given `node` is within an Instance node.
 *
 * @returns Returns `true` if the `node` is within an Instance node,
 * else `false`.
 * @category Node
 */
export function isWithinInstanceNode(node: SceneNode): boolean {
  const parentNode = node.parent
  if (
    parentNode === null ||
    parentNode.type === 'DOCUMENT' ||
    parentNode.type === 'PAGE'
  ) {
    return false
  }
  if (parentNode.type === 'INSTANCE') {
    return true
  }
  return isWithinInstanceNode(parentNode)
}
