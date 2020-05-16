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
  const children = parent.children as Array<SceneNode>
  const before = collectNodeIndexes(copy, children)
  const insertIndex = computeInsertIndex(copy, children)
  copy.forEach(function (node) {
    parent.insertChild(insertIndex, node)
  })
  const after = collectNodeIndexes(copy, children)
  return compareArrays(before, after) === false
}

function computeInsertIndex (
  nodes: Array<SceneNode>,
  children: Array<SceneNode>
): number {
  const ids = children.map(function (node) {
    return node.id
  })
  let insertIndex = -1
  nodes.forEach(function (node) {
    const index = ids.indexOf(node.id)
    if (index > insertIndex) {
      insertIndex = index
    }
  })
  return insertIndex + 1
}

function collectNodeIndexes (
  nodes: Array<SceneNode>,
  children: Array<SceneNode>
): Array<number> {
  const result = []
  for (const node of nodes) {
    result.push(children.indexOf(node))
  }
  return result
}
