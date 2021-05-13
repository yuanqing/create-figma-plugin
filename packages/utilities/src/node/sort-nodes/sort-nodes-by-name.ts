import naturalCompare from 'natural-compare-lite'

/**
 * Sorts `nodes` in alphabetical order. Does not modify the original
 * `nodes` array.
 *
 * @returns Returns a new array of `SceneNode` objects.
 * @category Node
 */
export function sortNodesByName<Node extends SceneNode>(
  nodes: Array<Node>
): Array<Node> {
  if (nodes.length < 2) {
    return nodes.slice()
  }
  return nodes.slice().sort(function (a: Node, b: Node): number {
    const aName = a.name.toLowerCase()
    const bName = b.name.toLowerCase()
    if (aName !== bName) {
      return naturalCompare(bName, aName)
    }
    const y = b.y - a.y
    if (y !== 0) {
      return y
    }
    const x = b.x - a.x
    if (x !== 0) {
      return x
    }
    return naturalCompare(b.id, a.id)
  })
}
