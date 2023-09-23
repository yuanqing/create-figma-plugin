import { ComponentChild, h, JSX, toChildArray } from 'preact'

import { Space } from '../../types/space.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './columns.module.css'

export type ColumnsProps = {
  children: ComponentChild
  space?: ColumnsSpace
}
export type ColumnsSpace = Space

export const Columns = createComponent<HTMLDivElement, ColumnsProps>(function (
  { children, space, ...rest },
  ref
): JSX.Element {
  return (
    <div
      {...rest}
      ref={ref}
      class={createClassName([
        styles.columns,
        typeof space === 'undefined' ? null : styles[space]
      ])}
    >
      {toChildArray(children).map(function (
        element: ComponentChild,
        index: number
      ): JSX.Element {
        return (
          <div key={index} class={styles.child}>
            {element}
          </div>
        )
      })}
    </div>
  )
})
