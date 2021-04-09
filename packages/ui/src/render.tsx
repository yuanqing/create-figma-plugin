/** @jsx h */
import './css/base.css'

import { h, render as preactRender } from 'preact'

export function render(
  Plugin: preact.FunctionComponent<any>,
  props?: { [key: string]: any }
) {
  return function (rootNode: HTMLElement, data: { [key: string]: any }): void {
    preactRender(<Plugin {...props} {...data} />, rootNode)
  }
}
