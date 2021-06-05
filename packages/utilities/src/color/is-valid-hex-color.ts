import { convertHexColorToRgbColor } from './convert-hex-color-to-rgb-color.js'

/**
 * Returns `true` if `hexColor` is a valid hexadecimal color.
 *
 * @category Color
 */
export function isValidHexColor(hexColor: string): boolean {
  return convertHexColorToRgbColor(hexColor) !== null
}
