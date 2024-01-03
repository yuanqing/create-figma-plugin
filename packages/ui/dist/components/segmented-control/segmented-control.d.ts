import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface SegmentedControlProps extends FocusableComponentProps<HTMLInputElement> {
    disabled?: boolean;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onValueChange?: EventHandler.onValueChange<string>;
    options: Array<SegmentedControlOption>;
    value: string;
}
export type SegmentedControlOption = {
    disabled?: boolean;
    children?: JSX.Element;
    value: string;
};
export declare const SegmentedControl: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, SegmentedControlProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=segmented-control.d.ts.map