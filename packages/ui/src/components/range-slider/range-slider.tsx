/** @jsx h */
import { h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './range-slider.css'

export type RangeSliderProps = {
  disabled?: boolean
  increment?: number
  maximum: number
  minimum: number
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  propagateEscapeKeyDown?: boolean
  value: number
  vertical?: boolean
}

export function RangeSlider({
  disabled = false,
  increment = 1,
  maximum,
  minimum,
  onInput = function () {},
  propagateEscapeKeyDown = true,
  value,
  vertical = false,
  ...rest
}: Props<HTMLInputElement, RangeSliderProps>): JSX.Element {
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
        disabled === true ? styles.disabled : null,
        vertical === true ? styles.vertical : null
      ])}
    >
      <input
        class={styles.input}
        disabled={disabled}
        max={maximum}
        min={minimum}
        onInput={onInput}
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
