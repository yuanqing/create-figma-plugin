import { MIXED_NUMBER, MIXED_STRING } from '@create-figma-plugin/utilities'

export function mapTextboxNumericValueToString(value: null | number): string {
  if (value === null) {
    return ''
  }
  if (value === MIXED_NUMBER) {
    return MIXED_STRING
  }
  return `${value}`
}
