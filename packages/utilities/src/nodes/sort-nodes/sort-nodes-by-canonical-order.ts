import { areSiblingNodes } from '../are-sibling-nodes'

export function sortNodesByCanonicalOrder (
  nodes: Array<SceneNode>
): Array<SceneNode> {
  if (nodes.length < 2) {
    return nodes.slice()
  }
  const parent = nodes[0].parent
  if (parent === null) {
    throw new Error('Node has no parent')
  }
  if (areSiblingNodes(nodes) === false) {
    throw new Error('Nodes do not have the same parent')
  }
  return nodes
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
