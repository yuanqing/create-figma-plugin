import { Event, EventHandler } from '../../types/event-handler.js'

import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { IconControlCheckboxChecked12 } from '../../icons/icon-12/icon-control-checkbox-checked-12.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { noop } from '../../utilities/no-op.js'
import styles from './checkbox.module.css'
import { useCallback } from 'react'

export interface CheckboxProps
  extends FocusableComponentProps<HTMLInputElement> {
  children: JSX.Element
  disabled?: boolean
  onChange?: EventHandler.onChange<HTMLInputElement>
  onValueChange?: EventHandler.onValueChange<boolean>
  value: boolean
}

export const Checkbox = createComponent<HTMLInputElement, CheckboxProps>(
  function (
    {
      children,
      disabled = false,
      onChange = noop,
      onKeyDown = noop,
      onValueChange = noop,
      propagateEscapeKeyDown = true,
      value,
      ...rest
    },
    ref
  ) {
    const handleChange = useCallback(
      function (event: Event.onChange<HTMLInputElement>) {
        onChange(event)
        const newValue = event.currentTarget.checked === true
        onValueChange(newValue)
      },
      [onChange, onValueChange]
    )

    const handleKeyDown = useCallback(
      function (event: Event.onKeyDown<HTMLInputElement>) {
        onKeyDown(event)
        if (event.key === 'Escape') {
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          event.currentTarget.blur()
        }
      },
      [onKeyDown, propagateEscapeKeyDown]
    )

    return (
      <label
        class={createClassName([
          styles.checkbox,
          disabled === true ? styles.disabled : null
        ])}
      >
        <input
          {...rest}
          ref={ref}
          checked={value === true}
          class={styles.input}
          disabled={disabled === true}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          type="checkbox"
        />
        <div class={styles.fill}>
          {value === true ? (
            <div class={styles.checkIcon}>
              <IconControlCheckboxChecked12 />
            </div>
          ) : null}
        </div>
        <div class={styles.border} />
        <div class={styles.children}>{children}</div>
      </label>
    )
  }
)
