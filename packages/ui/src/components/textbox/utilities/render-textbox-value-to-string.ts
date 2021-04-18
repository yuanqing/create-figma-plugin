import { TEXTBOX_MIXED_VALUE } from './textbox-mixed-value'

export function renderTextboxValueToString(
  value: null | typeof TEXTBOX_MIXED_VALUE | string
): string {
  if (value === null) {
    return ''
  }
  if (value === TEXTBOX_MIXED_VALUE) {
    return 'Mixed'
  }
  return value
}
