export function getSelectedLayersOrAllLayers () {
  const selection = figma.currentPage.selection
  return [].concat(
    selection.length === 0 ? figma.currentPage.children : selection
  )
}
