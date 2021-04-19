import type { JSX, RenderableProps } from 'preact'

export type OnChange<Value> = (
  value: Value,
  name: undefined | string,
  event: Event
) => void

export type OnSelectedFiles = (files: Array<File>, event: Event) => void

export type Props<
  RefType extends EventTarget = EventTarget,
  ComponentProps = Record<string, never>
> = RenderableProps<
  Omit<JSX.HTMLAttributes<RefType>, keyof ComponentProps> & ComponentProps
>
