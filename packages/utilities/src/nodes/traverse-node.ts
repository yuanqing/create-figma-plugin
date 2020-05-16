export function traverseNode (
  node: SceneNode,
  processNode: (node: SceneNode) => void,
  stopTraversal?: (node: SceneNode) => boolean
): void {
  if (node.removed === true) {
    return
  }
  if (
    'children' in node &&
    (typeof stopTraversal !== 'function' || stopTraversal(node) === false)
  ) {
    for (const childNode of node.children) {
      traverseNode(childNode, processNode, stopTraversal)
    }
  }
  processNode(node)
}
