import { traverseLayer } from '@create-figma-plugin/utilities'

export function collapseLayer (layer) {
  let didChange = false
  traverseLayer(
    layer,
    function (layer) {
      if (isContainerLayer(layer) === true && layer.expanded === true) {
        layer.expanded = false
        didChange = true
      }
    },
    function (layer) {
      return isContainerLayer(layer) === false
    }
  )
  return didChange
}

function isContainerLayer (layer) {
  return (
    layer.type === 'COMPONENT' ||
    layer.type === 'FRAME' ||
    layer.type === 'GROUP' ||
    layer.type === 'INSTANCE'
  )
}
