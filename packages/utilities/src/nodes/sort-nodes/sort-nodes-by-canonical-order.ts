import { areSiblingNodes } from '../are-sibling-nodes'

/**
 * Sorts `siblingNodes` according to their layer list order. Does not modify
 * the original `siblingNodes` array.
 *
 * @returns A new array of `SceneNode` objects
 */
export function sortNodesByCanonicalOrder(
  siblingNodes: Array<SceneNode>
): Array<SceneNode> {
  if (siblingNodes.length < 2) {
    return siblingNodes.slice()
  }
  const parent = siblingNodes[0].parent
  if (parent === null) {
    throw new Error('Node has no parent')
  }
  if (areSiblingNodes(siblingNodes) === false) {
    throw new Error('Nodes do not have the same parent')
  }
  return siblingNodes
    .slice()
    .map(function (node) {
      return {
        index: parent.children.indexOf(node),
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
