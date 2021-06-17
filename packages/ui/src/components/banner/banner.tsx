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
export type BannerType = 'informative' | 'upsell' | 'warning'

export function Banner({
  children,
  icon,
  type = 'informative',
  ...rest
}: Props<HTMLDivElement, BannerProps>): JSX.Element {
  return (
    <div {...rest} class={createClassName([styles.banner, styles[type]])}>
      <div class={styles.icon}>{icon}</div>
      <div>{children}</div>
    </div>
  )
}
