/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types'
import { createClassName } from '../../utilities/create-class-name'
import { IconCheck } from '../icon/icon-check/icon-check'
import styles from './selectable-item.css'

export type SelectableItemProps<N extends string> = {
  bold?: boolean
  children: ComponentChildren
  disabled?: boolean
  indent?: boolean
  name?: N
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, N>
  propagateEscapeKeyDown?: boolean
  value: boolean
}

export function SelectableItem<N extends string>({
  bold = false,
  children,
  disabled = false,
  indent = false,
  name,
  onChange = function () {},
  onValueChange = function () {},
  propagateEscapeKeyDown = true,
  value = false,
  ...rest
}: Props<HTMLInputElement, SelectableItemProps<N>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      onValueChange(!value, name)
      onChange(event)
    },
    [name, onChange, onValueChange, value]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
      if (event.key !== 'Escape') {
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      event.currentTarget.blur()
    },
    [propagateEscapeKeyDown]
  )

  return (
    <label
      class={createClassName([
        styles.label,
        disabled === true ? styles.disabled : null,
        bold === true ? styles.bold : null,
        indent === true ? styles.indent : null,
        value === true ? styles.checked : null
      ])}
    >
      <input
        {...rest}
        checked={value === true}
        class={styles.input}
        disabled={disabled === true}
        name={name}
        onChange={handleChange}
        onKeyDown={disabled === true ? undefined : handleKeyDown}
        tabIndex={disabled === true ? -1 : 0}
        type="checkbox"
      />
      <div class={styles.children}>{children}</div>
      {value === true ? (
        <div class={styles.checkIcon}>
          <IconCheck />
        </div>
      ) : null}
    </label>
  )
}
