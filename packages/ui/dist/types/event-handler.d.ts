import { JSXInternal } from 'preact/src/jsx';
type First<T extends never[]> = T[0];
type FirstArgument<EventHandler extends ((...args: any) => any) | undefined> = First<Parameters<NonNullable<EventHandler>>>;
export declare namespace EventHandler {
    type onBlur<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onBlur'];
    type onChange<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onChange'];
    type onClick<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onClick'];
    type onDragEnd<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onDragEnd'];
    type onDragEnter<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onDragEnter'];
    type onDragOver<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onDragOver'];
    type onDrop<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onDrop'];
    type onFocus<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onFocus'];
    type onInput<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onInput'];
    type onKeyDown<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onKeyDown'];
    type onMouseDown<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onMouseDown'];
    type onMouseMove<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onMouseMove'];
    type onMouseUp<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onMouseUp'];
    type onPaste<Target extends EventTarget> = JSXInternal.DOMAttributes<Target>['onPaste'];
    type onSelectedFiles = (files: Array<File>) => void;
    type onValueChange<Value> = (value: Value) => void;
}
export declare namespace Event {
    type onBlur<Target extends EventTarget> = FirstArgument<EventHandler.onBlur<Target>>;
    type onChange<Target extends EventTarget> = FirstArgument<EventHandler.onChange<Target>>;
    type onClick<Target extends EventTarget> = FirstArgument<EventHandler.onClick<Target>>;
    type onDragEnd<Target extends EventTarget> = FirstArgument<EventHandler.onDragEnd<Target>>;
    type onDragEnter<Target extends EventTarget> = FirstArgument<EventHandler.onDragEnter<Target>>;
    type onDragOver<Target extends EventTarget> = FirstArgument<EventHandler.onDragOver<Target>>;
    type onDrop<Target extends EventTarget> = FirstArgument<EventHandler.onDrop<Target>>;
    type onFocus<Target extends EventTarget> = FirstArgument<EventHandler.onFocus<Target>>;
    type onInput<Target extends EventTarget> = FirstArgument<EventHandler.onInput<Target>>;
    type onKeyDown<Target extends EventTarget> = FirstArgument<EventHandler.onKeyDown<Target>>;
    type onMouseDown<Target extends EventTarget> = FirstArgument<EventHandler.onMouseDown<Target>>;
    type onMouseMove<Target extends EventTarget> = FirstArgument<EventHandler.onMouseMove<Target>>;
    type onMouseUp<Target extends EventTarget> = FirstArgument<EventHandler.onMouseUp<Target>>;
    type onPaste<Target extends EventTarget> = FirstArgument<EventHandler.onPaste<Target>>;
}
export {};
//# sourceMappingURL=event-handler.d.ts.map