export type TextProps = {
    align?: TextAlignment;
    children: JSX.Element;
    numeric?: boolean;
};
export type TextAlignment = 'left' | 'center' | 'right';
export declare const Text: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, TextProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=text.d.ts.map