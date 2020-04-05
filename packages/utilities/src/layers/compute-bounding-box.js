import { getAbsolutePosition } from './absolute-position/get-absolute-position'

export function computeBoundingBox (layer) {
  if (layer.rotation === 0) {
    const absolutePosition = getAbsolutePosition(layer)
    const { width, height } = layer
    return { ...absolutePosition, width, height }
  }
  const parent = layer.parent
  const index = parent.children.indexOf(layer)
  const group = figma.group([layer], parent, index)
  const absolutePosition = getAbsolutePosition(group)
  const { width, height } = group
  parent.insertChild(index, layer) // ungroup the layer
  return { ...absolutePosition, width, height }
}
