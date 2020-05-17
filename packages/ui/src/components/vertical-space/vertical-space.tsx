/** @jsx h */
import { h } from 'preact'
import { Space } from '../../types/space'
import styles from './vertical-space.scss'

export interface VerticalSpaceProps {
  space?: Space
}

export function VerticalSpace ({ space = 'small', ...rest } : VerticalSpaceProps) {
  return <div {...rest} class={styles[space]} />
}
