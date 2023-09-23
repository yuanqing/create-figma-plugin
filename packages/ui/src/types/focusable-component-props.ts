import { EventHandler } from './event-handler.js'

export interface FocusableComponentProps<Target extends EventTarget> {
  blurOnEscapeKeyDown?: boolean
  onKeyDown?: EventHandler.onKeyDown<Target>
  propagateEscapeKeyDown?: boolean
}
