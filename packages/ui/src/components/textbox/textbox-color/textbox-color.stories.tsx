/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { MIXED_STRING } from '../../../utilities/mixed-values'
import { TextboxColor } from './textbox-color'

export default { title: 'Components/Textbox Color' }

export const Empty = function () {
  const [hexColor, setHexColor] = useState('')
  const [opacity, setOpacity] = useState('')
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value
    console.log(newHexColor)
    setHexColor(newHexColor)
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value
    console.log(newOpacity)
    setOpacity(newOpacity)
  }
  return (
    <TextboxColor
      hexColor={hexColor}
      onHexColorInput={handleHexColorInput}
      onOpacityInput={handleOpacityInput}
      opacity={opacity}
    />
  )
}

export const Focused = function () {
  const [hexColor, setHexColor] = useState('')
  const [opacity, setOpacity] = useState('')
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value
    console.log(newHexColor)
    setHexColor(newHexColor)
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value
    console.log(newOpacity)
    setOpacity(newOpacity)
  }
  return (
    <TextboxColor
      {...useInitialFocus()}
      hexColor={hexColor}
      onHexColorInput={handleHexColorInput}
      onOpacityInput={handleOpacityInput}
      opacity={opacity}
    />
  )
}

export const Placeholder = function () {
  const [hexColor, setHexColor] = useState('')
  const [opacity, setOpacity] = useState('')
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value
    console.log(newHexColor)
    setHexColor(newHexColor)
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value
    console.log(newOpacity)
    setOpacity(newOpacity)
  }
  return (
    <TextboxColor
      hexColor={hexColor}
      hexColorPlaceholder="Color"
      onHexColorInput={handleHexColorInput}
      onOpacityInput={handleOpacityInput}
      opacity={opacity}
      opacityPlaceholder="%"
    />
  )
}

export const Filled = function () {
  const [hexColor, setHexColor] = useState('000000')
  const [opacity, setOpacity] = useState('100%')
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value
    console.log(newHexColor)
    setHexColor(newHexColor)
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value
    console.log(newOpacity)
    setOpacity(newOpacity)
  }
  return (
    <TextboxColor
      hexColor={hexColor}
      onHexColorInput={handleHexColorInput}
      onOpacityInput={handleOpacityInput}
      opacity={opacity}
    />
  )
}

export const Disabled = function () {
  const [hexColor, setHexColor] = useState('000000')
  const [opacity, setOpacity] = useState('100%')
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value
    console.log(newHexColor)
    setHexColor(newHexColor)
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value
    console.log(newOpacity)
    setOpacity(newOpacity)
  }
  return (
    <TextboxColor
      disabled
      hexColor={hexColor}
      onHexColorInput={handleHexColorInput}
      onOpacityInput={handleOpacityInput}
      opacity={opacity}
    />
  )
}

export const NoBorder = function () {
  const [hexColor, setHexColor] = useState('000000')
  const [opacity, setOpacity] = useState('100%')
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value
    console.log(newHexColor)
    setHexColor(newHexColor)
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value
    console.log(newOpacity)
    setOpacity(newOpacity)
  }
  return (
    <TextboxColor
      hexColor={hexColor}
      noBorder
      onHexColorInput={handleHexColorInput}
      onOpacityInput={handleOpacityInput}
      opacity={opacity}
    />
  )
}

export const RevertOnEscapeKeyDown = function () {
  const [hexColor, setHexColor] = useState('000000')
  const [opacity, setOpacity] = useState('100%')
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value
    console.log(newHexColor)
    setHexColor(newHexColor)
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value
    console.log(newOpacity)
    setOpacity(newOpacity)
  }
  return (
    <TextboxColor
      hexColor={hexColor}
      onHexColorInput={handleHexColorInput}
      onOpacityInput={handleOpacityInput}
      opacity={opacity}
      revertOnEscapeKeyDown
    />
  )
}

export const Mixed = function () {
  const [hexColor, setHexColor] = useState(MIXED_STRING)
  const [opacity, setOpacity] = useState(MIXED_STRING)
  function handleHexColorInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newHexColor = event.currentTarget.value
    console.log(newHexColor)
    setHexColor(newHexColor)
  }
  function handleOpacityInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOpacity = event.currentTarget.value
    console.log(newOpacity)
    setOpacity(newOpacity)
  }
  return (
    <TextboxColor
      hexColor={hexColor}
      onHexColorInput={handleHexColorInput}
      onOpacityInput={handleOpacityInput}
      opacity={opacity}
    />
  )
}

export const OnRgbaValueInput = function () {
  const [hexColor, setHexColor] = useState('000000')
  const [opacity, setOpacity] = useState('100%')
  function handleRgbaColorValueInput(rgbaColor: null | RGBA) {
    console.log(rgbaColor)
  }
  return (
    <TextboxColor
      hexColor={hexColor}
      onHexColorValueInput={setHexColor}
      onOpacityValueInput={setOpacity}
      onRgbaColorValueInput={handleRgbaColorValueInput}
      opacity={opacity}
    />
  )
}
