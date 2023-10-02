import { ComponentChildren, h } from 'preact'

import { createClassName } from '../../../utilities/create-class-name.js'
import { createComponent } from '../../../utilities/create-component.js'
import { RawTextbox, RawTextboxProps } from './private/raw-textbox.js'
import styles from './textbox.module.css'

export type TextboxProps = RawTextboxProps & {
  icon?: ComponentChildren
  variant?: TextboxVariant
}

export type TextboxVariant = 'border' | 'underline'

export const Textbox = createComponent<HTMLInputElement, TextboxProps>(
  function ({ icon, variant, ...rest }, ref) {
    if (typeof icon === 'string' && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: ${icon}`)
    }

    return (
      <div
        class={createClassName([
          styles.textbox,
          variant === 'border' ? styles.hasBorder : null,
          typeof icon === 'undefined' ? null : styles.hasIcon,
          rest.disabled === true ? styles.disabled : null
        ])}
      >
        <RawTextbox {...rest} ref={ref} class={styles.input} />
        {typeof icon === 'undefined' ? null : (
          <div class={styles.icon}>{icon}</div>
        )}
        <div class={styles.border} />
        {variant === 'underline' ? <div class={styles.underline} /> : null}
      </div>
    )
  }
)
