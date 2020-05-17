/** @jsx h */
import { h, toChildArray } from 'preact'
import { Space } from '../../types/space'
import styles from './inline.scss'

export interface InlineProps {
  children: React.ReactNode,
  space?: Space
}

export function Inline ({ children, space, ...rest } : InlineProps) {
  return (
    <div {...rest} class={typeof space === 'undefined' ? null : styles[space]}>
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
