export type Alignment = 'left' | 'center' | 'right'

export type Option = OptionHeader | OptionValue | OptionSeparator

export interface OptionHeader {
  id?: number
  header: string
}
export function isOptionHeader (option: Option): option is OptionHeader {
  return typeof (option as OptionHeader).header === 'string'
}

export interface OptionValue {
  id?: number
  value: string
}
export function isOptionValue (option: Option): option is OptionValue {
  return typeof (option as OptionValue).value === 'string'
}

export interface OptionSeparator {
  id?: number
  separator: true
}
export function isOptionSeparator (option: Option): option is OptionSeparator {
  return (option as OptionSeparator).separator === true
}

export type Space = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'
