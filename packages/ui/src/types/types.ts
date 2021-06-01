import { JSX, RenderableProps } from 'preact'

export type OnValueChange<Value, Name extends string> = (
  newValue: Value,
  name?: Name
) => void

export type Props<
  Target extends EventTarget = EventTarget,
  ComponentProps = Record<string, never>
> = RenderableProps<
  Omit<JSX.HTMLAttributes<Target>, keyof ComponentProps> & ComponentProps
>
