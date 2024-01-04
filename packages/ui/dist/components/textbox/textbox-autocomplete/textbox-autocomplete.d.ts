import { EventHandler } from '../../../types/event-handler.js';
export interface TextboxAutocompleteProps {
    disabled?: boolean;
    filter?: boolean;
    icon?: JSX.Element;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onInput?: EventHandler.onInput<HTMLInputElement>;
    onKeyDown?: EventHandler.onKeyDown<HTMLInputElement>;
    onMouseDown?: EventHandler.onMouseDown<HTMLInputElement>;
    onPaste?: EventHandler.onPaste<HTMLInputElement>;
    onValueInput?: EventHandler.onValueChange<string>;
    options: Array<TextboxAutocompleteOption>;
    placeholder?: string;
    propagateEscapeKeyDown?: boolean;
    revertOnEscapeKeyDown?: boolean;
    spellCheck?: boolean;
    strict?: boolean;
    top?: boolean;
    value: string;
    variant?: TextboxAutocompleteVariant;
}
export type TextboxAutocompleteOption = TextboxAutocompleteOptionHeader | TextboxAutocompleteOptionValue | TextboxAutocompleteOptionSeparator;
export type TextboxAutocompleteOptionHeader = {
    header: string;
};
export type TextboxAutocompleteOptionValue = {
    value: string;
    disabled?: boolean;
};
export type TextboxAutocompleteOptionSeparator = '-';
export type TextboxAutocompleteVariant = 'border' | 'underline';
export declare const TextboxAutocomplete: import("react").FC<Omit<import("../../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, TextboxAutocompleteProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=textbox-autocomplete.d.ts.map