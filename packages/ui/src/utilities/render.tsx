import '!../css/base.css'

import { FunctionComponent, h, render as preactRender } from 'preact'

export function render<P extends h.JSX.IntrinsicAttributes>(
  Plugin: FunctionComponent<P>
) {
  return function (rootNode: HTMLElement, props: P): void {
    preactRender(<Plugin {...props} />, rootNode)
  }
}
