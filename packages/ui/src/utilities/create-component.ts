import { ComponentType, FC, Ref, forwardRef } from 'react'

export type MixinHTMLElementAttributes<
  Target extends EventTarget,
  ComponentProps = Record<string, never>
> = Omit<React.HTMLAttributes<Target>, keyof ComponentProps> & ComponentProps

export function createComponent<
  Target extends EventTarget,
  ComponentProps,
  Props = MixinHTMLElementAttributes<Target, ComponentProps>
>(fn: ComponentType): FC<Omit<Props, 'ref'> & { ref?: Ref<Target> }> {
  return forwardRef<Target, Props>(fn)
}
