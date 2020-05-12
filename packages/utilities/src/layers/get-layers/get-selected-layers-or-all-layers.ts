export function getSelectedLayersOrAllLayers () {
  const selectedLayers = figma.currentPage.selection
  return (selectedLayers.length === 0
    ? figma.currentPage.children
    : selectedLayers
  ).slice()
}
