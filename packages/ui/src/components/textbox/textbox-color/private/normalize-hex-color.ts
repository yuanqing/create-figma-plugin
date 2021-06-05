import {
  convertNamedColorToHexColor,
  isValidHexColor
} from '@create-figma-plugin/utilities'

export function normalizeUserInputColor(string: string): null | string {
  const parsedNamedColor = convertNamedColorToHexColor(string)
  if (parsedNamedColor !== null) {
    return parsedNamedColor
  }
  const hexColor = createHexColor(string).toUpperCase()
  if (isValidHexColor(hexColor) === false) {
    return null
  }
  return hexColor
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
