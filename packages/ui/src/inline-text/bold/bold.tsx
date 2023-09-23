import { ComponentChildren, h, JSX } from 'preact'

import { createComponent } from '../../utilities/create-component.js'
import styles from './bold.module.css'

export type BoldProps = {
  children: ComponentChildren
}

export const Bold = createComponent<HTMLSpanElement, BoldProps>(function (
  { children, ...rest },
  ref
): JSX.Element {
  return (
    <strong {...rest} ref={ref} class={styles.bold}>
      {children}
    </strong>
  )
})
