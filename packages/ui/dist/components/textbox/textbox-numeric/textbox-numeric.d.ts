import { RawTextboxNumericProps } from './private/raw-textbox-numeric.js';
export type TextboxNumericProps = RawTextboxNumericProps & {
    icon?: JSX.Element;
    variant?: TextboxNumericVariant;
};
export type TextboxNumericVariant = 'border' | 'underline';
export declare const TextboxNumeric: import("react").FC<Omit<import("../../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, TextboxNumericProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=textbox-numeric.d.ts.map