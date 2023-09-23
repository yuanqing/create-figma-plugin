import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, JSX, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import { Event, EventHandler } from '../../../types/event-handler.js'
import { FocusableComponentProps } from '../../../types/focusable-component-props.js'
import { createClassName } from '../../../utilities/create-class-name.js'
import { createComponent } from '../../../utilities/create-component.js'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref.js'
import { noop } from '../../../utilities/no-op.js'
import { isKeyCodeCharacterGenerating } from '../private/is-keycode-character-generating.js'
import styles from './textbox-multiline.module.css'

const EMPTY_STRING = ''

export interface TextboxMultilineProps
  extends FocusableComponentProps<HTMLTextAreaElement> {
  grow?: boolean
  disabled?: boolean
  onInput?: EventHandler.onInput<HTMLTextAreaElement>
  onValueInput?: (value: string) => void
  placeholder?: string
  revertOnEscapeKeyDown?: boolean
  rows?: number
  spellCheck?: boolean
  validateOnBlur?: (value: string) => string | boolean
  value: string
  variant?: TextboxMultilineVariant
}

export type TextboxMultilineVariant = 'border' | 'underline'

export const TextboxMultiline = createComponent<
  HTMLTextAreaElement,
  TextboxMultilineProps
>(function (
  {
    blurOnEscapeKeyDown = true,
    grow = false,
    disabled = false,
    onInput = noop,
    onKeyDown = noop,
    onValueInput = noop,
    placeholder,
    propagateEscapeKeyDown = true,
    revertOnEscapeKeyDown = false,
    rows = 3,
    spellCheck = false,
    validateOnBlur,
    variant,
    value,
    ...rest
  },
  ref
): JSX.Element {
  const textAreaElementRef: RefObject<HTMLTextAreaElement> = useRef(null)
  const revertOnEscapeKeyDownRef: RefObject<boolean> = useRef(false) // Boolean flag to exit early from `handleBlur`

  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

  const setTextAreaElementValue = useCallback(function (value: string): void {
    const textAreaElement = getCurrentFromRef(textAreaElementRef)
    textAreaElement.value = value
    const inputEvent = new window.Event('input', {
      bubbles: true,
      cancelable: true
    })
    textAreaElement.dispatchEvent(inputEvent)
  }, [])

  const handleBlur = useCallback(
    function (): void {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false
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
    function (event: Event.onFocus<HTMLTextAreaElement>): void {
      setOriginalValue(value)
      event.currentTarget.select()
    },
    [value]
  )

  const handleInput = useCallback(
    function (event: Event.onInput<HTMLTextAreaElement>): void {
      onValueInput(event.currentTarget.value)
      onInput(event)
    },
    [onInput, onValueInput]
  )

  const handleKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLTextAreaElement>): void {
      onKeyDown(event)
      if (event.key === 'Escape') {
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true
          setTextAreaElementValue(originalValue)
          setOriginalValue(EMPTY_STRING)
        }
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (blurOnEscapeKeyDown === true) {
          event.currentTarget.blur()
        }
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
      blurOnEscapeKeyDown,
      onKeyDown,
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setTextAreaElementValue,
      value
    ]
  )

  const handleMouseUp = useCallback(
    function (event: Event.onMouseUp<HTMLTextAreaElement>): void {
      if (value === MIXED_STRING) {
        // Prevent changing the selection if `value` is `MIXED_STRING`
        event.preventDefault()
      }
    },
    [value]
  )

  const refCallback = useCallback(
    function (textAreaElement: null | HTMLTextAreaElement) {
      textAreaElementRef.current = textAreaElement
      if (ref === null) {
        return
      }
      if (typeof ref === 'function') {
        ref(textAreaElement)
        return
      }
      ref.current = textAreaElement
    },
    [ref, textAreaElementRef]
  )

  return (
    <div
      class={createClassName([
        styles.textboxMultiline,
        typeof variant === 'undefined'
          ? null
          : variant === 'border'
          ? styles.hasBorder
          : null,
        grow === true ? styles.grow : null,
        disabled === true ? styles.disabled : null
      ])}
    >
      {grow === true ? (
        <div class={styles.ghost}>
          {value === MIXED_STRING ? 'Mixed' : `${value} `}
        </div>
      ) : null}
      <textarea
        {...rest}
        ref={refCallback}
        class={styles.textarea}
        disabled={disabled === true}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onMouseUp={handleMouseUp}
        placeholder={placeholder}
        rows={rows}
        spellcheck={spellCheck}
        tabIndex={0}
        value={value === MIXED_STRING ? 'Mixed' : value}
      />
      <div class={styles.border} />
      {variant === 'underline' ? <div class={styles.underline} /> : null}
    </div>
  )
})
