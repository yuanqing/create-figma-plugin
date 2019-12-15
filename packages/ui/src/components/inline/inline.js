/** @jsx h */
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './inline.scss'

export function Inline ({ children, space, ...rest }) {
  return (
    <div {...rest} class={typeof space === 'undefined' ? null : styles[space]}>
      {children.map(function (element, index) {
        return (
          <div class={styles.item} key={index}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
