/** @jsx h */
import { h } from 'preact'

import { HTMLProps, Space } from '../../types'
import styles from './vertical-space.css'

export interface VerticalSpaceProps {
  space?: Space
}

export function VerticalSpace({
  space = 'small',
  ...rest
}: HTMLProps<VerticalSpaceProps, HTMLDivElement>): h.JSX.Element {
  return <div {...rest} class={styles[space]} />
}
