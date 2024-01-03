import { Children } from 'react'
import { Space } from '../../types/space.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './stack.module.css'

export type StackProps = {
  children: JSX.Element
  space: StackSpace
}
export type StackSpace = Space

export const Stack = createComponent<HTMLDivElement, StackProps>(function (
  { children, space, ...rest },
  ref
) {
  return (
    <div {...rest} ref={ref} class={styles[space]}>
      {Children.toArray(children).map(function (
        element: JSX.Element,
        index: number
      ) {
        return (
          <div key={index} class={styles.child}>
            {element}
          </div>
        )
      })}
    </div>
  )
})
