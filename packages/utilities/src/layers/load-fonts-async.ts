export function loadFontsAsync (layers) {
  let fonts = []
  for (const layer of layers) {
    if (layer.type !== 'TEXT') {
      continue
    }
    fonts = fonts.concat(computeUniqueFontsUsedInLayer(layer))
  }
  return Promise.all(
    fonts.map(function (font) {
      return figma.loadFontAsync(font)
    })
  )
}

function computeUniqueFontsUsedInLayer (textLayer) {
  const result = {}
  let i = -1
  const length = textLayer.characters.length
  while (++i < length) {
    const fontName = textLayer.getRangeFontName(i, i + 1)
    const key = `${fontName.family}-${fontName.style}`
    if (typeof result[key] === 'undefined') {
      result[key] = fontName
    }
  }
  return Object.values(result)
}
