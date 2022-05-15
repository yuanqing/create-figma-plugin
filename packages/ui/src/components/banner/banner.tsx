/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './banner.css'

export type BannerProps = {
  children: ComponentChildren
  icon: ComponentChildren
  type?: BannerType
}
export type BannerType = 'success' | 'warning'

export function Banner({
  children,
  icon,
  type,
  ...rest
}: Props<HTMLDivElement, BannerProps>): JSX.Element {
  return (
    <div
      {...rest}
      class={createClassName([
        styles.banner,
        typeof type === 'undefined' ? null : styles[type]
      ])}
    >
      <div class={styles.icon}>{icon}</div>
      <div class={styles.children}>{children}</div>
    </div>
  )
}
