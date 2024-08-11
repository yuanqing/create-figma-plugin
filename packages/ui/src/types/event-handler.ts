/* eslint-disable @typescript-eslint/no-namespace */

import { JSX } from 'preact'

type FirstArgument<EventHandler extends ((...args: any) => any) | undefined> =
  Parameters<NonNullable<EventHandler>>[0]

export namespace EventHandler {
  export type onBlur<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onBlur']
  export type onChange<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onChange']
  export type onClick<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onClick']
  export type onDragEnd<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onDragEnd']
  export type onDragEnter<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onDragEnter']
  export type onDragOver<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onDragOver']
  export type onDrop<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onDrop']
  export type onFocus<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onFocus']
  export type onInput<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onInput']
  export type onKeyDown<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onKeyDown']
  export type onMouseDown<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onMouseDown']
  export type onMouseMove<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onMouseMove']
  export type onMouseUp<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onMouseUp']
  export type onPaste<Target extends EventTarget> =
    JSX.DOMAttributes<Target>['onPaste']
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
