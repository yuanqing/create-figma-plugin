/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'

import { HTMLProps } from '../../types'
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
  selected,
  type,
  ...rest
}: HTMLProps<LayerProps, HTMLDivElement>): h.JSX.Element {
  return (
    <div
      {...rest}
      class={classnames(
        styles[type],
        styles.layer,
        selected === true ? styles.selected : null
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
