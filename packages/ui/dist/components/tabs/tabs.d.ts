import { EventHandler } from '../../types/event-handler.js';
import { FocusableComponentProps } from '../../types/focusable-component-props.js';
export interface TabsProps extends FocusableComponentProps<HTMLDivElement> {
    onChange?: EventHandler.onChange<HTMLInputElement>;
    onValueChange?: EventHandler.onValueChange<string>;
    options: Array<TabsOption>;
    value: null | string;
}
export type TabsOption = {
    children: JSX.Element;
    value: string;
};
export declare const Tabs: import("react").FC<Omit<import("../../utilities/create-component.js").MixinHTMLElementAttributes<HTMLDivElement, TabsProps>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
}>;
//# sourceMappingURL=tabs.d.ts.map