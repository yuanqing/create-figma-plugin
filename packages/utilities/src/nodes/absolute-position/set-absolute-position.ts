/**
 * Sets the `node` to the given `x` and `y` absolute position.
 *
 * @category Node
 */
export function setAbsolutePosition(
  node: SceneNode,
  vector: Partial<Vector>
): void {
  if (typeof vector.x === 'undefined' && typeof vector.y === 'undefined') {
    throw new Error('Specify at least one of `x` or `y`')
  }
  let x = typeof vector.x === 'undefined' ? null : vector.x
  let y = typeof vector.y === 'undefined' ? null : vector.y
  let parent = node.parent
  while (parent !== null && parent.type !== 'PAGE') {
    if (parent.type === 'FRAME') {
      if (x !== null) {
        x = x - parent.x
      }
      if (y !== null) {
        y = y - parent.y
      }
    }
    parent = parent.parent
  }
  if (x !== null) {
    node.x = x
  }
  if (y !== null) {
    node.y = y
  }
}
