import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface LayerProps extends FocusableComponentProps<HTMLInputElement> {
    bold?: boolean;
    children: JSX.Element;
    component?: boolean;
    description?: string;
    icon: JSX.Element;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onValueChange?: EventHandler.onValueChange<boolean>;
    value: boolean;
}
export declare const Layer: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, LayerProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=layer.d.ts.map