export async function loadFontsAsync(nodes: Array<SceneNode>): Promise<void> {
  let fonts: Array<FontName> = []
  for (const node of nodes) {
    if (node.type === 'TEXT') {
      fonts = fonts.concat(computeUniqueFontsUsedInNode(node))
    }
  }
  await Promise.all(
    fonts.map(function (font) {
      return figma.loadFontAsync(font)
    })
  )
}

function computeUniqueFontsUsedInNode(node: TextNode): Array<FontName> {
  const result: { [key: string]: FontName } = {}
  let i = -1
  const length = node.characters.length
  while (++i < length) {
    const fontName = node.getRangeFontName(i, i + 1) as FontName
    const key = `${fontName.family}-${fontName.style}`
    if (key in result) {
      continue
    }
    result[key] = fontName
  }
  return Object.values(result)
}
