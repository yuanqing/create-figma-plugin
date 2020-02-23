export function computeBoundingBox (layer) {
  if (layer.rotation === 0) {
    const { x, y, width, height } = layer
    return { x, y, width, height }
  }
  const parent = layer.parent
  const index = parent.children.indexOf(layer)
  const group = figma.group([layer], parent, index)
  const { x, y, width, height } = group
  parent.insertChild(index, layer)
  return { x, y, width, height }
}
