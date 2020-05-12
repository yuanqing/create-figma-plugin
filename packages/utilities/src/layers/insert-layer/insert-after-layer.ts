export function insertAfterLayer (layer, referenceLayer) {
  const parent = referenceLayer.parent
  const index = parent.children.indexOf(referenceLayer)
  parent.insertChild(index, layer)
}
