import { Children } from 'react'
import { Space } from '../../types/space.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './columns.module.css'

export type ColumnsProps = {
  children: JSX.Element
  space?: ColumnsSpace
}
export type ColumnsSpace = Space

export const Columns = createComponent<HTMLDivElement, ColumnsProps>(function (
  { children, space, ...rest },
  ref
) {
  return (
    <div
      {...rest}
      ref={ref}
      class={createClassName([
        styles.columns,
        typeof space === 'undefined' ? null : styles[space]
      ])}
    >
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
