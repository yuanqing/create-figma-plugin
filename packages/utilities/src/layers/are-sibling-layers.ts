export function areSiblingLayers (layers) {
  if (layers.length < 2) {
    return true
  }
  const [firstLayer, ...rest] = layers
  const parentId = firstLayer.parent.id
  for (const layer of rest) {
    if (layer.parent.id !== parentId) {
      return false
    }
  }
  return true
}
