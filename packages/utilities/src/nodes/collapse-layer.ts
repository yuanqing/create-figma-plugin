import { traverseNode } from './traverse-node.js'

/**
 * Collapses `node` and all its child nodes in the layer list.
 *
 * @category Node
 */
export function collapseLayer(node: SceneNode): boolean {
  let didChange = false
  traverseNode(node, function (node: SceneNode): void {
    if ('expanded' in node && node.expanded === true) {
      node.expanded = false
      didChange = true
    }
  })
  return didChange
}
