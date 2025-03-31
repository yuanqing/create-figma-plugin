import { h } from 'preact'

import { IconColor } from '../../types/colors.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './loading-indicator.module.css'

export type LoadingIndicatorProps = {
  color?: IconColor
}

export const LoadingIndicator = createComponent<
  HTMLDivElement,
  LoadingIndicatorProps
>(function ({ color, ...rest }, ref) {
  return (
    <div {...rest} ref={ref} class={styles.loadingIndicator}>
      <svg
        class={styles.svg}
        style={
          typeof color === 'undefined'
            ? undefined
            : {
                fill: `var(--figma-color-icon-${color})`
              }
        }
      >
        <path d="M11.333 3.011a6 6 0 0 0-2.834-.99A.534.534 0 0 1 8 1.5c.001-.276.225-.502.5-.482A7 7 0 1 1 1.019 8.5.473.473 0 0 1 1.5 8c.276 0 .498.224.52.5a6 6 0 1 0 9.313-5.489Z" />
      </svg>
    </div>
  )
})
