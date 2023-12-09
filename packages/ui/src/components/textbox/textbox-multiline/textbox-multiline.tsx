import { MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, RefObject } from 'preact'
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
  disabled?: boolean
  grow?: boolean
  onBlur?: EventHandler.onBlur<HTMLTextAreaElement>
  onFocus?: EventHandler.onFocus<HTMLTextAreaElement>
  onInput?: EventHandler.onInput<HTMLTextAreaElement>
  onMouseDown?: EventHandler.onMouseDown<HTMLTextAreaElement>
  onValueInput?: EventHandler.onValueChange<string>
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
    grow = false,
    disabled = false,
    onBlur = noop,
    onFocus = noop,
    onInput = noop,
    onKeyDown = noop,
    onValueInput = noop,
    onMouseDown = noop,
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
) {
  const textAreaElementRef: RefObject<HTMLTextAreaElement> = useRef(null)

  const [originalValue, setOriginalValue] = useState(EMPTY_STRING) // Value of the textbox when it was initially focused

  const setTextAreaElementValue = useCallback(function (value: string) {
    const textAreaElement = getCurrentFromRef(textAreaElementRef)
    textAreaElement.value = value
    const inputEvent = new window.Event('input', {
      bubbles: true,
      cancelable: true
    })
    textAreaElement.dispatchEvent(inputEvent)
  }, [])

  const handleBlur = useCallback(
    function (event: Event.onBlur<HTMLTextAreaElement>) {
      onBlur(event)
      if (typeof validateOnBlur !== 'undefined') {
        const result = validateOnBlur(value)
        if (typeof result === 'string') {
          // Set to the value returned by `validateOnBlur`
          setTextAreaElementValue(result)
          setOriginalValue(EMPTY_STRING)
          return
        }
        if (result === false) {
          // Revert to the original value
          if (value !== originalValue) {
            setTextAreaElementValue(originalValue)
          }
          setOriginalValue(EMPTY_STRING)
          return
        }
      }
      setOriginalValue(EMPTY_STRING)
    },
    [onBlur, originalValue, setTextAreaElementValue, validateOnBlur, value]
  )

  const handleFocus = useCallback(
    function (event: Event.onFocus<HTMLTextAreaElement>) {
      onFocus(event)
      setOriginalValue(value)
      event.currentTarget.select()
    },
    [onFocus, value]
  )

  const handleInput = useCallback(
    function (event: Event.onInput<HTMLTextAreaElement>) {
      onInput(event)
      const newValue = event.currentTarget.value
      onValueInput(newValue)
    },
    [onInput, onValueInput]
  )

  const handleKeyDown = useCallback(
    function (event: Event.onKeyDown<HTMLTextAreaElement>) {
      onKeyDown(event)
      if (event.key === 'Escape') {
        if (revertOnEscapeKeyDown === true) {
          setTextAreaElementValue(originalValue)
          setOriginalValue(EMPTY_STRING)
        }
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
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
      onKeyDown,
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setTextAreaElementValue,
      value
    ]
  )

  const handleMouseDown = useCallback(
    function (event: Event.onMouseUp<HTMLTextAreaElement>) {
      onMouseDown(event)
      if (value === MIXED_STRING) {
        // Prevent changing the selection if `value` is `MIXED_STRING`
        event.preventDefault()
        event.currentTarget.select()
      }
    },
    [onMouseDown, value]
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
    [ref]
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
        onMouseDown={handleMouseDown}
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
