import { MIXED_NUMBER, MIXED_STRING } from '@create-figma-plugin/utilities'
import { h, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import { Event, EventHandler } from '../../../types/event-handler.js'
import { RGBA } from '../../../types/rgba.js'
import { createClassName } from '../../../utilities/create-class-name.js'
import { createComponent } from '../../../utilities/create-component.js'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref.js'
import { noop } from '../../../utilities/no-op.js'
import { RawTextboxNumeric } from '../textbox-numeric/private/raw-textbox-numeric.js'
import { createRgbaColor } from './private/create-rgba-color.js'
import { normalizeUserInputColor } from './private/normalize-hex-color.js'
import { updateHexColor } from './private/update-hex-color.js'
import styles from './textbox-color.module.css'

const EMPTY_STRING = ''

export type TextboxColorProps = {
  propagateEscapeKeyDown?: boolean
  disabled?: boolean
  hexColor: string
  hexColorPlaceholder?: string
  fullWidth?: boolean
  onHexColorInput?: EventHandler.onInput<HTMLInputElement>
  onHexColorKeyDown?: EventHandler.onKeyDown<HTMLInputElement>
  onHexColorValueInput?: EventHandler.onValueChange<string>
  onOpacityInput?: EventHandler.onInput<HTMLInputElement>
  onOpacityKeyDown?: EventHandler.onKeyDown<HTMLInputElement>
  onOpacityNumericValueInput?: EventHandler.onValueChange<null | number>
  onOpacityValueInput?: EventHandler.onValueChange<string>
  onRgbaColorValueInput?: EventHandler.onValueChange<null | RGBA>
  opacity: string
  revertOnEscapeKeyDown?: boolean
  variant?: TextboxColorVariant
}
export type TextboxColorVariant = 'border' | 'underline'

export const TextboxColor = createComponent<HTMLDivElement, TextboxColorProps>(
  function (
    {
      disabled = false,
      fullWidth = false,
      hexColor,
      hexColorPlaceholder,
      onHexColorInput = noop,
      onHexColorKeyDown = noop,
      onHexColorValueInput = noop,
      onOpacityInput = noop,
      onOpacityKeyDown = noop,
      onOpacityNumericValueInput = noop,
      onOpacityValueInput = noop,
      onRgbaColorValueInput = noop,
      opacity,
      propagateEscapeKeyDown = true,
      revertOnEscapeKeyDown = false,
      variant,
      ...rest
    },
    ref
  ) {
    const hexColorInputElementRef: RefObject<HTMLInputElement> = useRef(null)
    const opacityInputElementRef: RefObject<HTMLInputElement> = useRef(null)
    const revertOnEscapeKeyDownRef: RefObject<boolean> = useRef(false) // Set to `true` when the `Escape` key is pressed; used to bail out of `handleHexColorBlur`

    const [originalHexColor, setOriginalHexColor] = useState(EMPTY_STRING) // Value of the hex color textbox when it was initially focused

    const setHexColorInputElementValue = useCallback(function (value: string) {
      const inputElement = getCurrentFromRef(hexColorInputElementRef)
      inputElement.value = value
      const inputEvent = new window.Event('input', {
        bubbles: true,
        cancelable: true
      })
      inputElement.dispatchEvent(inputEvent)
    }, [])

    const handleHexColorSelectorFocus = useCallback(function (
      event: Event.onFocus<HTMLInputElement>
    ) {
      const hexColor = event.currentTarget.value.slice(1).toUpperCase()
      setOriginalHexColor(hexColor)
    }, [])

    const handleHexColorSelectorInput = useCallback(
      function (event: Event.onInput<HTMLInputElement>) {
        const hexColor = event.currentTarget.value.slice(1).toUpperCase()
        setHexColorInputElementValue(hexColor)
      },
      [setHexColorInputElementValue]
    )

    const handleHexColorSelectorKeyDown = useCallback(
      function (event: Event.onKeyDown<HTMLInputElement>) {
        if (event.key !== 'Escape') {
          return
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true
          setHexColorInputElementValue(originalHexColor)
          setOriginalHexColor(EMPTY_STRING)
        }
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
      },
      [
        originalHexColor,
        propagateEscapeKeyDown,
        revertOnEscapeKeyDown,
        setHexColorInputElementValue
      ]
    )

    const handleHexColorBlur = useCallback(
      function () {
        if (revertOnEscapeKeyDownRef.current === true) {
          revertOnEscapeKeyDownRef.current = false
          return
        }
        if (hexColor === EMPTY_STRING) {
          if (originalHexColor !== EMPTY_STRING) {
            setHexColorInputElementValue(originalHexColor)
          }
          setOriginalHexColor(EMPTY_STRING)
          return
        }
        if (hexColor !== MIXED_STRING) {
          const normalizedHexColor = normalizeUserInputColor(hexColor)
          const newHexColor =
            normalizedHexColor === null ? originalHexColor : normalizedHexColor
          if (newHexColor !== hexColor) {
            setHexColorInputElementValue(newHexColor)
          }
        }
        setOriginalHexColor(EMPTY_STRING)
      },
      [hexColor, originalHexColor, setHexColorInputElementValue]
    )

    const handleHexColorFocus = useCallback(
      function (event: Event.onFocus<HTMLInputElement>) {
        setOriginalHexColor(hexColor)
        event.currentTarget.select()
      },
      [hexColor]
    )

    const handleHexColorInput = useCallback(
      function (event: Event.onInput<HTMLInputElement>) {
        onHexColorInput(event)
        const newHexColor = event.currentTarget.value
        onHexColorValueInput(newHexColor)
        if (newHexColor === EMPTY_STRING) {
          onRgbaColorValueInput(null)
          return
        }
        const normalizedHexColor = normalizeUserInputColor(newHexColor)
        if (normalizedHexColor === null) {
          onRgbaColorValueInput(null)
          return
        }
        const rgba = createRgbaColor(normalizedHexColor, opacity)
        onRgbaColorValueInput(rgba)
      },
      [onHexColorInput, onHexColorValueInput, onRgbaColorValueInput, opacity]
    )

    const handleHexColorKeyDown = useCallback(
      function (event: Event.onKeyDown<HTMLInputElement>) {
        onHexColorKeyDown(event)
        const key = event.key
        if (key === 'Escape') {
          if (revertOnEscapeKeyDown === true) {
            revertOnEscapeKeyDownRef.current = true
            setHexColorInputElementValue(originalHexColor)
            setOriginalHexColor(EMPTY_STRING)
          }
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          event.currentTarget.blur()
          return
        }
        const element = event.currentTarget
        if (key === 'ArrowDown' || key === 'ArrowUp') {
          event.preventDefault()
          const delta = event.shiftKey === true ? 10 : 1
          const startingHexColor =
            hexColor === EMPTY_STRING || hexColor === MIXED_STRING
              ? key === 'ArrowDown'
                ? 'FFFFFF'
                : '000000'
              : hexColor
          const newHexColor = updateHexColor(
            startingHexColor,
            key === 'ArrowDown' ? -1 * delta : delta
          )
          setHexColorInputElementValue(newHexColor)
          element.select()
          return
        }
        if (event.ctrlKey === true || event.metaKey === true) {
          return
        }
      },
      [
        hexColor,
        onHexColorKeyDown,
        originalHexColor,
        propagateEscapeKeyDown,
        revertOnEscapeKeyDown,
        setHexColorInputElementValue
      ]
    )

    const handleHexColorMouseUp = useCallback(
      function (event: Event.onMouseUp<HTMLInputElement>) {
        if (hexColor !== MIXED_STRING) {
          return
        }
        event.preventDefault()
      },
      [hexColor]
    )

    const handleOpacityInput = useCallback(
      function (event: Event.onInput<HTMLInputElement>) {
        onOpacityInput(event)
        const newOpacity = event.currentTarget.value
        const rgba = createRgbaColor(hexColor, newOpacity)
        onRgbaColorValueInput(rgba)
      },
      [hexColor, onOpacityInput, onRgbaColorValueInput]
    )

    const handleOpacityNumericValueInput = useCallback(
      function (opacity: null | number) {
        onOpacityNumericValueInput(
          opacity === null || opacity === MIXED_NUMBER ? opacity : opacity / 100
        )
      },
      [onOpacityNumericValueInput]
    )

    const validateOpacityOnBlur = useCallback(function (
      opacity: null | number
    ) {
      return opacity !== null // Revert the original value if empty
    }, [])

    const parsedOpacity = parseOpacity(opacity)

    const isHexColorValid =
      hexColor !== EMPTY_STRING && hexColor !== MIXED_STRING
    const normalizedHexColor =
      isHexColorValid === true ? normalizeUserInputColor(hexColor) : 'FFFFFF'
    const renderedHexColor =
      normalizedHexColor === null ? originalHexColor : normalizedHexColor

    // Uncomment to debug
    // console.table([{ hexColor, renderedHexColor, opacity, parsedOpacity }])

    return (
      <div
        ref={ref}
        class={createClassName([
          styles.textboxColor,
          typeof variant === 'undefined'
            ? null
            : variant === 'border'
              ? styles.hasBorder
              : null,
          disabled === true ? styles.disabled : null,
          fullWidth === true ? styles.fullWidth : null
        ])}
      >
        <div class={styles.chit}>
          <div
            class={styles.color}
            style={
              isHexColorValid === true
                ? { backgroundColor: `#${renderedHexColor}` }
                : {}
            }
          ></div>
          {parsedOpacity === 1 ? null : (
            <div
              class={styles.color}
              style={
                isHexColorValid === true
                  ? {
                      backgroundColor: `#${renderedHexColor}`,
                      opacity: parsedOpacity
                    }
                  : {}
              }
            ></div>
          )}
        </div>
        <input
          class={styles.hexColorSelector}
          disabled={disabled === true}
          onFocus={handleHexColorSelectorFocus}
          onInput={handleHexColorSelectorInput}
          onKeyDown={handleHexColorSelectorKeyDown}
          tabIndex={-1}
          type="color"
          value={`#${renderedHexColor}`}
        />
        <input
          {...rest}
          ref={hexColorInputElementRef}
          class={createClassName([styles.input, styles.hexColorInput])}
          disabled={disabled === true}
          onBlur={handleHexColorBlur}
          onFocus={handleHexColorFocus}
          onInput={handleHexColorInput}
          onKeyDown={handleHexColorKeyDown}
          onMouseUp={handleHexColorMouseUp}
          placeholder={hexColorPlaceholder}
          spellcheck={false}
          tabIndex={0}
          type="text"
          value={hexColor === MIXED_STRING ? 'Mixed' : hexColor}
        />
        <div class={styles.opacityInputWrapper}>
          <RawTextboxNumeric
            ref={opacityInputElementRef}
            class={createClassName([styles.input, styles.opacityInput])}
            disabled={disabled === true}
            maximum={100}
            minimum={0}
            onInput={handleOpacityInput}
            onKeyDown={onOpacityKeyDown}
            onNumericValueInput={handleOpacityNumericValueInput}
            onValueInput={onOpacityValueInput}
            propagateEscapeKeyDown={propagateEscapeKeyDown}
            revertOnEscapeKeyDown={revertOnEscapeKeyDown}
            validateOnBlur={validateOpacityOnBlur}
            value={opacity}
          />
          {opacity === MIXED_STRING ? null : (
            <div class={styles.percentage}>%</div>
          )}
        </div>
        <div class={styles.border} />
      </div>
    )
  }
)

function parseOpacity(opacity: string): number {
  if (opacity === MIXED_STRING || opacity === EMPTY_STRING) {
    return 1
  }
  return parseInt(opacity, 10) / 100
}
