import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Event, EventHandler } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { noop } from '../../utilities/no-op.js'
import styles from './icon-toggle-button.module.css'

export interface IconToggleButtonProps
  extends FocusableComponentProps<HTMLInputElement> {
  children: ComponentChildren
  disabled?: boolean
  onChange?: EventHandler.onChange<HTMLInputElement>
  onValueChange?: EventHandler.onValueChange<boolean>
  value: boolean
}

export const IconToggleButton = createComponent<
  HTMLInputElement,
  IconToggleButtonProps
>(function (
  {
    blurOnEscapeKeyDown = true,
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
): JSX.Element {
  const handleChange = useCallback(
    function (event: Event.onChange<HTMLInputElement>): void {
      onValueChange(!(value === true))
      onChange(event)
    },
    [onChange, onValueChange, value]
  )

  const handleKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLInputElement>): void {
      onKeyDown(event)
      if (event.key !== 'Escape') {
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      if (blurOnEscapeKeyDown === true) {
        event.currentTarget.blur()
      }
    },
    [blurOnEscapeKeyDown, onKeyDown, propagateEscapeKeyDown]
  )

  return (
    <label
      class={createClassName([
        styles.iconToggleButton,
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
        onKeyDown={disabled === true ? undefined : handleKeyDown}
        tabIndex={0}
        type="checkbox"
      />
      <div class={styles.box}>
        <div class={styles.icon}>{children}</div>
      </div>
    </label>
  )
})
