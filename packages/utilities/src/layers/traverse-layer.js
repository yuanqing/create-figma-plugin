export function traverseLayer (layer, processLayer, stopTraversal) {
  if (layer.removed === true) {
    return
  }
  if (
    typeof layer.children !== 'undefined' &&
    (typeof stopTraversal !== 'function' || stopTraversal(layer) === false)
  ) {
    for (const childLayer of layer.children) {
      traverseLayer(childLayer, processLayer, stopTraversal)
    }
  }
  processLayer(layer)
}
