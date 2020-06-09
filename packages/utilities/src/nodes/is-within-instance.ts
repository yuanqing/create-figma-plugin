/**
 * Checks if the given `node` is within an Instance.
 *
 * @returns `true` if the `node` is within an Instance, else `false`
 */
export function isWithinInstance(node: SceneNode): boolean {
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
