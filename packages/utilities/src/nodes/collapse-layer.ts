import { traverseNode } from './traverse-node'

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
