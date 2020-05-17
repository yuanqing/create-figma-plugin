/** @jsx h */
import classnames from '@sindresorhus/class-names'
import { h } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnChange } from '../../types'
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from '../../utilities/key-codes'
import { checkIcon } from '../icon/icons/check-icon'
import styles from './selectable-item.scss'

export interface SelectableItemProps {
  bold?: boolean
  children: preact.ComponentChildren
  disabled?: boolean
  indent?: boolean
  name: string
  onChange: OnChange
  onKeyDown?: EventListener // FIXME
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function SelectableItem ({
  bold: isBold,
  children,
  disabled: isDisabled,
  indent: isIndented,
  name,
  onChange,
  onKeyDown,
  propagateEscapeKeyDown,
  value,
  ...rest
}: SelectableItemProps): h.JSX.Element {
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
    [name, value, onChange, onKeyDown, propagateEscapeKeyDown]
  )

  return (
    <label
      {...rest}
      class={classnames(
        styles.label,
        isDisabled === true ? styles.isDisabled : null,
        isBold === true ? styles.isBold : null,
        isIndented === true ? styles.isIndented : null,
        value === true ? styles.isChecked : null
      )}
      onKeyDown={isDisabled === true ? undefined : handleKeyDown}
      tabIndex={isDisabled === true ? undefined : 0}
    >
      <input
        {...rest}
        class={styles.input}
        type='checkbox'
        name={name}
        checked={value === true}
        disabled={isDisabled === true}
        onChange={handleChange}
        tabIndex={-1}
      />
      <div class={styles.text}>{children}</div>
      {value === true ? <div class={styles.icon}>{checkIcon}</div> : null}
    </label>
  )
}
