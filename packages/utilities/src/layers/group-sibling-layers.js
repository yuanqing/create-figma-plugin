export function groupSiblingLayers (layers) {
  const result = {}
  for (const layer of layers) {
    const parentId = layer.parent.id
    if (typeof result[parentId] === 'undefined') {
      result[parentId] = [layer]
    } else {
      result[parentId].push(layer)
    }
  }
  return Object.values(result)
}
