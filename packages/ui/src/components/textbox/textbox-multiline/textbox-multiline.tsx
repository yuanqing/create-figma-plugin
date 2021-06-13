/** @jsx h */
import { h, JSX, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types/types'
import { createClassName } from '../../../utilities/create-class-name'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import { MIXED_STRING } from '../../../utilities/mixed-values'
import { isKeyCodeCharacterGenerating } from '../private/is-keycode-character-generating'
import styles from './textbox-multiline.css'

const EMPTY_STRING = ''

export type TextboxMultilineProps<Name extends string> = {
  disabled?: boolean
  name?: Name
  noBorder?: boolean
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLTextAreaElement>>
  onValueInput?: OnValueChange<string, Name>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  revertOnEscapeKeyDown?: boolean
  spellCheck?: boolean
  rows?: number
  validateOnBlur?: (value: string) => string | boolean
  value: string
}

export function TextboxMultiline<Name extends string>({
  disabled = false,
  name,
  noBorder = false,
  onInput = function () {},
  onValueInput = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  revertOnEscapeKeyDown = false,
  rows = 3,
  spellCheck = false,
  validateOnBlur,
  value,
  ...rest
}: Props<HTMLTextAreaElement, TextboxMultilineProps<Name>>): JSX.Element {
  const textAreaElementRef: RefObject<HTMLTextAreaElement> = useRef(null)
  const isRevertOnEscapeKeyDownRef: RefObject<boolean> = useRef(false) // Boolean flag to exit early from `handleBlur`

  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

  const setTextAreaElementValue = useCallback(function (value: string): void {
    const textAreaElement = getCurrentFromRef(textAreaElementRef)
    textAreaElement.value = value
    const inputEvent = document.createEvent('Event')
    inputEvent.initEvent('input', true, true)
    textAreaElement.dispatchEvent(inputEvent)
  }, [])

  const handleBlur = useCallback(
    function (): void {
      if (isRevertOnEscapeKeyDownRef.current === true) {
        isRevertOnEscapeKeyDownRef.current = false
        return
      }
      if (typeof validateOnBlur !== 'undefined') {
        const result = validateOnBlur(value)
        if (typeof result === 'string') {
          // Set to the value returned by `validateOnBlur`
          setTextAreaElementValue(result)
          setOriginalValue(EMPTY_STRING)
          return
        }
        if (result === false) {
          // Revert the original value
          if (value !== originalValue) {
            setTextAreaElementValue(originalValue)
          }
          setOriginalValue(EMPTY_STRING)
          return
        }
      }
      setOriginalValue(EMPTY_STRING)
    },
    [originalValue, setTextAreaElementValue, validateOnBlur, value]
  )

  const handleFocus = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLTextAreaElement>): void {
      setOriginalValue(value)
      event.currentTarget.select()
    },
    [value]
  )

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLTextAreaElement>): void {
      onValueInput(event.currentTarget.value, name)
      onInput(event)
    },
    [name, onInput, onValueInput]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLTextAreaElement>): void {
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (revertOnEscapeKeyDown === true) {
          isRevertOnEscapeKeyDownRef.current = true
          setTextAreaElementValue(originalValue)
          setOriginalValue(EMPTY_STRING)
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
    [
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setTextAreaElementValue,
      value
    ]
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
        noBorder === true ? styles.noBorder : null,
        disabled === true ? styles.disabled : null
      ])}
    >
      <textarea
        {...rest}
        ref={textAreaElementRef}
        class={styles.textarea}
        disabled={disabled === true}
        name={name}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onMouseUp={handleMouseUp}
        placeholder={placeholder}
        rows={rows}
        spellcheck={spellCheck}
        tabIndex={disabled === true ? -1 : 0}
        value={value === MIXED_STRING ? 'Mixed' : value}
      />
      <div class={styles.border} />
    </div>
  )
}
