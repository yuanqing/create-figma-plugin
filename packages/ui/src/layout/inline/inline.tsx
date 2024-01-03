import { Children } from 'react'
import { Space } from '../../types/space.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './inline.module.css'

export type InlineProps = {
  children: JSX.Element
  space?: InlineSpace
}
export type InlineSpace = Space

export const Inline = createComponent<HTMLDivElement, InlineProps>(function (
  { children, space, ...rest },
  ref
) {
  return (
    <div
      {...rest}
      ref={ref}
      class={typeof space === 'undefined' ? undefined : styles[space]}
    >
      {Children.toArray(children).map(function (
        child: JSX.Element,
        index: number
      ) {
        return (
          <div key={index} class={styles.child}>
            {child}
          </div>
        )
      })}
    </div>
  )
})
