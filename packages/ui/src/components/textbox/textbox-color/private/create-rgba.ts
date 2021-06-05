import hexRgb from 'hex-rgb'

import { MIXED_STRING } from '../../../../utilities/mixed-values'

export function createRgba(hexColor: string, opacity: string): null | RGBA {
  if (
    hexColor === '' ||
    hexColor === MIXED_STRING ||
    opacity === '' ||
    opacity === MIXED_STRING
  ) {
    return null
  }
  const { red, green, blue } = hexRgb(hexColor)
  return {
    a: parseInt(opacity, 10) / 100,
    b: blue,
    g: green,
    r: red
  }
}
