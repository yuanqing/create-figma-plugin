/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './selectable-item.scss'

export function SelectableItem ({
  children,
  disabled: isDisabled,
  selected: isSelected,
  ...rest
}) {
  return (
    <div
      {...rest}
      class={classnames(
        styles.selectableItem,
        isDisabled === true ? styles.isDisabled : null,
        isSelected === true ? styles.isSelected : null
      )}
    >
      <div class={styles.text}>{children}</div>
    </div>
  )
}
