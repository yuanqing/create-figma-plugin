export function getSelectedNodesOrAllNodes (): Array<SceneNode> {
  const selectedNodes = figma.currentPage.selection
  if (selectedNodes.length > 0) {
    return selectedNodes.slice()
  }
  return figma.currentPage.children.slice()
}
