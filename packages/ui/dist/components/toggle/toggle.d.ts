import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface ToggleProps extends FocusableComponentProps<HTMLInputElement> {
    children: JSX.Element;
    disabled?: boolean;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onValueChange?: EventHandler.onValueChange<boolean>;
    value: boolean;
}
export declare const Toggle: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, ToggleProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=toggle.d.ts.map