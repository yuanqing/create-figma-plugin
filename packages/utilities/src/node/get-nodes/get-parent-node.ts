/**
 * Returns the parent node of the given `node`.
 *
 * @returns Throws an error if `node.parent` is `null`, else returns
 * `node.parent`.
 * @category Node
 */
export function getParentNode(node: BaseNode): BaseNode & ChildrenMixin {
  const parentNode = node.parent
  if (parentNode === null) {
    throw new Error(`\`node.parent\` is \`null\``)
  }
  return parentNode
}
