import hexRgb from 'hex-rgb'

export function convertHexToRgb(hex: string): RGB {
  const { red, green, blue } = hexRgb(hex)
  return {
    b: blue,
    g: green,
    r: red
  }
}
