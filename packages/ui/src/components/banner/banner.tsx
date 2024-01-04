import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './banner.module.css'

export type BannerProps = {
  children: JSX.Element
  icon: JSX.Element
  variant?: BannerVariant
}
export type BannerVariant = 'success' | 'warning'

export const Banner = createComponent<HTMLDivElement, BannerProps>(function (
  { children, icon, variant, ...rest },
  ref
) {
  return (
    <div
      {...rest}
      ref={ref}
      className={createClassName([
        styles.banner,
        typeof variant === 'undefined' ? null : styles[variant]
      ])}
    >
      <div class={styles.icon}>{icon}</div>
      <div class={styles.children}>{children}</div>
    </div>
  )
})
