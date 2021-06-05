import hexRgb from 'hex-rgb'

/**
 * Converts the given `hexColor` (eg. `000000`) to RGB format
 * (eg. `{ r: 0, g: 0, b: 0 }`). Note that each value in the returned
 * [RGB](https://www.figma.com/plugin-docs/api/RGB/) plain object is
 * between `0` and `1`.
 *
 * @returns Returns an [RGB](https://www.figma.com/plugin-docs/api/RGB/) plain
 * object, else `null` if `hexColor` was invalid.
 * @category Color
 */
export function convertHexColorToRgbColor(hexColor: string): null | RGB {
  if (hexColor.length !== 3 && hexColor.length !== 6) {
    return null
  }
  try {
    const { red, green, blue } = hexRgb(hexColor)
    return {
      b: blue / 255,
      g: green / 255,
      r: red / 255
    }
  } catch {
    return null
  }
}
