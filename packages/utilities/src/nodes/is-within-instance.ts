export function isWithinInstance (node: SceneNode): boolean {
  const parent = node.parent
  if (parent === null) {
    return false
  }
  if (parent.type === 'INSTANCE') {
    return true
  }
  if (parent.type === 'DOCUMENT' || parent.type === 'PAGE') {
    return false
  }
  return isWithinInstance(parent)
}
