/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h, toChildArray } from 'preact'

import { Space } from '../../types'
import styles from './stack.scss'

export interface StackProps {
  children: preact.ComponentChildren
  space?: Space
}

export function Stack ({
  children,
  space = 'small',
  ...rest
}: StackProps): h.JSX.Element {
  return (
    <div {...rest} class={classnames(styles[space])}>
      {toChildArray(children).map(function (element, index) {
        return (
          <div class={styles.item} key={index}>
            {element}
          </div>
        )
      })}
    </div>
  )
}
