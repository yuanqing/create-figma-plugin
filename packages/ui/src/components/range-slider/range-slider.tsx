/** @jsx h */
import { h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './range-slider.css'

export type RangeSliderProps<Name extends string> = {
  disabled?: boolean
  increment?: number
  maximum: number
  minimum: number
  name?: Name
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onNumericValueInput?: OnValueChange<number, Name>
  onValueInput?: OnValueChange<string, Name>
  propagateEscapeKeyDown?: boolean
  value: string
}

export function RangeSlider<Name extends string>({
  disabled = false,
  increment = 1,
  maximum,
  minimum,
  name,
  onInput = function () {},
  onNumericValueInput = function () {},
  onValueInput = function () {},
  propagateEscapeKeyDown = true,
  value,
  ...rest
}: Props<HTMLInputElement, RangeSliderProps<Name>>): JSX.Element {
  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      onInput(event)
      const value = event.currentTarget.value
      onValueInput(value, name)
      onNumericValueInput(parseFloat(value), name)
    },
    [name, onInput, onNumericValueInput, onValueInput]
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
        styles.rangeSlider,
        disabled === true ? styles.disabled : null
      ])}
    >
      <input
        class={styles.input}
        disabled={disabled}
        max={maximum}
        min={minimum}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        step={increment}
        type="range"
        value={value}
        {...rest}
      />
      <div class={styles.border} />
    </label>
  )
}
