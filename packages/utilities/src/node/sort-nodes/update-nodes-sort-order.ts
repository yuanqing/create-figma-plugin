import { compareStringArrays } from '../../object/compare-string-arrays.js'
import { getParentNode } from '../get-nodes/get-parent-node.js'
import { areSiblingNodes } from '../sibling-nodes/are-sibling-nodes.js'

/**
 * Updates the layer list sort order to follow the sort order of the nodes
 * in the `siblingNodes` array. Does not modify the original
 * `siblingNodes` array.
 *
 * @returns Returns `true` if the layer list sort order was changed by the
 * function, else `false`.
 * @category Node
 */
export function updateNodesSortOrder(siblingNodes: Array<SceneNode>): boolean {
  const parentNode = getParentNode(siblingNodes[0])
  if (areSiblingNodes(siblingNodes) === false) {
    throw new Error('Nodes in `siblingNodes` do not have the same parent')
  }
  const siblingNodesCopy = siblingNodes.slice()
  const ids = parentNode.children.map(function ({ id }: SceneNode) {
    return id
  })
  const insertIndex = computeInsertIndex(siblingNodesCopy, ids)
  for (const node of siblingNodesCopy) {
    parentNode.insertChild(insertIndex, node)
  }
  const idsAfter = parentNode.children.map(function ({ id }: SceneNode) {
    return id
  })
  return compareStringArrays(ids, idsAfter) === false
}

function computeInsertIndex(
  nodes: Array<SceneNode>,
  ids: Array<string>
): number {
  let insertIndex = -1
  for (const node of nodes) {
    const index = ids.indexOf(node.id)
    if (index > insertIndex) {
      insertIndex = index
    }
  }
  return insertIndex + 1
}
