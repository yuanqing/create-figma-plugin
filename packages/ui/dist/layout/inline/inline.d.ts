import { Space } from '../../types/space.js';
export type InlineProps = {
    children: JSX.Element;
    space?: InlineSpace;
};
export type InlineSpace = Space;
export declare const Inline: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, InlineProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=inline.d.ts.map