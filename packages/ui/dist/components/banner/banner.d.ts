export type BannerProps = {
    children: JSX.Element;
    icon: JSX.Element;
    variant?: BannerVariant;
};
export type BannerVariant = 'success' | 'warning';
export declare const Banner: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, BannerProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=banner.d.ts.map