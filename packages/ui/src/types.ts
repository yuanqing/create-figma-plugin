import { JSX, RenderableProps } from 'preact'

export type OnChange<T extends EventTarget> = OmitThisParameter<
  JSX.GenericEventHandler<T>
>

export type OnValueChange<V1, N extends string, V2 = V1> = (
  newValue: V1,
  name: undefined | N,
  oldValue: V2
) => void

export type OnSelectedFiles = (files: Array<File>) => void

export type Props<
  T extends EventTarget = EventTarget,
  P = Record<string, never>
> = RenderableProps<Omit<JSX.HTMLAttributes<T>, keyof P> & P>
