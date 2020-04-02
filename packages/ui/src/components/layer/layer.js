/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { componentIcon } from '../icon/icons/component-icon'
import { frameIcon } from '../icon/icons/frame-icon'
import '../../scss/base.scss'
import styles from './layer.scss'

const icons = {
  component: componentIcon,
  frame: frameIcon
}

export function Layer ({
  children,
  pageName,
  selected: isSelected,
  type,
  ...rest
}) {
  return (
    <div
      {...rest}
      class={classnames(
        styles[type],
        styles.layer,
        isSelected === true ? styles.isSelected : null
      )}
    >
      <div class={styles.icon}>{icons[type]}</div>
      <div class={styles.layerName}>{children}</div>
      {typeof pageName !== 'undefined' ? (
        <div class={styles.pageName}>{pageName}</div>
      ) : null}
    </div>
  )
}
