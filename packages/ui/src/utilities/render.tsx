import '!../css/base.css'

import { FunctionComponent, h, JSX, render as preactRender } from 'preact'

export function render<P>(Plugin: FunctionComponent<P>) {
  return function (rootNode: HTMLElement, props: P & JSX.IntrinsicAttributes) {
    preactRender(<Plugin {...props} />, rootNode)
  }
}
