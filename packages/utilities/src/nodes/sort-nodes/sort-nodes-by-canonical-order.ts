import { areSiblingNodes } from '../are-sibling-nodes'
import { getParentNode } from '../get-nodes/get-parent-node'

/**
 * Sorts `siblingNodes` according to their layer list order. Does not modify
 * the original `siblingNodes` array.
 *
 * @returns Returns a new array of `SceneNode` objects.
 * @category Node
 */
export function sortNodesByCanonicalOrder<T extends SceneNode>(
  siblingNodes: Array<T>
): Array<T> {
  if (siblingNodes.length < 2) {
    return siblingNodes.slice()
  }
  const parentNode = getParentNode(siblingNodes[0])
  if (areSiblingNodes(siblingNodes) === false) {
    throw new Error('Nodes in `siblingNodes` do not have the same parent')
  }
  return siblingNodes
    .slice()
    .map(function (node) {
      return {
        index: parentNode.children.indexOf(node),
        node
      }
    })
    .sort(function (a, b) {
      return a.index - b.index
    })
    .map(function ({ node }) {
      return node
    })
}
