/* eslint-disable no-console */
import { Fragment, h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { VerticalSpace } from '../../../layout/vertical-space/vertical-space.js'
import { TextboxNumeric } from '../../textbox/textbox-numeric/textbox-numeric.js'
import { RangeSlider } from '../range-slider.js'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Range Slider'
}

export const Passive = function () {
  const [value, setValue] = useState<string>('50')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RangeSlider
      maximum={100}
      minimum={0}
      onInput={handleInput}
      value={value}
    />
  )
}

export const Focused = function () {
  const [value, setValue] = useState<string>('50')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RangeSlider
      {...useInitialFocus()}
      maximum={100}
      minimum={0}
      onInput={handleInput}
      value={value}
    />
  )
}

export const Disabled = function () {
  function handleInput() {
    throw new Error('This function should not be called')
  }
  return (
    <RangeSlider
      disabled
      maximum={100}
      minimum={0}
      onInput={handleInput}
      value="50"
    />
  )
}

export const NegativeMinimum = function () {
  const [value, setValue] = useState<string>('0')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RangeSlider
      increment={10}
      maximum={100}
      minimum={-100}
      onInput={handleInput}
      value={value}
    />
  )
}

export const CustomIncrement = function () {
  const [value, setValue] = useState<string>('50')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RangeSlider
      increment={10}
      maximum={100}
      minimum={0}
      onInput={handleInput}
      value={value}
    />
  )
}

export const OnValueInput = function () {
  const [value, setValue] = useState<string>('50')
  function handleValueInput(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  function handleNumericValueInput(newNumericValue: number) {
    console.log(newNumericValue)
  }
  return (
    <RangeSlider
      maximum={100}
      minimum={0}
      onNumericValueInput={handleNumericValueInput}
      onValueInput={handleValueInput}
      value={value}
    />
  )
}

export const WithTextboxNumeric = function () {
  const [value, setValue] = useState<string>('50')
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const minimum = 0
  const maximum = 100
  return (
    <Fragment>
      <RangeSlider
        maximum={maximum}
        minimum={minimum}
        onInput={handleInput}
        value={value}
      />
      <VerticalSpace space="small" />
      <TextboxNumeric
        maximum={maximum}
        minimum={minimum}
        onInput={handleInput}
        value={value}
      />
    </Fragment>
  )
}
