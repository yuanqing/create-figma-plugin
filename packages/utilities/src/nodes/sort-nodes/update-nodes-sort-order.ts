import { compareStringArrays } from '../../object'
import { areSiblingNodes } from '../are-sibling-nodes'

/**
 * Updates the layer list sort order to follow the sort order of the nodes
 * in the `siblingNodes` array.
 *
 * @category Node
 */
export function updateNodesSortOrder(siblingNodes: Array<SceneNode>): boolean {
  const parent = siblingNodes[0].parent
  if (parent === null) {
    throw new Error('Node has no parent')
  }
  if (areSiblingNodes(siblingNodes) === false) {
    throw new Error('Nodes do not have the same parent')
  }
  const copy = siblingNodes.slice()
  const ids = parent.children.map(function ({ id }) {
    return id
  })
  const insertIndex = computeInsertIndex(copy, ids)
  copy.forEach(function (node) {
    parent.insertChild(insertIndex, node)
  })
  const idsAfter = parent.children.map(function ({ id }) {
    return id
  })
  return compareStringArrays(ids, idsAfter) === false
}

function computeInsertIndex(
  nodes: Array<SceneNode>,
  ids: Array<string>
): number {
  let insertIndex = -1
  nodes.forEach(function (node) {
    const index = ids.indexOf(node.id)
    if (index > insertIndex) {
      insertIndex = index
    }
  })
  return insertIndex + 1
}
