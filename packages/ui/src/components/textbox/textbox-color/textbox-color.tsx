/** @jsx h */
import { h, JSX, RefObject } from 'preact'
import { useCallback, useRef, useState } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types/types'
import { createClassName } from '../../../utilities/create-class-name'
import { getCurrentFromRef } from '../../../utilities/get-current-from-ref'
import { MIXED_STRING } from '../../../utilities/mixed-values'
import { RawTextboxNumeric } from '../textbox-numeric/private/raw-textbox-numeric'
import { createRgbaColor } from './private/create-rgba-color'
import { normalizeUserInputColor } from './private/normalize-hex-color'
import { updateHexColor } from './private/update-hex-color'
import styles from './textbox-color.css'

const EMPTY_STRING = ''

export type TextboxColorProps<
  Name extends string,
  HexColorName extends string,
  OpacityName extends string
> = {
  disabled?: boolean
  name?: Name
  noBorder?: boolean
  propagateEscapeKeyDown?: boolean
  revertOnEscapeKeyDown?: boolean
  hexColor: string
  hexColorName?: HexColorName
  hexColorPlaceholder?: string
  onHexColorInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onHexColorValueInput?: OnValueChange<string, HexColorName>
  opacity: string
  opacityName?: OpacityName
  opacityPlaceholder?: string
  onOpacityInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onOpacityNumericValueInput?: OnValueChange<null | number, OpacityName>
  onOpacityValueInput?: OnValueChange<string, OpacityName>
  onRgbaColorValueInput?: OnValueChange<null | RGBA, Name>
}

export function TextboxColor<
  Name extends string,
  HexColorName extends string,
  OpacityName extends string
