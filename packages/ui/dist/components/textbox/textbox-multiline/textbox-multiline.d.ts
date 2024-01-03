import { EventHandler } from '../../../types/event-handler.js';
import { FocusableComponentProps } from '../../../types/focusable-component-props.js';
export interface TextboxMultilineProps extends FocusableComponentProps<HTMLTextAreaElement> {
    disabled?: boolean;
    grow?: boolean;
    onBlur?: EventHandler.onBlur<HTMLTextAreaElement>;
    onFocus?: EventHandler.onFocus<HTMLTextAreaElement>;
    onInput?: EventHandler.onInput<HTMLTextAreaElement>;
    onMouseDown?: EventHandler.onMouseDown<HTMLTextAreaElement>;
    onValueInput?: EventHandler.onValueChange<string>;
    placeholder?: string;
    revertOnEscapeKeyDown?: boolean;
    rows?: number;
    spellCheck?: boolean;
    validateOnBlur?: (value: string) => string | boolean;
    value: string;
    variant?: TextboxMultilineVariant;
}
export type TextboxMultilineVariant = 'border' | 'underline';
export declare const TextboxMultiline: import("react").FC<Omit<import("../../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLTextAreaElement, TextboxMultilineProps>, "ref"> & {
    ref?: import("react").Ref<HTMLTextAreaElement> | undefined;
}>;
//# sourceMappingURL=textbox-multiline.d.ts.map