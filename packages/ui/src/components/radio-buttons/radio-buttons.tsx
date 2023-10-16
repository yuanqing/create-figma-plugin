import { ComponentChildren, h } from 'preact'
import { useCallback } from 'preact/hooks'

import { Stack, StackSpace } from '../../layout/stack/stack.js'
import { Event, EventHandler } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { noop } from '../../utilities/no-op.js'
import { ITEM_ID_DATA_ATTRIBUTE_NAME } from '../../utilities/private/constants.js'
import styles from './radio-buttons.module.css'

export interface RadioButtonsProps
  extends FocusableComponentProps<HTMLDivElement> {
  disabled?: boolean
  onChange?: EventHandler.onChange<HTMLInputElement>
  onValueChange?: EventHandler.onValueChange<string>
  options: Array<RadioButtonsOption>
  space?: StackSpace
  value: null | string
}
export type RadioButtonsOption = {
  disabled?: boolean
  children?: ComponentChildren
  value: string
}

export const RadioButtons = createComponent<HTMLDivElement, RadioButtonsProps>(
  function (
    {
      disabled = false,
      onChange = noop,
      onKeyDown = noop,
      onValueChange = noop,
      options,
      propagateEscapeKeyDown = true,
      space = 'small',
      value,
      ...rest
    },
    ref
  ) {
    const handleChange = useCallback(
      function (event: Event.onChange<HTMLInputElement>) {
        onChange(event)
        const id = event.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME)
        if (id === null) {
          throw new Error('`id` is `null`')
        }
        const newValue = options[parseInt(id, 10)].value
        onValueChange(newValue)
      },
      [onChange, onValueChange, options]
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
      <div ref={ref} class={styles.radioButtons}>
        <Stack space={space}>
          {options.map(function (option: RadioButtonsOption, index: number) {
            const children =
              typeof option.children === 'undefined'
                ? `${option.value}`
                : option.children
            const isOptionDisabled =
              disabled === true || option.disabled === true
            return (
              <label
                key={index}
                class={createClassName([
                  styles.label,
                  isOptionDisabled === true ? styles.disabled : null
                ])}
              >
                <input
                  {...rest}
                  checked={value === option.value}
                  class={styles.input}
                  disabled={isOptionDisabled === true}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  type="radio"
                  value={`${option.value}`}
                  {...{ [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
                />
                <div class={styles.fill} />
                <div class={styles.border} />
                <div class={styles.children}>{children}</div>
              </label>
            )
          })}
        </Stack>
      </div>
    )
  }
)
