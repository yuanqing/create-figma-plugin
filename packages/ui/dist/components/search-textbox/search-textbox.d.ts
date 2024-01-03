import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface SearchTextboxProps extends FocusableComponentProps<HTMLInputElement> {
    clearOnEscapeKeyDown?: boolean;
    disabled?: boolean;
    onFocus?: EventHandler.onFocus<HTMLInputElement>;
    onInput?: EventHandler.onInput<HTMLInputElement>;
    onKeyDown?: EventHandler.onKeyDown<HTMLInputElement>;
    onValueInput?: EventHandler.onValueChange<string>;
    placeholder?: string;
    spellCheck?: boolean;
    value: string;
}
export declare const SearchTextbox: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, SearchTextboxProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=search-textbox.d.ts.map