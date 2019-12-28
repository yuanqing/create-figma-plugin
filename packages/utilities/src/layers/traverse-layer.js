export function traverseLayer (layer, callback, filter) {
  if (layer.removed === true) {
    return
  }
  if (typeof filter === 'function' && filter(layer) === false) {
    return
  }
  if (callback(layer) === false) {
    return
  }
  if (layer.removed === true || typeof layer.children === 'undefined') {
    return
  }
  for (const childLayer of layer.children) {
    traverseLayer(childLayer, callback, filter)
  }
}
