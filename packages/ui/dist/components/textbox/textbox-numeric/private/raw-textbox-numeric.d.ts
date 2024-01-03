import { EventHandler } from '../../../../types/event-handler.js';
import { FocusableComponentProps } from '../../../../types/focusable-component-props.js';
export interface RawTextboxNumericProps extends FocusableComponentProps<HTMLInputElement> {
    disabled?: boolean;
    incrementBig?: number;
    incrementSmall?: number;
    integer?: boolean;
    maximum?: number;
    minimum?: number;
    onBlur?: EventHandler.onBlur<HTMLInputElement>;
    onFocus?: EventHandler.onFocus<HTMLInputElement>;
    onInput?: EventHandler.onInput<HTMLInputElement>;
    onMouseDown?: EventHandler.onMouseUp<HTMLInputElement>;
    onNumericValueInput?: EventHandler.onValueChange<null | number>;
    onValueInput?: EventHandler.onValueChange<string>;
    placeholder?: string;
    revertOnEscapeKeyDown?: boolean;
    suffix?: string;
    validateOnBlur?: (value: null | number) => null | number | boolean;
    value: string;
}
export declare const RawTextboxNumeric: import("react").FC<Omit<import("../../../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, RawTextboxNumericProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=raw-textbox-numeric.d.ts.map