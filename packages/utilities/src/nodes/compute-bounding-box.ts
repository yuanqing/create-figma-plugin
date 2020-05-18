import { getAbsolutePosition } from './absolute-position/get-absolute-position'

export function computeBoundingBox(node: SceneNode): Rect {
  if (node.rotation === 0) {
    const absolutePosition = getAbsolutePosition(node)
    const { width, height } = node
    return { ...absolutePosition, width, height }
  }
  const parent = node.parent
  if (parent === null) {
    throw new Error('Node has no parent')
  }
  const index = parent.children.indexOf(node)
  const group = figma.group([node], parent, index)
  const absolutePosition = getAbsolutePosition(group)
  const { width, height } = group
  parent.insertChild(index, node)
  return { ...absolutePosition, width, height }
}
