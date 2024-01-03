import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface IconButtonProps extends FocusableComponentProps<HTMLButtonElement> {
    children: JSX.Element;
    disabled?: boolean;
    onClick?: EventHandler.onClick<HTMLButtonElement>;
}
export declare const IconButton: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLButtonElement, IconButtonProps>, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement> | undefined;
}>;
//# sourceMappingURL=icon-button.d.ts.map