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

export interface LayerProps {
  children: React.ReactNode,
  onClick: (event?) => void, // FIXME
  pageName?: string,
  selected?: boolean,
  type: LayerType,
}
type LayerType = 'frame' | 'component'

export function Layer ({
  children,
  onClick,
  pageName,
  selected: isSelected,
  type,
  ...rest
} : LayerProps) {
  return (
    <div
      {...rest}
      class={classnames(
        styles[type],
        styles.layer,
        isSelected === true ? styles.isSelected : null
      )}
      onClick={onClick}
    >
      <div class={styles.icon}>{icons[type]}</div>
      <div class={styles.layerName}>{children}</div>
      {typeof pageName !== 'undefined' ? (
        <div class={styles.pageName}>{pageName}</div>
      ) : null}
    </div>
  )
}
