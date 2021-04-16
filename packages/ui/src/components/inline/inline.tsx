/** @jsx h */
import type { ComponentChildren } from 'preact'
import { h, toChildArray } from 'preact'

import type { Props, Space } from '../../types'
import styles from './inline.css'

export interface InlineProps {
  children: ComponentChildren
  space?: Space
}

export function Inline({
  children,
  space,
  ...rest
}: Props<InlineProps, HTMLDivElement>): h.JSX.Element {
  return (
    <div
      {...rest}
      class={typeof space === 'undefined' ? undefined : styles[space]}
    >
      {toChildArray(children).map(function (element, index) {
        return (
          <div key={index} class={styles.item}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
