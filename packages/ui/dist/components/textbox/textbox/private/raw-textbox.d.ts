import { EventHandler } from '../../../../types/event-handler.js';
import { FocusableComponentProps } from '../../../../types/focusable-component-props.js';
export interface RawTextboxProps extends FocusableComponentProps<HTMLInputElement> {
    disabled?: boolean;
    onBlur?: EventHandler.onBlur<HTMLInputElement>;
    onFocus?: EventHandler.onFocus<HTMLInputElement>;
    onMouseDown?: EventHandler.onMouseUp<HTMLInputElement>;
    onInput?: EventHandler.onInput<HTMLInputElement>;
    onValueInput?: EventHandler.onValueChange<string>;
    password?: boolean;
    placeholder?: string;
    revertOnEscapeKeyDown?: boolean;
    spellCheck?: boolean;
    validateOnBlur?: (value: string) => string | boolean;
    value: string;
}
export declare const RawTextbox: import("react").FC<Omit<import("../../../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, RawTextboxProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=raw-textbox.d.ts.map