import { JSX, RenderableProps } from 'preact'

export type OnChange<RefType extends EventTarget> = OmitThisParameter<
  JSX.GenericEventHandler<RefType>
>

export type OnValueChange<V1, N extends string, V2 = V1> = (
  newValue: V1,
  name: undefined | N,
  oldValue: V2
) => void

export type OnSelectedFiles = (files: Array<File>) => void

export type Props<
  RefType extends EventTarget = EventTarget,
  ComponentProps = Record<string, never>
> = RenderableProps<
  Omit<JSX.HTMLAttributes<RefType>, keyof ComponentProps> & ComponentProps
>
