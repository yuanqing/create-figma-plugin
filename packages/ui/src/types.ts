import type { h, RenderableProps } from 'preact'

export type Alignment = 'left' | 'center' | 'right'

export type Props<
  ComponentProps,
  RefType extends EventTarget = EventTarget
> = RenderableProps<
  Omit<h.JSX.HTMLAttributes<RefType>, keyof ComponentProps> & ComponentProps
>

export type OnChange<Value, Key extends string> = (
  state: { [k in Key]: Value },
  value?: Value,
  name?: Key,
  event?: Event
) => void | Promise<void>

export type OnSelectedFiles = (
  files?: Array<File>,
  event?: Event
) => void | Promise<void>

export type Option = OptionHeader | OptionValue | OptionSeparator

export interface OptionHeader {
  id?: null | string
  header: string
}

export interface OptionValue {
  id?: null | string
  value: string
}

export interface OptionSeparator {
  id?: null | string
  separator: true
}

export type Space = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'
