export function isLayerWithinInstance (layer) {
  if (layer.type === 'PAGE') {
    return false
  }
  const parent = layer.parent
  if (parent.type === 'INSTANCE') {
    return true
  }
  if (parent.type === 'PAGE') {
    return false
  }
  return isLayerWithinInstance(parent)
}
