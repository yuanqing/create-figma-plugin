import { getParentNode } from './get-nodes/get-parent-node'

/**
 * Splits `nodes` into groups of sibling nodes.
 *
 * @returns Returns an array of array of sibling `SceneNode` objects.
 * @category Node
 */
export function computeSiblingNodes<N extends SceneNode>(
  nodes: Array<N>
): Array<Array<N>> {
  const groups = resolveGroups(nodes)
  const result: Array<Array<N>> = []
  for (const group of groups) {
    const parentNode = getParentNode(group[0])
    const siblingNodes = group
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
    result.push(siblingNodes)
  }
  return result
}

function resolveGroups<N extends SceneNode>(nodes: Array<N>): Array<Array<N>> {
  const result: Record<string, Array<N>> = {}
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
