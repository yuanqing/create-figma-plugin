/**
 * Deduplicates the nodes in `nodes`. Does not modify the original
 * `nodes` array.
 *
 * @returns Returns a new array of `SceneNode` objects.
 * @category Node
 */
export function deduplicateNodes<N extends SceneNode>(
  nodes: Array<N>
): Array<N> {
  const result: Record<string, N> = {}
  for (const node of nodes) {
    result[node.id] = node
  }
  return Object.values(result)
}
