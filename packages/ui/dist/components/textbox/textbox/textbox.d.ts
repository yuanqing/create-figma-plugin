import { RawTextboxProps } from './private/raw-textbox.js';
export type TextboxProps = RawTextboxProps & {
    icon?: JSX.Element;
    variant?: TextboxVariant;
};
export type TextboxVariant = 'border' | 'underline';
export declare const Textbox: import("react").FC<Omit<import("../../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, TextboxProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=textbox.d.ts.map