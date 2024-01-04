import { EventHandler } from '../../types/event-handler.js';
import { StackSpace } from '../../layout/stack/stack.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface RadioButtonsProps extends FocusableComponentProps<HTMLDivElement> {
    disabled?: boolean;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onValueChange?: EventHandler.onValueChange<string>;
    options: Array<RadioButtonsOption>;
    space?: StackSpace;
    value: null | string;
}
export type RadioButtonsOption = {
    disabled?: boolean;
    children?: JSX.Element;
    value: string;
};
export declare const RadioButtons: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, RadioButtonsProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=radio-buttons.d.ts.map