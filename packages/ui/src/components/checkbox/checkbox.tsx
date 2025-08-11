import { MIXED_BOOLEAN } from '@create-figma-plugin/utilities'
import { ComponentChildren, h, RefObject } from 'preact'
import { useCallback, useEffect, useRef } from 'preact/hooks'

import { IconCheck16 } from '../../icons/icon-16/icon-check-16.js'
import { IconMixed16 } from '../../icons/icon-16/icon-mixed-16.js'
import { Event, EventHandler } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { getCurrentFromRef } from '../../utilities/get-current-from-ref.js'
import { noop } from '../../utilities/no-op.js'
import styles from './checkbox.module.css'

export interface CheckboxProps
  extends FocusableComponentProps<HTMLInputElement> {
  children: ComponentChildren
  disabled?: boolean
  onChange?: EventHandler.onChange<HTMLInputElement>
  onValueChange?: EventHandler.onValueChange<boolean>
  value: typeof MIXED_BOOLEAN | boolean
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
    const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

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

    useEffect(
      function () {
        const inputElement = getCurrentFromRef(inputElementRef)
        inputElement.indeterminate = value === MIXED_BOOLEAN ? true : false
      },
      [value]
    )

    const refCallback = useCallback(
      function (inputElement: null | HTMLInputElement) {
        inputElementRef.current = inputElement
        if (ref === null) {
          return
        }
        if (typeof ref === 'function') {
          ref(inputElement)
          return
        }
        ref.current = inputElement
      },
      [ref]
    )

    return (
      <label
        class={createClassName([
          styles.checkbox,
          disabled === true ? styles.disabled : null,
          value === MIXED_BOOLEAN ? styles.mixed : null
        ])}
      >
        <input
          {...rest}
          ref={refCallback}
          checked={value === true}
          class={styles.input}
          disabled={disabled === true}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          type="checkbox"
        />
        <div class={styles.box}>
          {value === MIXED_BOOLEAN ? (
            <div class={styles.icon}>
              <IconMixed16 />
            </div>
          ) : value === true ? (
            <div class={styles.icon}>
              <IconCheck16 />
            </div>
          ) : null}
        </div>
        <div class={styles.children}>{children}</div>
      </label>
    )
  }
)
