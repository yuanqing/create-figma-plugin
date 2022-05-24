/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'

import { Props } from '../../../types/types'
import { createClassName } from '../../../utilities/create-class-name'
import textboxStyles from '../textbox/textbox.css'
import {
  RawTextboxNumeric,
  RawTextboxNumericProps
} from './private/raw-textbox-numeric'
import textboxNumericStyles from './textbox-numeric.css'

export type TextboxNumericProps<Name extends string> =
  RawTextboxNumericProps<Name> & {
    icon?: ComponentChildren
    variant?: TextboxNumericVariant
  }

export type TextboxNumericVariant = 'default' | 'border' | 'underline'

export function TextboxNumeric<Name extends string>({
  icon,
  variant = 'default',
  ...rest
}: Props<HTMLInputElement, TextboxNumericProps<Name>>): JSX.Element {
  if (typeof icon === 'string' && icon.length !== 1) {
    throw new Error(`String \`icon\` must be a single character: ${icon}`)
  }

  return (
    <div
      class={createClassName([
        textboxStyles.textbox,
        variant === 'default'
          ? null
          : variant === 'border'
          ? textboxStyles.hasBorder
          : null,
        typeof icon === 'undefined' ? null : textboxStyles.hasIcon,
        rest.disabled === true ? textboxStyles.disabled : null
      ])}
    >
      <RawTextboxNumeric
        {...rest}
        class={createClassName([
          textboxStyles.input,
          textboxNumericStyles.input
        ])}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={textboxStyles.icon}>{icon}</div>
      )}
      <div class={textboxStyles.border} />
      {variant === 'underline' ? <div class={textboxStyles.underline} /> : null}
    </div>
  )
}
