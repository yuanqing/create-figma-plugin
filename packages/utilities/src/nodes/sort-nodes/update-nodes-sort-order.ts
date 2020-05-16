import { areSiblingNodes } from '../are-sibling-nodes'
import { compareArrays } from '../../object'

export function updateNodesSortOrder (nodes: Array<SceneNode>): boolean {
  const parent = nodes[0].parent
  if (parent === null) {
    throw new Error('Node has no parent')
  }
  if (areSiblingNodes(nodes) === false) {
    throw new Error('Nodes do not have the same parent')
  }
  const copy = nodes.slice()
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
  return compareArrays(ids, idsAfter) === false
}

function computeInsertIndex (
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
