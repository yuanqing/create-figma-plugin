/**
 * Returns the result of deduplicating the nodes in `nodes`. Does not modify
 * the original `nodes` array.
 *
 * @returns Returns a new array of unique `SceneNode` objects.
 * @category Node
 */
export function deduplicateNodes<Node extends SceneNode>(
  nodes: Array<Node>
): Array<Node> {
  const result: Record<string, Node> = {}
  for (const node of nodes) {
    result[node.id] = node
  }
  return Object.values(result)
}
