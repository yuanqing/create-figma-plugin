export function getAbsolutePosition (layer) {
  return {
    x: layer.absoluteTransform[0][2],
    y: layer.absoluteTransform[1][2]
  }
}
