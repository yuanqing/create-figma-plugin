/**
 * Returns the node in the current document that has the given `id`.
 *
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
