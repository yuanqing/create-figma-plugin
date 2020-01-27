export function removeDuplicateLayers (layers) {
  const result = {}
  for (const layer of layers) {
    result[layer.id] = layer
  }
  return Object.values(result)
}
