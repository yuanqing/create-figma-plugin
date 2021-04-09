/** @jsx h */
import { h, toChildArray } from 'preact'

import { HTMLProps, Space } from '../../types'
import styles from './inline.css'

export interface InlineProps {
  children: preact.ComponentChildren
  space?: Space
}

export function Inline({
  children,
  space,
  ...rest
}: HTMLProps<InlineProps, HTMLDivElement>): h.JSX.Element {
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
