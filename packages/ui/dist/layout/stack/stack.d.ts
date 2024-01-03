import { Space } from '../../types/space.js';
export type StackProps = {
    children: JSX.Element;
    space: StackSpace;
};
export type StackSpace = Space;
export declare const Stack: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, StackProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=stack.d.ts.map