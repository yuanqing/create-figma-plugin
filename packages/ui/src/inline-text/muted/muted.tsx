import { ComponentChildren, h, JSX } from 'preact'

import { createComponent } from '../../utilities/create-component.js'
import styles from './muted.module.css'

export type MutedProps = {
  children: ComponentChildren
}

export const Muted = createComponent<HTMLSpanElement, MutedProps>(function (
  { children, ...rest },
  ref
): JSX.Element {
  return (
    <span {...rest} ref={ref} class={styles.muted}>
      {children}
    </span>
  )
})
