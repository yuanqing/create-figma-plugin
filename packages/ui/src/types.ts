export type Alignment = 'left' | 'center' | 'right'

export type OnChange = (
  state?: any,
  value?: any,
  name?: string,
  event?: Event
) => void | Promise<void>
export type OnSelectedFiles = (
  files?: Array<File>,
  event?: Event
) => void | Promise<void>

export type Option = OptionHeader | OptionValue | OptionSeparator
export interface OptionHeader {
  id: null | string
  header: string
}
export interface OptionValue {
  id: null | string
  value: string
}
export interface OptionSeparator {
  id: null | string
  separator: true
}

export type Space = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'
