import { createComponent } from '../../utilities/create-component.js'
import styles from './code.module.css'

export type CodeProps = {
  children: JSX.Element
}

export const Code = createComponent<HTMLSpanElement, CodeProps>(function (
  { children, ...rest },
  ref
) {
  return (
    <code {...rest} ref={ref} class={styles.code}>
      {children}
    </code>
  )
})
