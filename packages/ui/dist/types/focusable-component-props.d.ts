import { EventHandler } from './event-handler.js';
export interface FocusableComponentProps<Target extends EventTarget> {
    onKeyDown?: EventHandler.onKeyDown<Target>;
    propagateEscapeKeyDown?: boolean;
}
//# sourceMappingURL=focusable-component-props.d.ts.map