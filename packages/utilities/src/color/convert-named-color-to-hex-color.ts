import { NAMED_COLORS } from './private/named-colors.js'

/**
 * Converts the given `namedColor` (eg. `black`) to hexadecimal format
 * (eg. `000000`).
 *
 * @returns Returns a hexadecimal color as an uppercase string, else `null`
 * if `namedColor` was invalid.
 * @category Color
 */
export function convertNamedColorToHexColor(namedColor: string): null | string {
  const hexColor = NAMED_COLORS[namedColor.toLowerCase()]
  if (typeof hexColor === 'undefined') {
    return null
  }
  return hexColor
}
