export function setAbsolutePosition (layer, absolutePosition) {
  let x = typeof absolutePosition.x === 'undefined' ? null : absolutePosition.x
  let y = typeof absolutePosition.y === 'undefined' ? null : absolutePosition.y
  let parent = layer.parent
  while (parent.type !== 'PAGE') {
    if (parent.type !== 'BOOLEAN_OPERATION' && parent.type !== 'GROUP') {
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
    layer.x = x
  }
  if (y !== null) {
    layer.y = y
  }
}
