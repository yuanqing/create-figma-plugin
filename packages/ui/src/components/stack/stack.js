/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import styles from './stack.scss'

export function Stack ({
  children,
  extraSmall,
  small,
  medium,
  large,
  ...rest
}) {
  return (
    <div
      {...rest}
      class={classnames(
        styles.stack,
        (extraSmall === true ? styles.extraSmall : null) ||
          (small === true ? styles.small : null) ||
          (medium === true ? styles.medium : null) ||
          (large === true ? styles.large : null)
      )}
    >
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
