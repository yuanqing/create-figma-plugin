import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface DisclosureProps extends FocusableComponentProps<HTMLInputElement> {
    children: JSX.Element;
    onClick?: EventHandler.onClick<HTMLInputElement>;
    open: boolean;
    title: string;
}
export declare const Disclosure: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, DisclosureProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=disclosure.d.ts.map