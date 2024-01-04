import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface ButtonProps extends FocusableComponentProps<HTMLButtonElement> {
    children: JSX.Element;
    danger?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
    onClick?: EventHandler.onClick<HTMLButtonElement>;
    secondary?: boolean;
}
export declare const Button: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLButtonElement, ButtonProps>, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement> | undefined;
}>;
//# sourceMappingURL=button.d.ts.map