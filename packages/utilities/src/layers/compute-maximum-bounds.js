import { computeBoundingBox } from './compute-bounding-box'

export function computeMaximumBounds (layers) {
  let maximumBounds = [
    {
      x: Number.MAX_VALUE,
      y: Number.MAX_VALUE
    },
    {
      x: -1 * Number.MAX_VALUE,
      y: -1 * Number.MAX_VALUE
    }
  ]
  for (const layer of layers) {
    const { x, y, width, height } = computeBoundingBox(layer)
    maximumBounds = [
      {
        x: Math.min(maximumBounds[0].x, x),
        y: Math.min(maximumBounds[0].y, y)
      },
      {
        x: Math.max(maximumBounds[1].x, x + width),
        y: Math.max(maximumBounds[1].y, y + height)
      }
    ]
  }
  return maximumBounds
}
