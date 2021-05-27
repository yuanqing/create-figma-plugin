/**
 * Loads the fonts used in all the text nodes within the `nodes` array. [This
 * function must be called before modifying any property of a text node that
 * may cause the rendered text to change.](https://www.figma.com/plugin-docs/api/TextNode/#loading-fonts)
 *
 * @category Node
 */
export async function loadFontsAsync(nodes: Array<SceneNode>): Promise<void> {
  const result: Record<string, FontName> = {}
  for (const node of nodes) {
    if (node.type === 'TEXT') {
      collectFontsUsedInNode(node, result)
    }
  }
  await Promise.all(
    Object.values(result).map(function (font: FontName): Promise<void> {
      return figma.loadFontAsync(font)
    })
  )
}

function collectFontsUsedInNode(
  node: TextNode,
  result: Record<string, FontName>
): void {
  const length = node.characters.length
  if (length === 0) {
    const fontName = node.fontName as FontName
    const key = createKey(fontName)
    if (key in result) {
      return
    }
    result[key] = fontName
    return
  }
  let i = -1
  while (++i < length) {
    const fontName = node.getRangeFontName(i, i + 1) as FontName
    const key = createKey(fontName)
    if (key in result) {
      continue
    }
    result[key] = fontName
  }
}

function createKey(fontName: FontName): string {
  return `${fontName.family}-${fontName.style}`
}
