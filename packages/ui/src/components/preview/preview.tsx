import { ComponentChildren, h, JSX } from 'preact'

import { createComponent } from '../../utilities/create-component.js'
import style from './preview.module.css'

export type PreviewProps = {
  children: ComponentChildren
}

export const Preview = createComponent<HTMLDivElement, PreviewProps>(function (
  { children, ...rest },
  ref
): JSX.Element {
  return (
    <div {...rest} ref={ref} class={style.preview}>
      {children}
    </div>
  )
})
