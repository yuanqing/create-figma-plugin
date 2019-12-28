import { traverseLayer } from './traverse-layer'

export function getDocumentComponents () {
  const result = []
  for (const page of figma.root.children) {
    traverseLayer(
      page,
      function (layer) {
        if (layer.type === 'COMPONENT') {
          result.push(layer)
          return false
        }
      },
      function ({ type }) {
        return (
          type === 'COMPONENT' ||
          type === 'FRAME' ||
          type === 'GROUP' ||
          type === 'PAGE'
        )
      }
    )
  }
  return result
}
