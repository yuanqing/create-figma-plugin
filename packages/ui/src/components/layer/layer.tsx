/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'

import { componentIcon } from '../icon/icons/component-icon'
import { frameIcon } from '../icon/icons/frame-icon'
import styles from './layer.scss'

const icons = {
  component: componentIcon,
  frame: frameIcon
}

export interface LayerProps {
  children: preact.ComponentChildren
  onClick: EventListener
  pageName?: string
  selected?: boolean
  type: LayerType
}
type LayerType = 'frame' | 'component'

export function Layer({
  children,
  onClick,
  pageName,
  selected: isSelected,
  type,
  ...rest
}: LayerProps): h.JSX.Element {
  return (
    <div
      {...rest}
      className={classnames(
        styles[type],
        styles.layer,
        isSelected === true ? styles.isSelected : null
      )}
      onClick={onClick}
    >
      <div className={styles.icon}>{icons[type]}</div>
      <div className={styles.layerName}>{children}</div>
      {typeof pageName !== 'undefined' ? (
        <div className={styles.pageName}>{pageName}</div>
      ) : null}
    </div>
  )
}
