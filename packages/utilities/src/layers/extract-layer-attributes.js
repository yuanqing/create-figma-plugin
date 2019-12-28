export function extractLayerAttributes (layers, attributes) {
  const result = []
  for (const layer of layers) {
    const item = {
      id: layer.id
    }
    for (const attribute of attributes) {
      item[attribute] = layer[attribute]
    }
    result.push(item)
  }
  return result
}
