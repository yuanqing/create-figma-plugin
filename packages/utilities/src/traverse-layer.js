export function traverseLayer (layer, callback, filterCallback) {
  if (
    typeof filterCallback !== 'undefined' &&
    filterCallback(layer) === false
  ) {
    return
  }
  callback(layer)
  if (typeof layer.children === 'undefined') {
    return
  }
  for (const childLayer of layer.children) {
    traverseLayer(childLayer, callback, filterCallback)
  }
}
