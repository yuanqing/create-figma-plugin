import { h } from 'preact'

import { Space } from '../../types/space.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './vertical-space.module.css'

export type VerticalSpaceProps = {
  space: VerticalSpaceSpace
}
export type VerticalSpaceSpace = Space

export const VerticalSpace = createComponent<
  HTMLDivElement,
  VerticalSpaceProps
>(function ({ space, ...rest }, ref) {
  return <div {...rest} ref={ref} class={styles[space]} />
})
