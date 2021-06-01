import cssColorNames from 'css-color-names'
import hexColorRegex from 'hex-color-regex'

export function normalizeHexColor(hexColor: string): null | string {
  if (typeof cssColorNames[hexColor] !== 'undefined') {
    return cssColorNames[hexColor].slice(1).toUpperCase()
  }
  const result = createHexColor(hexColor)
  return isValidHexColor(result) === true ? result.toUpperCase() : null
}

function createHexColor(string: string): string {
  switch (string.length) {
    case 0: {
      return ''
    }
    case 1: {
      return Array(6).fill(string).join('')
    }
    case 2: {
      return Array(3).fill(string).join('')
    }
    case 3:
    case 4:
    case 5: {
      return `${string[0]}${string[0]}${string[1]}${string[1]}${string[2]}${string[2]}`
    }
    case 6: {
      return string
    }
    default: {
      return string.slice(0, 6)
    }
  }
}

function isValidHexColor(hexColor: string): boolean {
  return hexColorRegex().test(`#${hexColor}`)
}
