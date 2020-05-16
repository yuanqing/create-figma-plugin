import { traverseNode } from '../traverse-node'

export function getDocumentComponents (): Array<ComponentNode> {
  const result: Array<ComponentNode> = []
  for (const page of figma.root.children) {
    for (const node of page.children) {
      traverseNode(
        node,
        function (node) {
          if (node.type === 'COMPONENT') {
            result.push(node)
          }
        },
        function (node) {
          const { type } = node
          return type === 'COMPONENT' || type === 'FRAME' || type === 'GROUP'
        }
      )
    }
  }
  return result
}
