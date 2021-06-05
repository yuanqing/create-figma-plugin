import rgbHex from 'rgb-hex'

export function convertRgbToHex(rgb: RGB): string {
  return rgbHex(rgb.r, rgb.g, rgb.b)
}
