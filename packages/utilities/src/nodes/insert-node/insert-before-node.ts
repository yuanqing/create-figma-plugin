/**
 * Inserts `node` before the `referenceNode` in the layer list.
 */
export function insertBeforeNode(
  node: SceneNode,
  referenceNode: SceneNode
): void {
  const parent = referenceNode.parent
  if (parent === null) {
    throw new Error('Reference node has no parent')
  }
  const index = parent.children.indexOf(referenceNode)
  parent.insertChild(index + 1, node)
}
