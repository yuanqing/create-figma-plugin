export function sortSiblingLayersByLayerListOrder (siblingLayers) {
  if (siblingLayers.length < 2) {
    return siblingLayers.slice()
  }
  const parentLayer = siblingLayers[0].parent
  return siblingLayers
    .slice()
    .map(function (layer) {
      return {
        index: parentLayer.children.indexOf(layer),
        layer
      }
    })
    .sort(function (a, b) {
      return b.index - a.index
    })
    .map(function ({ layer }) {
      return layer
    })
}
