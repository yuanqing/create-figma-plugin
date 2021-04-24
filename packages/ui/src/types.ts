import type { JSX, RenderableProps } from 'preact'

export type OnValueChange<V, N extends string> = (
  value: V,
  name: undefined | N
) => void

export type OnSelectedFiles = (files: Array<File>) => void

export type Props<
  RefType extends EventTarget = EventTarget,
  ComponentProps = Record<string, never>
> = RenderableProps<
  Omit<JSX.HTMLAttributes<RefType>, keyof ComponentProps> & ComponentProps
>
