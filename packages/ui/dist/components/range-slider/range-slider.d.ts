import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface RangeSliderProps extends FocusableComponentProps<HTMLInputElement> {
    disabled?: boolean;
    increment?: number;
    maximum: number;
    minimum: number;
    onInput?: EventHandler.onInput<HTMLInputElement>;
    onNumericValueInput?: EventHandler.onValueChange<number>;
    onValueInput?: EventHandler.onValueChange<string>;
    value: string;
}
export declare const RangeSlider: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, RangeSliderProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=range-slider.d.ts.map