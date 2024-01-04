import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface SelectableItemProps extends FocusableComponentProps<HTMLInputElement> {
    bold?: boolean;
    children: JSX.Element;
    disabled?: boolean;
    indent?: boolean;
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onValueChange?: EventHandler.onValueChange<boolean>;
    value: boolean;
}
export declare const SelectableItem: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLInputElement, SelectableItemProps>, "ref"> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
}>;
//# sourceMappingURL=selectable-item.d.ts.map