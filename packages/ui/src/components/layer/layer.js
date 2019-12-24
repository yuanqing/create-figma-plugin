/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { componentIcon } from '../../icons/component-icon'
import { frameIcon } from '../../icons/frame-icon'
import '../../scss/base.scss'
import styles from './layer.scss'

const icons = {
  component: componentIcon,
  frame: frameIcon
}

export function Layer ({ children, type, selected: isSelected, ...rest }) {
  console.log(icons[type])
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
      <div class={styles.text}>{children}</div>
    </div>
  )
}
