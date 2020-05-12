export function insertBeforeLayer (layer, referenceLayer) {
  const parent = referenceLayer.parent
  const index = parent.children.indexOf(referenceLayer)
  parent.insertChild(index + 1, layer)
}
