import { EventHandler } from '../../../types/event-handler.js';
import { RGBA } from '../../../types/rgba.js';
export type TextboxColorProps = {
    propagateEscapeKeyDown?: boolean;
    disabled?: boolean;
    hexColor: string;
    hexColorPlaceholder?: string;
    onHexColorInput?: EventHandler.onInput<HTMLInputElement>;
    onHexColorKeyDown?: EventHandler.onKeyDown<HTMLInputElement>;
    onHexColorValueInput?: EventHandler.onValueChange<string>;
    onOpacityInput?: EventHandler.onInput<HTMLInputElement>;
    onOpacityKeyDown?: EventHandler.onKeyDown<HTMLInputElement>;
    onOpacityNumericValueInput?: EventHandler.onValueChange<null | number>;
    onOpacityValueInput?: EventHandler.onValueChange<string>;
    onRgbaColorValueInput?: EventHandler.onValueChange<null | RGBA>;
    opacity: string;
    opacityPlaceholder?: string;
    revertOnEscapeKeyDown?: boolean;
    variant?: TextboxColorVariant;
};
export type TextboxColorVariant = 'border' | 'underline';
export declare const TextboxColor: import("react").FC<Omit<import("../../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, TextboxColorProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=textbox-color.d.ts.map