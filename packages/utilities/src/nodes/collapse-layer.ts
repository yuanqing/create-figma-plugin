import { traverseNode } from './traverse-node'

/**
 * Collapses `node` and all its child nodes in the layer list.
 */
export function collapseLayer(node: SceneNode): boolean {
  let didChange = false
  traverseNode(node, function (node) {
    if ('expanded' in node && node.expanded === true) {
      node.expanded = false
      didChange = true
    }
  })
  return didChange
}
