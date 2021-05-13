/**
 * Returns the `x` and `y` position of the given `node` relative to the Page.
 *
 * @category Node
 */
export function getAbsolutePosition(node: SceneNode): Vector {
  return {
    x: node.absoluteTransform[0][2],
    y: node.absoluteTransform[1][2]
  }
}
