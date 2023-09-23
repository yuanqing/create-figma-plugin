import { h, JSX } from 'preact'

import { createComponent } from '../../utilities/create-component.js'
import styles from './divider.module.css'

export const Divider = createComponent<HTMLHRElement, Record<string, never>>(
  function (rest, ref): JSX.Element {
    return <hr {...rest} ref={ref} class={styles.divider} />
  }
)
