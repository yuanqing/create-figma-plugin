import { getParentNode } from '../get-nodes/get-parent-node.js'

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
  const firstParentNode = getParentNode(firstNode)
  for (const node of rest) {
    if (node.parent === null || node.parent.id !== firstParentNode.id) {
      return false
    }
  }
  return true
}
