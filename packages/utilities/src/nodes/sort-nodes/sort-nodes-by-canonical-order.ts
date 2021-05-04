import { areSiblingNodes } from '../are-sibling-nodes'
import { getParentNode } from '../get-nodes/get-parent-node'

/**
 * Sorts `siblingNodes` according to their layer list order. Does not modify
 * the original `siblingNodes` array.
 *
 * @returns Returns a new array of `SceneNode` objects.
 * @category Node
 */
export function sortNodesByCanonicalOrder<N extends SceneNode>(
  siblingNodes: Array<N>
): Array<N> {
  if (siblingNodes.length < 2) {
    return siblingNodes.slice()
  }
  const parentNode = getParentNode(siblingNodes[0])
  if (areSiblingNodes(siblingNodes) === false) {
    throw new Error('Nodes in `siblingNodes` do not have the same parent')
  }
  return siblingNodes
    .slice()
    .map(function (node: N): { index: number; node: N } {
      return {
        index: parentNode.children.indexOf(node),
        node
      }
    })
    .sort(function (a: { index: number }, b: { index: number }): number {
      return a.index - b.index
    })
    .map(function ({ node }: { node: N }): N {
      return node
    })
}
