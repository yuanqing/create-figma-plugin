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
        <path d="M8 1c-1.384 0-2.738.41-3.889 1.18-1.151.769-2.048 1.862-2.578 3.141-.53 1.28-.669 2.687-.398 4.045.27 1.357.936 2.605 1.915 3.584.98.979 2.227 1.645 3.584 1.916 1.358.27 2.766.131 4.045-.399 1.279-.53 2.372-1.427 3.141-2.578C14.59 10.738 15 9.384 15 8h1c0 1.582-.47 3.129-1.348 4.445-.88 1.315-2.129 2.34-3.59 2.946-1.462.606-3.07.764-4.623.455-1.552-.308-2.977-1.07-4.096-2.19-1.119-1.118-1.88-2.543-2.19-4.095C-.154 8.009.004 6.4.61 4.939c.605-1.462 1.63-2.712 2.946-3.59C4.871.468 6.418 0 8 0z" />
      </svg>
    </div>
  )
})
