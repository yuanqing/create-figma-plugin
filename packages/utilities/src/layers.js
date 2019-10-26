/* global figma */

export function getAllOrSelectedLayers () {
  const selection = figma.currentPage.selection
  return [].concat(
    selection.length === 0 ? figma.currentPage.children : selection
  )
}

export function getAbsolutePosition (layer) {
  return {
    x: layer.absoluteTransform[0][2],
    y: layer.absoluteTransform[1][2]
  }
}

export const setAbsoluteX = setAbsolutePositionFactory('x', 0)
export const setAbsoluteY = setAbsolutePositionFactory('y', 1)
function setAbsolutePositionFactory (key, index) {
  return function (layer, value) {
    layer[key] =
      layer.parent.type === 'PAGE'
        ? value
        : value - getOutermostParent(layer).absoluteTransform[index][2]
  }
}
function getOutermostParent (layer) {
  const parent = layer.parent
  if (parent.type === 'PAGE') {
    return layer
  }
  return getOutermostParent(parent)
}

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
