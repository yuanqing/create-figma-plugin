export function traverseNode (node, callback) {
  callback(node)
  if (typeof node.children === 'undefined') {
    return
  }
  for (const childNode of node.children) {
    traverseNode(childNode, callback)
  }
}
