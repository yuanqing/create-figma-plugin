import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './text.module.css'

export type TextProps = {
  align?: TextAlignment
  children: ComponentChildren
  numeric?: boolean
}
export type TextAlignment = 'left' | 'center' | 'right'

export function Text({
  align = 'left',
  children,
  numeric = false,
  ...rest
}: Props<HTMLDivElement, TextProps>): JSX.Element {
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
}
