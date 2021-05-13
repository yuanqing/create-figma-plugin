import { getParentNode } from '../get-nodes/get-parent-node.js'

/**
 * Splits `nodes` into groups of sibling nodes.
 *
 * @returns Returns an array of array of sibling `SceneNode` objects.
 * @category Node
 */
export function computeSiblingNodes<Node extends SceneNode>(
  nodes: Array<Node>
): Array<Array<Node>> {
  const groups = resolveGroups(nodes)
  const result: Array<Array<Node>> = []
  for (const group of groups) {
    const parentNode = getParentNode(group[0])
    const siblingNodes = group
      .map(function (node: Node): { index: number; node: Node } {
        return {
          index: parentNode.children.indexOf(node),
          node
        }
      })
      .sort(function (a: { index: number }, b: { index: number }): number {
        return a.index - b.index
      })
      .map(function ({ node }: { node: Node }): Node {
        return node
      })
    result.push(siblingNodes)
  }
  return result
}

function resolveGroups<Node extends SceneNode>(
  nodes: Array<Node>
): Array<Array<Node>> {
  const result: Record<string, Array<Node>> = {}
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
