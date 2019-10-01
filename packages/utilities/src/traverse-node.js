export function traverseNode (node, callback, filterCallback = noop) {
  if (filterCallback(node) === false) {
    return
  }
  callback(node)
  if (typeof node.children === 'undefined') {
    return
  }
  for (const childNode of node.children) {
    traverseNode(childNode, callback, filterCallback)
  }
}

function noop () {
  return true
}
