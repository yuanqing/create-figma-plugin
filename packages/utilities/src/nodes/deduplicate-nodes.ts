/**
 * Deduplicates the nodes in `nodes`. Does not modify the original
 * `nodes` array.
 *
 * @returns A new array of `SceneNode` objects
 */
export function deduplicateNodes(nodes: Array<SceneNode>): Array<SceneNode> {
  const result: { [id: string]: SceneNode } = {}
  for (const node of nodes) {
    result[node.id] = node
  }
  return Object.values(result)
}
