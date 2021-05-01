import { JSX, RenderableProps } from 'preact'

export type OnValueChange<V, N extends string> = (
  newValue: V,
  name: undefined | N
) => void

export type Props<
  T extends EventTarget = EventTarget,
  P = Record<string, never>
> = RenderableProps<Omit<JSX.HTMLAttributes<T>, keyof P> & P>
