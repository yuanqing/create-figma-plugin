/**
 * Deduplicates the nodes in `nodes`. Does not modify the original
 * `nodes` array.
 *
 * @returns Returns a new array of `SceneNode` objects.
 * @category Node
 */
export function deduplicateNodes<T extends SceneNode>(
  nodes: Array<T>
): Array<T> {
  const result: Record<string, T> = {}
  for (const node of nodes) {
    result[node.id] = node
  }
  return Object.values(result)
}
