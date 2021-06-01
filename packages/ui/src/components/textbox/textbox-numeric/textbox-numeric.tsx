/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../../types/types'
import { createClassName } from '../../../utilities/create-class-name'
import textboxStyles from '../textbox/textbox.css'
import {
  RawTextboxNumeric,
  RawTextboxNumericProps
} from './private/raw-textbox-numeric'

export type TextboxNumericProps<Name extends string> =
  RawTextboxNumericProps<Name> & {
    icon?: ComponentChildren
    noBorder?: boolean
  }

export function TextboxNumeric<Name extends string>({
  icon,
  noBorder = false,
  ...rest
}: Props<HTMLInputElement, TextboxNumericProps<Name>>): JSX.Element {
  if (typeof icon === 'string' && icon.length !== 1) {
    throw new Error(`String \`icon\` must be a single character: ${icon}`)
  }

  return (
    <div
      class={createClassName([
        textboxStyles.textbox,
        noBorder === true ? textboxStyles.noBorder : null,
        typeof icon === 'undefined' ? null : textboxStyles.hasIcon,
        rest.disabled === true ? textboxStyles.disabled : null
      ])}
    >
      <RawTextboxNumeric {...rest} class={textboxStyles.input} />
      {typeof icon === 'undefined' ? null : (
        <div class={textboxStyles.icon}>{icon}</div>
      )}
      <div class={textboxStyles.border} />
    </div>
  )
}
