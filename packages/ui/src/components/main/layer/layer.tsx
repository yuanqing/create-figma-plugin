/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'

import type { Props } from '../../../types'
import { IconComponent } from '../../icon/icon-component/icon-component'
import { IconFrame } from '../../icon/icon-frame/icon-frame'
import styles from './layer.css'

const icons = {
  component: <IconComponent />,
  frame: <IconFrame />
}

export interface LayerProps {
  children: ComponentChildren
  onClick: JSX.MouseEventHandler<HTMLDivElement>
  pageName?: string
  selected?: boolean
  type: LayerType
}
export type LayerType = 'frame' | 'component'

export function Layer({
  children,
  onClick,
  pageName,
  selected = false,
  type,
  ...rest
}: Props<HTMLDivElement, LayerProps>): JSX.Element {
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
      {typeof pageName === 'undefined' ? null : (
        <div class={styles.pageName}>{pageName}</div>
      )}
    </div>
  )
}
