import { ComponentChildren, h } from 'preact'

import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import styles from './text.module.css'

export type TextProps = {
  align?: TextAlignment
  children: ComponentChildren
  numeric?: boolean
}
export type TextAlignment = 'left' | 'center' | 'right'

export const Text = createComponent<HTMLDivElement, TextProps>(function ({
  align = 'left',
  children,
  numeric = false,
  ...rest
}) {
  return (
    <div
      {...rest}
      class={createClassName([
        styles.text,
        styles[align],
        numeric === true ? styles.numeric : null
      ])}
    >
      {children}
    </div>
  )
})
