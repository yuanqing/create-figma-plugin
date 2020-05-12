export function computeSiblingLayers (layers) {
  const groups: any[] = resolveGroups(layers)
  const result = []
  for (const group of groups) {
    const layers = group
      .sort(function (a, b) {
        return b.index - a.index
      })
      .map(function ({ layer }) {
        return layer
      })
    result.push(layers)
  }
  return result
}

function resolveGroups (layers) {
  const result = {}
  for (const layer of layers) {
    const parentId = layer.parent.id
    const index = layer.parent.children.indexOf(layer) // so that we can sort layers by their `index`
    if (typeof result[parentId] === 'undefined') {
      result[parentId] = []
    }
    result[parentId].push({ index, layer })
  }
  return Object.values(result)
}
