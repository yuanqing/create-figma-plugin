/**
 * Splits `nodes` into groups of sibling nodes.
 *
 * @category Node
 */
export function computeSiblingNodes<T extends SceneNode>(
  nodes: Array<T>
): Array<Array<T>> {
  const groups = resolveGroups(nodes)
  const result: Array<Array<T>> = []
  for (const group of groups) {
    const parent = group[0].parent
    if (parent === null) {
      throw new Error('Node has no parent')
    }
    const siblingNodes = group
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
    result.push(siblingNodes)
  }
  return result
}

function resolveGroups<T extends SceneNode>(nodes: Array<T>): Array<Array<T>> {
  const result: Record<string, Array<T>> = {}
  for (const node of nodes) {
    const parent = node.parent
    if (parent === null) {
      throw new Error('Node has no parent')
    }
    const parentId = parent.id
    if (parentId in result === false) {
      result[parentId] = []
    }
    result[parentId].push(node)
  }
  return Object.values(result)
}
