export function groupSiblingLayers (layers) {
  const groups = resolveGroups(layers)
  const result = []
  for (const group of groups) {
    const layers = group.sort(sortComparator).map(function ({ layer }) {
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
      result[parentId] = [{ layer, index }]
    } else {
      result[parentId].push({ layer, index })
    }
  }
  return Object.values(result)
}

function sortComparator (a, b) {
  return b.index - a.index
}
