export function traverseLayer (layer, callback, filterCallback) {
  callback(layer)
  if (typeof layer.children === 'undefined') {
    return
  }
  if (typeof filterCallback === 'function' && filterCallback(layer) === false) {
    return
  }
  for (const childLayer of layer.children) {
    traverseLayer(childLayer, callback, filterCallback)
  }
}
