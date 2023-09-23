import { ComponentChild, ComponentChildren, h, JSX, toChildArray } from 'preact'

import { Space } from '../../types/space.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './inline.module.css'

export type InlineProps = {
  children: ComponentChildren
  space?: InlineSpace
}
export type InlineSpace = Space

export const Inline = createComponent<HTMLDivElement, InlineProps>(function (
  { children, space, ...rest },
  ref
): JSX.Element {
  return (
    <div
      {...rest}
      ref={ref}
      class={typeof space === 'undefined' ? undefined : styles[space]}
    >
      {toChildArray(children).map(function (
        child: ComponentChild,
        index: number
      ): JSX.Element {
        return (
          <div key={index} class={styles.child}>
            {child}
          </div>
        )
      })}
    </div>
  )
})
