import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface LinkProps extends FocusableComponentProps<HTMLAnchorElement> {
    children: JSX.Element;
    fullWidth?: boolean;
    href: string;
    target?: string;
}
export declare const Link: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLAnchorElement, LinkProps>, "ref"> & {
    ref?: import("react").Ref<HTMLAnchorElement> | undefined;
}>;
//# sourceMappingURL=link.d.ts.map