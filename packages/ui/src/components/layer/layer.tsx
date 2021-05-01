/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types'
import { createClassName } from '../../utilities/create-class-name'
import { IconComponent } from '../icon/icon-component/icon-component'
import { IconFrame } from '../icon/icon-frame/icon-frame'
import styles from './layer.css'

const icons = {
  component: <IconComponent />,
  frame: <IconFrame />
}

export type LayerProps = {
  children: ComponentChildren
  onClick?: JSX.MouseEventHandler<HTMLDivElement>
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
      class={createClassName([
        styles[type],
        styles.layer,
        selected === true ? styles.selected : null
      ])}
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
