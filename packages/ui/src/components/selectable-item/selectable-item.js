/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import '../../scss/base.scss'
import styles from './selectable-item.scss'

export function SelectableItem ({
  bold: isBold,
  children,
  disabled: isDisabled,
  icon,
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
      {typeof icon !== 'undefined' ? (
        <div class={styles.icon}>{icon}</div>
      ) : null}
      <div
        class={classnames(styles.text, isBold === true ? styles.isBold : null)}
      >
        {children}
      </div>
    </div>
  )
}
