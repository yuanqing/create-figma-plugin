import { ComponentType, FC, Ref } from 'react';
export type MixinHTMLElementAttributes<Target extends EventTarget, ComponentProps = Record<string, never>> = Omit<React.HTMLAttributes<Target>, keyof ComponentProps> & ComponentProps;
export declare function createComponent<Target extends EventTarget, ComponentProps, Props = MixinHTMLElementAttributes<Target, ComponentProps>>(fn: ComponentType): FC<Omit<Props, 'ref'> & {
    ref?: Ref<Target>;
}>;
//# sourceMappingURL=create-component.d.ts.map