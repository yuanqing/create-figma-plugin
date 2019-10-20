export function traverseLayer (layer, callback, filterCallback) {
  callback(layer)
  if (layer.removed || typeof layer.children === 'undefined') {
    return
  }
  if (typeof filterCallback === 'function' && filterCallback(layer) === false) {
    return
  }
  for (const childLayer of layer.children) {
    traverseLayer(childLayer, callback, filterCallback)
  }
}
