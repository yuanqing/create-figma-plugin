/**
 * Gets the node in the current document with the given `id`.
 *
 * @category Node
 */
export function getSceneNodeById<N extends SceneNode>(id: string): N {
  const node = figma.getNodeById(id)
  if (node === null) {
    throw new Error(`No node found with \`id\`: ${id}`)
  }
  if (node.type === 'DOCUMENT' || node.type === 'PAGE') {
    throw new Error('`node` is not a `SceneNode`')
  }
  return node as N
}
