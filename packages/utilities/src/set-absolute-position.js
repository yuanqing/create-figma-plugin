export const setAbsoluteX = factory('x', 0)
export const setAbsoluteY = factory('y', 1)

function factory (key, index) {
  return function (layer, value) {
    const parent = layer.parent
    layer[key] =
      parent.type === 'PAGE'
        ? value
        : value - parent.absoluteTransform[index][2]
  }
}
