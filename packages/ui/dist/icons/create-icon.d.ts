import { IconColor } from '../types/colors.js';
export type IconProps = {
    color?: IconColor;
};
export declare function createIcon(path: string, options: {
    width: number;
    height: number;
}): import("react").FC<Omit<import("../utilities/create-component.js").MixinHTMLElementAttributes<SVGSVGElement, IconProps>, "ref"> & {
    ref?: import("react").Ref<SVGSVGElement> | undefined;
}>;
//# sourceMappingURL=create-icon.d.ts.map