/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconFrame16 } from '../../../icons/icon-16/icon-frame-16.js'
import { Layer } from '../layer.js'

export default {
  parameters: {
    fixedWidth: true
  },
  tags: ['1'],
  title: 'Components/Layer/Frame Unselected'
}

export const Passive = function () {
  const [value, setValue] = useState<boolean>(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer icon={<IconFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>
  )
}

export const Focused = function () {
  const [value, setValue] = useState<boolean>(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      {...useInitialFocus()}
      icon={<IconFrame16 />}
      onChange={handleChange}
      value={value}
    >
      Text
    </Layer>
  )
}

export const Bold = function () {
  const [value, setValue] = useState<boolean>(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer bold icon={<IconFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>
  )
}

export const Description = function () {
  const [value, setValue] = useState<boolean>(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      description="Description"
      icon={<IconFrame16 />}
      onChange={handleChange}
      value={value}
    >
      Text
    </Layer>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<boolean>(false)
  function handleValueChange(newValue: boolean) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      icon={<IconFrame16 />}
      onValueChange={handleValueChange}
      value={value}
    >
      Text
    </Layer>
  )
}
