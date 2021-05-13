import { getParentNode } from '../get-nodes/get-parent-node.js'

/**
 * Inserts `node` *after* the `referenceNode` in the layer list.
 *
 * @category Node
 */
export function insertAfterNode(
  node: SceneNode,
  referenceNode: SceneNode
): void {
  const parentNode = getParentNode(referenceNode)
  const index = parentNode.children.indexOf(referenceNode)
  parentNode.insertChild(index, node)
}
