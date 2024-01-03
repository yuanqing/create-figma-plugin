import { Space } from '../../types/space.js';
export type ContainerProps = {
    children: JSX.Element;
    space: ContainerSpace;
};
export type ContainerSpace = Space;
export declare const Container: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, ContainerProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=container.d.ts.map