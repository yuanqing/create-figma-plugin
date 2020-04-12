export function loadFontsAsync (layers) {
  const promises = []
  for (const layer of layers) {
    if (layer.type !== 'TEXT') {
      continue
    }
    const length = layer.characters.length
    for (let i = 0; i < length; i++) {
      promises.push(figma.loadFontAsync(layer.getRangeFontName(i, i + 1)))
    }
  }
  return Promise.all(promises)
}
