export function traverseLayer (layer, callback, filterCallback) {
  if (layer.removed) {
    return
  }
  if (typeof filterCallback === 'function' && filterCallback(layer) === false) {
    return
  }
  callback(layer)
  if (layer.removed || typeof layer.children === 'undefined') {
    return
  }
  for (const childLayer of layer.children) {
    traverseLayer(childLayer, callback, filterCallback)
  }
}
