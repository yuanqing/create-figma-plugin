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

export function SelectableItem({
  bold,
  children,
  disabled,
  indent,
  name,
  onChange,
  onKeyDown,
  propagateEscapeKeyDown = true,
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
      className={classnames(
        styles.label,
        disabled === true ? styles.isDisabled : null,
        bold === true ? styles.isBold : null,
        indent === true ? styles.isIndented : null,
        value === true ? styles.isChecked : null
      )}
      onKeyDown={disabled === true ? undefined : handleKeyDown}
      tabIndex={disabled === true ? undefined : 0}
    >
      <input
        {...rest}
        className={styles.input}
        type="checkbox"
        name={name}
        checked={value === true}
        disabled={disabled === true}
        onChange={handleChange}
        tabIndex={-1}
      />
      <div className={styles.text}>{children}</div>
      {value === true ? <div className={styles.icon}>{checkIcon}</div> : null}
    </label>
  )
}
