/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnChange } from '../../types'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import styles from './checkbox.scss'

export interface CheckboxProps {
  children: preact.ComponentChildren
  disabled?: boolean
  focused?: boolean
  name: string
  onChange: OnChange
  onKeyDown?: EventListener
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function Checkbox({
  children,
  disabled,
  focused,
  name,
  onChange,
  onKeyDown,
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: CheckboxProps): h.JSX.Element {
  const handleChange = useCallback(
    function (event: Event) {
      const newValue = !(value === true)
      onChange({ [name]: newValue }, newValue, name, event)
    },
    [name, onChange, value]
  )

  const handleKeyDown = useCallback(
    function (event: KeyboardEvent) {
      switch (event.keyCode) {
        case ESCAPE_KEY_CODE: {
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          ;(event.target as HTMLElement).blur()
          break
        }
        case ENTER_KEY_CODE: {
          event.stopPropagation()
          const newValue = !(value === true)
          onChange({ [name]: newValue }, newValue, name, event)
          break
        }
      }
      if (typeof onKeyDown === 'function') {
        onKeyDown(event)
      }
    },
    [name, onChange, onKeyDown, propagateEscapeKeyDown, value]
  )

  return (
    <label
      class={classnames(
        styles.label,
        disabled === true ? styles.disabled : null
      )}
    >
      <input
        {...rest}
        checked={value === true}
        class={styles.input}
        data-initial-focus={focused === true}
        disabled={disabled === true}
        name={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        tabIndex={disabled === true ? undefined : 0}
        type="checkbox"
      />
      <div class={styles.text}>{children}</div>
    </label>
  )
}
