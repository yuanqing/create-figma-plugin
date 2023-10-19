import { ComponentChildren, h } from 'preact'

import { Space } from '../../types/space.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './container.module.css'

export type ContainerProps = {
  children: ComponentChildren
  space: ContainerSpace
}
export type ContainerSpace = Space

export const Container = createComponent<HTMLDivElement, ContainerProps>(
  function ({ space, ...rest }, ref) {
    return <div {...rest} ref={ref} class={styles[space]} />
  }
)
