import { ComponentChildren, h, JSX } from 'preact'

import { createComponent } from '../../utilities/create-component.js'
import styles from './middle-align.module.css'

export type MiddleAlignProps = {
  children: ComponentChildren
}

export const MiddleAlign = createComponent<HTMLDivElement, MiddleAlignProps>(
  function ({ children, ...rest }, ref): JSX.Element {
    return (
      <div {...rest} ref={ref} class={styles.middleAlign}>
        <div class={styles.children}>{children}</div>
      </div>
    )
  }
)
