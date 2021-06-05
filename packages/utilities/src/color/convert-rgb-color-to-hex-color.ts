import rgbHex from 'rgb-hex'

/**
 * Converts the given `rgbColor` (eg. `{ r: 0, g: 0, b: 0 }`) to hexadecimal
 * format (eg. `000000`). Each value in the given `rgbColor` must be between
 * `0` and `1`.
 *
 * @returns Returns a hexadecimal color as an uppercase string, else `null`
 * if `rgbColor` was invalid.
 * @category Color
 */
export function convertRgbColorToHexColor(rgbColor: RGB): null | string {
  const { r, g, b } = rgbColor
  if (r < 0 || r > 1 || g < 0 || g > 1 || b < 0 || b > 1) {
    return null
  }
  try {
    return rgbHex(
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255)
    ).toUpperCase()
  } catch {
    return null
  }
}
