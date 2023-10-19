import { ComponentChildren, h } from 'preact'

import { createComponent } from '../../utilities/create-component.js'
import styles from './muted.module.css'

export type MutedProps = {
  children: ComponentChildren
}

export const Muted = createComponent<HTMLSpanElement, MutedProps>(function (
  { children, ...rest },
  ref
) {
  return (
    <span {...rest} ref={ref} class={styles.muted}>
      {children}
    </span>
  )
})
