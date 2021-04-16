/** @jsx h */
import classnames from '@sindresorhus/class-names'
import type { ComponentChildren } from 'preact'
import { h, toChildArray } from 'preact'

import type { Props, Space } from '../../types'
import styles from './stack.css'

export interface StackProps {
  children: ComponentChildren
  space?: Space
}

export function Stack({
  children,
  space = 'small',
  ...rest
}: Props<StackProps, HTMLDivElement>): h.JSX.Element {
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
