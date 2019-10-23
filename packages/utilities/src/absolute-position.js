export function getAbsolutePosition (layer) {
  return {
    x: layer.absoluteTransform[0][2],
    y: layer.absoluteTransform[1][2]
  }
}

export const setAbsoluteX = factory('x', 0)
export const setAbsoluteY = factory('y', 1)

function factory (key, index) {
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
