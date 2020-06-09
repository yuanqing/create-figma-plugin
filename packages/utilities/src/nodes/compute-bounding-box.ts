import { getAbsolutePosition } from './absolute-position/get-absolute-position'

/**
 * Computes the coordinates (`x`, `y`) and dimensions (`width`, `height`) of
 * the smallest bounding box that contains the given `node`.
 */
export function computeBoundingBox(node: SceneNode): Rect {
  if (node.rotation === 0) {
    const absolutePosition = getAbsolutePosition(node)
    const { width, height } = node
    return { ...absolutePosition, height, width }
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
  return { ...absolutePosition, height, width }
}
