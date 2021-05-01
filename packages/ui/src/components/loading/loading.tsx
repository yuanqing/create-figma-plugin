/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types'
import { LoadingIndicator } from '../loading-indicator/loading-indicator'
import styles from './loading.css'

export type LoadingProps = {
  children: ComponentChildren
}

export function Loading({
  children,
  ...rest
}: Props<HTMLDivElement, LoadingProps>): JSX.Element {
  return (
    <div {...rest} class={styles.loading}>
      <div class={styles.wrapper}>
        <div class={styles.loadingIndicator}>
          <LoadingIndicator />
        </div>
        {children}
      </div>
    </div>
  )
}
