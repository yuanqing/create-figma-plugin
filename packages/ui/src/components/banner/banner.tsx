import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './banner.module.css'

export type BannerProps = {
  children: ComponentChildren
  icon: ComponentChildren
  variant?: BannerVariant
}
export type BannerVariant = 'success' | 'warning'

export function Banner({
  children,
  icon,
  variant,
  ...rest
}: Props<HTMLDivElement, BannerProps>): JSX.Element {
  return (
    <div
      {...rest}
      class={createClassName([
        styles.banner,
        typeof variant === 'undefined' ? null : styles[variant]
      ])}
    >
      <div class={styles.icon}>{icon}</div>
      <div class={styles.children}>{children}</div>
    </div>
  )
}
