/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './stack.scss'

export function Stack ({ children, space = 'small', ...rest }) {
  return (
    <div {...rest} class={classnames(styles.stack, styles[space])}>
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
