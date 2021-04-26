import { getParentNode } from './get-parent-node'

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
    const parentNode = getParentNode(group[0])
    const siblingNodes = group
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
    result.push(siblingNodes)
  }
  return result
}

function resolveGroups<T extends SceneNode>(nodes: Array<T>): Array<Array<T>> {
  const result: Record<string, Array<T>> = {}
  for (const node of nodes) {
    const parentNode = getParentNode(node)
    const parentId = parentNode.id
    if (parentId in result === false) {
      result[parentId] = []
    }
    result[parentId].push(node)
  }
  return Object.values(result)
}
