/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../../types/types'
import { createClassName } from '../../../utilities/create-class-name'
import { RawTextbox, RawTextboxProps } from './private/raw-textbox'
import styles from './textbox.css'

export type TextboxProps<Name extends string> = RawTextboxProps<Name> & {
  icon?: ComponentChildren
  noBorder?: boolean
}

export function Textbox<Name extends string>({
  icon,
  noBorder = false,
  ...rest
}: Props<HTMLInputElement, TextboxProps<Name>>): JSX.Element {
  if (typeof icon === 'string' && icon.length !== 1) {
    throw new Error(`String \`icon\` must be a single character: ${icon}`)
  }

  return (
    <div
      class={createClassName([
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        typeof icon === 'undefined' ? null : styles.hasIcon,
        rest.disabled === true ? styles.disabled : null
      ])}
    >
      <RawTextbox {...rest} class={styles.input} />
      {typeof icon === 'undefined' ? null : (
        <div class={styles.icon}>{icon}</div>
      )}
      <div class={styles.border} />
    </div>
  )
}
