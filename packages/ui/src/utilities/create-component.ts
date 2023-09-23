import { FunctionalComponent, JSX, Ref, RenderableProps } from 'preact'
import { ForwardFn, forwardRef } from 'preact/compat'

export type MixinHTMLElementAttributes<
  Target extends EventTarget,
  ComponentProps = Record<string, never>
> = RenderableProps<
  Omit<JSX.HTMLAttributes<Target>, keyof ComponentProps> & ComponentProps
>

export function createComponent<
  Target extends EventTarget,
  ComponentProps,
  Props = MixinHTMLElementAttributes<Target, ComponentProps>
>(
  fn: ForwardFn<Props, Target>
): FunctionalComponent<Omit<Props, 'ref'> & { ref?: Ref<Target> }> {
  return forwardRef<Target, Props>(fn)
}
