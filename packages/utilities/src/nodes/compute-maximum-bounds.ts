import { computeBoundingBox } from './compute-bounding-box.js'

/**
 * Computes the absolute coordinates of the top-left and bottom-right
 * corners of the smallest bounding box that contains the given `nodes`.
 *
 * @category Node
 */
export function computeMaximumBounds(
  nodes: Array<SceneNode>
): [Vector, Vector] {
  let maximumBounds: [Vector, Vector] = [
    {
      x: Number.MAX_VALUE,
      y: Number.MAX_VALUE
    },
    {
      x: -1 * Number.MAX_VALUE,
      y: -1 * Number.MAX_VALUE
    }
  ]
  for (const node of nodes) {
    const { x, y, width, height } = computeBoundingBox(node)
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
