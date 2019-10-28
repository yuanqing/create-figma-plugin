/* global figma */

export function getAllOrSelectedLayers () {
  const selection = figma.currentPage.selection
  return [].concat(
    selection.length === 0 ? figma.currentPage.children : selection
  )
}

export function groupSiblingLayers (layers) {
  const result = {}
  for (const layer of layers) {
    const parentId = layer.parent.id
    if (typeof result[parentId] === 'undefined') {
      result[parentId] = [layer]
    } else {
      result[parentId].push(layer)
    }
  }
  return Object.values(result)
}

export function getAbsolutePosition (layer) {
  return {
    x: layer.absoluteTransform[0][2],
    y: layer.absoluteTransform[1][2]
  }
}

export function setAbsolutePosition (layer, { x, y }) {
  if (layer.parent.type === 'PAGE') {
    if (typeof x !== 'undefined') {
      layer.x = x
    }
    if (typeof y !== 'undefined') {
      layer.y = y
    }
    return
  }
  const outermostParent = getOutermostParent(layer)
  if (typeof x !== 'undefined') {
    layer.x = x - outermostParent.absoluteTransform[0][2]
  }
  if (typeof y !== 'undefined') {
    layer.y = y - outermostParent.absoluteTransform[1][2]
  }
}

function getOutermostParent (layer) {
  const parent = layer.parent
  if (parent.type === 'PAGE') {
    return layer
  }
  return getOutermostParent(parent)
}

export function traverseLayer (layer, callback, filter) {
  if (layer.removed) {
    return
  }
  if (typeof filter === 'function' && filter(layer) === false) {
    return
  }
  callback(layer)
  if (layer.removed || typeof layer.children === 'undefined') {
    return
  }
  for (const childLayer of layer.children) {
    traverseLayer(childLayer, callback, filter)
  }
}
