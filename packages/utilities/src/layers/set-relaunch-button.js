export function setRelaunchButton (node, id, description = '') {
  node.setRelaunchData({ [id]: description })
}
