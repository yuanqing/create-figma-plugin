import { Space } from '../../types/space.js';
export type ColumnsProps = {
    children: JSX.Element;
    space?: ColumnsSpace;
};
export type ColumnsSpace = Space;
export declare const Columns: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, ColumnsProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=columns.d.ts.map