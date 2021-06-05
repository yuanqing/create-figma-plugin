import { convertHexColorToRgbColor } from '@create-figma-plugin/utilities'

import { MIXED_STRING } from '../../../../utilities/mixed-values'

export function createRgbaColor(
  hexColor: string,
  opacity: string
): null | RGBA {
  if (
    hexColor === '' ||
    hexColor === MIXED_STRING ||
    opacity === '' ||
    opacity === MIXED_STRING
  ) {
    return null
  }
  const rgb = convertHexColorToRgbColor(hexColor)
  if (rgb === null) {
    return null
  }
  return {
    ...rgb,
    a: parseInt(opacity, 10) / 100
  }
}
