/**
 * Returns the `x` and `y` position of the given `node` relative to the page.
 *
 * @returns Returns a [`Vector`](https://www.figma.com/plugin-docs/api/Vector/).
 * @category Node
 */
export function getAbsolutePosition(node: SceneNode): Vector {
  return {
    x: node.absoluteTransform[0][2],
    y: node.absoluteTransform[1][2]
  }
}
