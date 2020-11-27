/**
 * Checks if all nodes in `nodes` are sibling nodes.
 *
 * @returns Returns `true` if all nodes in `nodes` are sibling nodes,
 * else `false`.
 * @category Node
 */
export function areSiblingNodes(nodes: Array<SceneNode>): boolean {
  if (nodes.length < 2) {
    return true
  }
  const [firstNode, ...rest] = nodes
  if (firstNode.parent === null) {
    return false
  }
  const parentId = firstNode.parent.id
  for (const node of rest) {
    if (node.parent === null || node.parent.id !== parentId) {
      return false
    }
  }
  return true
}
