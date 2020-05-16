export function setAbsolutePosition (node: SceneNode, vector: Vector): void {
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
