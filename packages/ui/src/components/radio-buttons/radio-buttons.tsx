import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Stack, StackSpace } from '../../layout/stack/stack.js'
import { Event, EventHandler } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { noop } from '../../utilities/no-op.js'
import styles from './radio-buttons.module.css'

const ITEM_ID_DATA_ATTRIBUTE_NAME = 'data-radio-buttons-item-id'

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
      blurOnEscapeKeyDown = true,
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
  ): JSX.Element {
    const handleChange = useCallback(
      function (event: Event.onChange<HTMLInputElement>): void {
        const id = event.currentTarget.getAttribute(
          ITEM_ID_DATA_ATTRIBUTE_NAME
        ) as string
        const newValue = options[parseInt(id, 10)].value
        onValueChange(newValue)
        onChange(event)
      },
      [onChange, onValueChange, options]
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
      <div {...rest} ref={ref} class={styles.radioButtons}>
        <Stack space={space}>
          {options.map(function (
            option: RadioButtonsOption,
            index: number
          ): JSX.Element {
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
