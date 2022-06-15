/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { RangeSlider } from '../range-slider'

export default {
  title: 'Components/Range Slider'
}

export const Passive = function () {
  const [value, setValue] = useState<number>(0)
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(parseFloat(newValue))
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
  const [value, setValue] = useState<number>(0)
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(parseFloat(newValue))
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
      value={0}
    />
  )
}

export const CustomIncrement = function () {
  const [value, setValue] = useState<number>(0)
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(parseFloat(newValue))
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
