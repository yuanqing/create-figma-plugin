import '../css/base.css'
import '../css/fonts.css'
import '../css/menu.module.css'
import '../css/theme.css'

import { FC } from 'react'
import { render as ReactRender } from 'react-dom'

export function render<P>(Plugin: FC<P>) {
  return function (rootNode: HTMLElement, props: P & JSX.IntrinsicAttributes) {
    ReactRender(<Plugin {...props} />, rootNode)
  }
}
