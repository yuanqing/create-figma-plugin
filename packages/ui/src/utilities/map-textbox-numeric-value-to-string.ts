import { MIXED_NUMBER, MIXED_STRING } from './mixed-values'

export function mapTextboxNumericValueToString(value: null | number): string {
  if (value === null) {
    return ''
  }
  if (value === MIXED_NUMBER) {
    return MIXED_STRING
  }
  return `${value}`
}
