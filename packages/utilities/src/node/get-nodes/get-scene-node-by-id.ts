/**
 * Returns `SceneNode` in the current document with the given `id`. This is a
 * convenience function that wraps the [`figma.getNodeById`](https://www.figma.com/plugin-docs/api/figma/#getnodebyid)
 * function.
 *
 * @returns Throws an error if no `SceneNode` with the given `id` exists, else
 * returns the node cast to the specified `Node` type parameter.
 * @category Node
 */
export function getSceneNodeById<Node extends SceneNode>(id: string): Node {
  const node = figma.getNodeById(id)
  if (node === null) {
    throw new Error(`No node found with \`id\`: ${id}`)
  }
  if (node.type === 'DOCUMENT' || node.type === 'PAGE') {
    throw new Error('`node` is not a `SceneNode`')
  }
  return node as Node
}
