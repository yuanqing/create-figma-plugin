/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h, toChildArray } from 'preact'

import { HTMLProps, Space } from '../../types'
import styles from './stack.css'

export interface StackProps {
  children: preact.ComponentChildren
  space?: Space
}

export function Stack({
  children,
  space = 'small',
  ...rest
}: HTMLProps<StackProps, HTMLDivElement>): h.JSX.Element {
  return (
    <div {...rest} class={classnames(styles[space])}>
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