>({
  disabled = false,
  name,
  noBorder = false,
  propagateEscapeKeyDown = true,
  revertOnEscapeKeyDown = false,
  hexColor,
  hexColorName,
  hexColorPlaceholder,
  onHexColorInput = function () {},
  onHexColorValueInput = function () {},
  opacity,
  opacityName,
  opacityPlaceholder,
  onOpacityInput = function () {},
  onOpacityNumericValueInput = function () {},
  onOpacityValueInput = function () {},
  onRgbaColorValueInput: onRgbaValueInput = function () {},
  ...rest
}: Props<
  HTMLDivElement,
  TextboxColorProps<Name, HexColorName, OpacityName>
>): JSX.Element {
  const hexColorInputElementRef: RefObject<HTMLInputElement> = useRef(null)
  const isRevertOnEscapeKeyDownRef: RefObject<boolean> = useRef(false) // Boolean flag to exit early from `handleBlur`

  const [originalHexColor, setOriginalHexColor] = useState(EMPTY_STRING) // Value of the hex color textbox when it was initially focused

  const handleRootFocus = useCallback(function (): void {
    const hexColorInputElement = getCurrentFromRef(hexColorInputElementRef)
    hexColorInputElement.focus()
  }, [])

  const handleHexColorSelectorFocus = useCallback(function (
    event: JSX.TargetedEvent<HTMLInputElement>
  ): void {
    const hexColor = event.currentTarget.value.slice(1).toUpperCase()
    setOriginalHexColor(hexColor)
  },
  [])

  const handleHexColorSelectorInput = useCallback(function (
    event: JSX.TargetedEvent<HTMLInputElement>
  ): void {
    const hexColor = event.currentTarget.value.slice(1).toUpperCase()
    const hexColorInputElement = getCurrentFromRef(hexColorInputElementRef)
    hexColorInputElement.value = hexColor
    const inputEvent = document.createEvent('Event')
    inputEvent.initEvent('input', true, true)
    hexColorInputElement.dispatchEvent(inputEvent)
  },
  [])

  const handleHexColorSelectorKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
      if (event.key !== 'Escape') {
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      if (revertOnEscapeKeyDown === true) {
        const hexColorInputElement = getCurrentFromRef(hexColorInputElementRef)
        hexColorInputElement.value = originalHexColor
        const inputEvent = document.createEvent('Event')
        inputEvent.initEvent('input', true, true)
        hexColorInputElement.dispatchEvent(inputEvent)
        setOriginalHexColor(EMPTY_STRING)
      }
      event.currentTarget.blur()
    },
    [originalHexColor, propagateEscapeKeyDown, revertOnEscapeKeyDown]
  )

  const handleHexColorBlur = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLInputElement>): void {
      if (isRevertOnEscapeKeyDownRef.current === true) {
        isRevertOnEscapeKeyDownRef.current = false
        return
      }
      if (hexColor !== EMPTY_STRING && hexColor !== MIXED_STRING) {
        const normalizedHexColor = normalizeUserInputColor(hexColor)
        const newHexColor =
          normalizedHexColor === null ? originalHexColor : normalizedHexColor
        if (newHexColor !== hexColor) {
          event.currentTarget.value = newHexColor
          const inputEvent = document.createEvent('Event')
          inputEvent.initEvent('input', true, true)
          event.currentTarget.dispatchEvent(inputEvent)
        }
      }
      setOriginalHexColor(EMPTY_STRING)
    },
    [hexColor, originalHexColor]
  )

  const handleHexColorFocus = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLInputElement>): void {
      setOriginalHexColor(hexColor)
      event.currentTarget.select()
    },
    [hexColor]
  )

  const handleHexColorInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      onHexColorInput(event)
      const newHexColor = event.currentTarget.value
      onHexColorValueInput(newHexColor, hexColorName)
      if (newHexColor === EMPTY_STRING) {
        onRgbaValueInput(null, name)
        return
      }
      const normalizedHexColor = normalizeUserInputColor(newHexColor)
      if (normalizedHexColor === null) {
        onRgbaValueInput(null, name)
        return
      }
      const rgba = createRgbaColor(normalizedHexColor, opacity)
      onRgbaValueInput(rgba, name)
    },
    [
      hexColorName,
      onHexColorInput,
      onHexColorValueInput,
      onRgbaValueInput,
      name,
      opacity
    ]
  )

  const handleHexColorKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
      const key = event.key
      if (key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        if (revertOnEscapeKeyDown === true) {
          isRevertOnEscapeKeyDownRef.current = true
          event.currentTarget.value = originalHexColor
          const inputEvent = document.createEvent('Event')
          inputEvent.initEvent('input', true, true)
          event.currentTarget.dispatchEvent(inputEvent)
          setOriginalHexColor(EMPTY_STRING)
        }
        event.currentTarget.blur()
        return
      }
      if (key === 'Enter') {
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
        element.value = newHexColor
        element.select()
        const inputEvent = document.createEvent('Event')
        inputEvent.initEvent('input', true, true)
        event.currentTarget.dispatchEvent(inputEvent)
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
    },
    [hexColor, originalHexColor, propagateEscapeKeyDown, revertOnEscapeKeyDown]
  )

  const handleHexColorMouseUp = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLInputElement>): void {
      if (hexColor !== MIXED_STRING) {
        return
      }
      event.preventDefault()
    },
    [hexColor]
  )

  const handleOpacityInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      onOpacityInput(event)
      const newOpacity = event.currentTarget.value
      const rgba = createRgbaColor(hexColor, newOpacity)
      onRgbaValueInput(rgba, name)
    },
    [hexColor, onOpacityInput, onRgbaValueInput, name]
  )

  const parsedOpacity = parseOpacity(opacity)

  const normalizedHexColor =
    hexColor === EMPTY_STRING || hexColor === MIXED_STRING
      ? 'FFFFFF'
      : normalizeUserInputColor(hexColor)
  const renderedHexColor =
    normalizedHexColor === null ? originalHexColor : normalizedHexColor

  // Uncomment to debug
  // console.table([{ hexColor, renderedHexColor, opacity, parsedOpacity }])

  return (
    <div
      {...rest}
      class={createClassName([
        styles.textboxColor,
        noBorder === true ? styles.noBorder : null,
        disabled === true ? styles.disabled : null
      ])}
      onFocus={handleRootFocus}
      tabIndex={0}
    >
      <div class={styles.color}>
        <div
          class={styles.colorFill}
          style={{ backgroundColor: `#${renderedHexColor}` }}
        ></div>
        {parsedOpacity === 1 ? null : (
          <div
            class={styles.colorFill}
            style={{
              backgroundColor: `#${renderedHexColor}`,
              opacity: parsedOpacity
            }}
          ></div>
        )}
        <div class={styles.colorBorder} />
      </div>
      <input
        class={styles.hexColorSelector}
        disabled={disabled === true}
        onFocus={handleHexColorSelectorFocus}
        onInput={handleHexColorSelectorInput}
        onKeyDown={handleHexColorSelectorKeyDown}
        type="color"
        value={`#${renderedHexColor}`}
      />
      <input
        ref={hexColorInputElementRef}
        class={createClassName([styles.input, styles.hexColorInput])}
        disabled={disabled === true}
        name={hexColorName}
        onBlur={handleHexColorBlur}
        onFocus={handleHexColorFocus}
        onInput={handleHexColorInput}
        onKeyDown={handleHexColorKeyDown}
        onMouseUp={handleHexColorMouseUp}
        placeholder={hexColorPlaceholder}
        spellcheck={false}
        tabIndex={disabled === true ? -1 : 0}
        type="text"
        value={hexColor === MIXED_STRING ? 'Mixed' : hexColor}
      />
      <RawTextboxNumeric
        class={createClassName([styles.input, styles.opacityInput])}
        disabled={disabled === true}
        maximum={100}
        minimum={0}
        name={opacityName}
        onInput={handleOpacityInput}
        onNumericValueInput={onOpacityNumericValueInput}
        onValueInput={onOpacityValueInput}
        placeholder={opacityPlaceholder}
        propagateEscapeKeyDown={propagateEscapeKeyDown}
        revertOnEscapeKeyDown={revertOnEscapeKeyDown}
        suffix="%"
        value={opacity}
      />
      <div class={styles.divider} />
      <div class={styles.border} />
    </div>
  )
}

function parseOpacity(opacity: string): number {
  if (opacity === MIXED_STRING || opacity === EMPTY_STRING) {
    return 1
  }
  return parseInt(opacity, 10) / 100
}
