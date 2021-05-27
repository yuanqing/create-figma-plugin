import { traverseNode } from '../traverse-node.js'

/**
 * Returns all the local Components in the current document.
 *
 * @category Node
 */
export function getDocumentComponents(): Array<ComponentNode> {
  const result: Array<ComponentNode> = []
  for (const page of figma.root.children) {
    for (const node of page.children) {
      traverseNode(
        node,
        function (node: SceneNode): void {
          if (node.type === 'COMPONENT') {
            result.push(node)
          }
        },
        function (node: SceneNode): boolean {
          const { type } = node
          return type === 'COMPONENT' || type === 'FRAME' || type === 'GROUP'
        }
      )
    }
  }
  return result
}
