import hexRgb from 'hex-rgb'
import rgbHex from 'rgb-hex'

export function updateHexColor(hexColor: string, delta: number): string {
  const { red, green, blue } = hexRgb(hexColor)
  return rgbHex(
    restrictValue(red + delta),
    restrictValue(green + delta),
    restrictValue(blue + delta)
  ).toUpperCase()
}

function restrictValue(value: number): number {
  return Math.min(255, Math.max(0, value))
}
