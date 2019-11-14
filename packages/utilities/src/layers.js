/* global figma */

export function getSelectedLayers () {
  return [].concat(figma.currentPage.selection)
}

export function getAllLayers () {
  return [].concat(figma.currentPage.children)
}

export function getSelectedLayersOrAllLayers () {
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

export function setAbsolutePosition (layer, absolutePosition) {
  let x = typeof absolutePosition.x !== 'undefined' ? absolutePosition.x : null
  let y = typeof absolutePosition.y !== 'undefined' ? absolutePosition.y : null
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

export function loadFonts (layers) {
  const promises = []
  for (const layer of layers) {
    if (layer.type !== 'TEXT') {
      continue
    }
    const length = layer.characters.length
    for (let i = 0; i < length; i++) {
      promises.push(figma.loadFontAsync(layer.getRangeFontName(i, i + 1)))
    }
  }
  return Promise.all(promises)
}

export function traverseLayer (layer, callback, filter) {
  if (layer.removed === true) {
    return
  }
  if (typeof filter === 'function' && filter(layer) === false) {
    return
  }
  callback(layer)
  if (layer.removed === true || typeof layer.children === 'undefined') {
    return
  }
  for (const childLayer of layer.children) {
    traverseLayer(childLayer, callback, filter)
  }
}
