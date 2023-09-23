import { ComponentChildren, h, JSX } from 'preact'

import { createComponent } from '../../utilities/create-component.js'
import styles from './code.module.css'

export type CodeProps = {
  children: ComponentChildren
}

export const Code = createComponent<HTMLSpanElement, CodeProps>(function (
  { children, ...rest },
  ref
): JSX.Element {
  return (
    <code {...rest} ref={ref} class={styles.code}>
      {children}
    </code>
  )
})
