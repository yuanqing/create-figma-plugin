/** @jsx h */
import './css/base.css'

import type { FunctionComponent } from 'preact'
import { h, render as preactRender } from 'preact'

export function render(Plugin: FunctionComponent) {
  return function (rootNode: HTMLElement, data: Record<string, unknown>): void {
    preactRender(<Plugin {...data} />, rootNode)
  }
}
