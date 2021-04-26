export function getSceneNodeById<T extends SceneNode>(id: string): SceneNode {
  const node = figma.getNodeById(id)
  if (node === null) {
    throw new Error(`No node found with \`id\`: ${id}`)
  }
  if (node.type === 'DOCUMENT' || node.type === 'PAGE') {
    throw new Error('`node` is not a `SceneNode`')
  }
  return node as T
}
