import { createComponent } from '../../utilities/create-component.js'
import styles from './bold.module.css'

export type BoldProps = {
  children: JSX.Element
}

export const Bold = createComponent<HTMLSpanElement, BoldProps>(function (
  { children, ...rest },
  ref
) {
  return (
    <strong {...rest} ref={ref} class={styles.bold}>
      {children}
    </strong>
  )
})
