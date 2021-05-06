/** @jsx h */
import { h, JSX } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types'
import { createClassName } from '../../../utilities/create-class-name'
import { MIXED_STRING } from '../../../utilities/mixed-values'
import { isKeyCodeCharacterGenerating } from '../private/is-keycode-character-generating'
import styles from './textbox-multiline.css'

const EMPTY_STRING = ''

export type TextboxMultilineProps<N extends string> = {
  disabled?: boolean
  name?: N
  noBorder?: boolean
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLTextAreaElement>>
  onValueChange?: OnValueChange<string, N>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  revertOnEscapeKeyDown?: boolean
  rows?: number
  value: string
}

export function TextboxMultiline<N extends string>({
  disabled = false,
  name,
  noBorder = false,
  onInput = function () {},
  onValueChange = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  revertOnEscapeKeyDown = false,
  rows = 3,
  value,
  ...rest
}: Props<HTMLTextAreaElement, TextboxMultilineProps<N>>): JSX.Element {
  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it is focused

  const handleBlur = useCallback(function (): void {
    setOriginalValue(EMPTY_STRING)
  }, [])

  const handleFocus = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLTextAreaElement>): void {
      setOriginalValue(value)
      event.currentTarget.select()
    },
    [value]
  )

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLTextAreaElement>): void {
      onValueChange(event.currentTarget.value, name)
      onInput(event)
    },
    [name, onInput, onValueChange]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLTextAreaElement>): void {
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (revertOnEscapeKeyDown === true) {
          event.currentTarget.value = originalValue
          const inputEvent = document.createEvent('Event')
          inputEvent.initEvent('input', true, true)
          event.currentTarget.dispatchEvent(inputEvent)
        }
        event.currentTarget.blur()
        return
      }
      if (
        value === MIXED_STRING &&
        isKeyCodeCharacterGenerating(event.keyCode) === false
      ) {
        // Prevent changing the cursor position with the keyboard if `value` is `MIXED_STRING`
        event.preventDefault()
        event.currentTarget.select()
      }
    },
    [originalValue, propagateEscapeKeyDown, revertOnEscapeKeyDown, value]
  )

  const handleMouseUp = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLTextAreaElement>): void {
      if (value === MIXED_STRING) {
        // Prevent changing the selection if `value` is `MIXED_STRING`
        event.preventDefault()
      }
    },
    [value]
  )

  return (
    <div
      class={createClassName([
        styles.textboxMultiline,
        noBorder === true ? styles.noBorder : null
      ])}
    >
      <textarea
        {...rest}
        class={styles.textArea}
        disabled={disabled === true}
        name={name}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onMouseUp={handleMouseUp}
        placeholder={placeholder}
        rows={rows}
        tabIndex={disabled === true ? -1 : 0}
        value={value === MIXED_STRING ? 'Mixed' : value}
      />
      <div class={styles.border} />
    </div>
  )
}
