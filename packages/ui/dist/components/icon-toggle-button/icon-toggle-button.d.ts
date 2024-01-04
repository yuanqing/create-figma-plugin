import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface IconToggleButtonProps extends FocusableComponentProps<HTMLInputElement> {
    children: JSX.Element;
    disabled?: boolean;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onValueChange?: EventHandler.onValueChange<boolean>;
    value: boolean;
}
export declare const IconToggleButton: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, IconToggleButtonProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=icon-toggle-button.d.ts.map