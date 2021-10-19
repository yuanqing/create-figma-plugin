/**
 * Async version of [`traverseNode`](#traversenodenode-processnode--stoptraversal)
 * in which both callbacks are async.
 *
 * @category Node
 */
export async function traverseNodeAsync(
  node: SceneNode,
  processNodeAsync: (node: SceneNode) => Promise<void>,
  stopTraversalAsync?: (node: SceneNode) => Promise<boolean>
): Promise<void> {
  if (node.removed === true) {
    return
  }
  if (
    'children' in node &&
    (typeof stopTraversalAsync !== 'function' ||
      (await stopTraversalAsync(node)) === false)
  ) {
    for (const childNode of node.children) {
      await traverseNodeAsync(childNode, processNodeAsync, stopTraversalAsync)
    }
  }
  await processNodeAsync(node)
}
