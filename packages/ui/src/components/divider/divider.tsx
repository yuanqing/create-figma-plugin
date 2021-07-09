/** @jsx h */
import { h, JSX } from 'preact'

import { Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './divider.css'

export function Divider({
  className,
  class: cssClass,
  ...props
}: Props<HTMLHRElement>): JSX.Element {
  return (
    <hr
      {...props}
      class={createClassName([className, cssClass, styles.divider])}
    />
  )
}
