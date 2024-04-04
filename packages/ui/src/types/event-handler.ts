/* eslint-disable @typescript-eslint/no-namespace */

import { JSXInternal } from 'preact/src/jsx'

type FirstArgument<EventHandler extends ((...args: any) => any) | undefined> =
  Parameters<NonNullable<EventHandler>>[0]

export namespace EventHandler {
  export type onBlur<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onBlur']
  export type onChange<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onChange']
  export type onClick<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onClick']
  export type onDragEnd<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onDragEnd']
  export type onDragEnter<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onDragEnter']
  export type onDragOver<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onDragOver']
  export type onDrop<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onDrop']
  export type onFocus<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onFocus']
  export type onInput<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onInput']
  export type onKeyDown<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onKeyDown']
  export type onMouseDown<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onMouseDown']
  export type onMouseMove<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onMouseMove']
  export type onMouseUp<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onMouseUp']
  export type onPaste<Target extends EventTarget> =
    JSXInternal.DOMAttributes<Target>['onPaste']
  export type onSelectedFiles = (files: Array<File>) => void
  export type onValueChange<Value> = (value: Value) => void
}

export namespace Event {
  export type onBlur<Target extends EventTarget> = FirstArgument<
    EventHandler.onBlur<Target>
  >
  export type onChange<Target extends EventTarget> = FirstArgument<
    EventHandler.onChange<Target>
  >
  export type onClick<Target extends EventTarget> = FirstArgument<
    EventHandler.onClick<Target>
  >
  export type onDragEnd<Target extends EventTarget> = FirstArgument<
    EventHandler.onDragEnd<Target>
  >
  export type onDragEnter<Target extends EventTarget> = FirstArgument<
    EventHandler.onDragEnter<Target>
  >
  export type onDragOver<Target extends EventTarget> = FirstArgument<
    EventHandler.onDragOver<Target>
  >
  export type onDrop<Target extends EventTarget> = FirstArgument<
    EventHandler.onDrop<Target>
  >
  export type onFocus<Target extends EventTarget> = FirstArgument<
    EventHandler.onFocus<Target>
  >
  export type onInput<Target extends EventTarget> = FirstArgument<
    EventHandler.onInput<Target>
  >
  export type onKeyDown<Target extends EventTarget> = FirstArgument<
    EventHandler.onKeyDown<Target>
  >
  export type onMouseDown<Target extends EventTarget> = FirstArgument<
    EventHandler.onMouseDown<Target>
  >
  export type onMouseMove<Target extends EventTarget> = FirstArgument<
    EventHandler.onMouseMove<Target>
  >
  export type onMouseUp<Target extends EventTarget> = FirstArgument<
    EventHandler.onMouseUp<Target>
  >
  export type onPaste<Target extends EventTarget> = FirstArgument<
    EventHandler.onPaste<Target>
  >
}
