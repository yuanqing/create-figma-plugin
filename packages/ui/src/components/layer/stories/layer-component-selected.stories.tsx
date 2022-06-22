/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { IconLayerComponent16 } from '../../../icons/icon-16/icon-layer-component-16'
import { Layer } from '../layer'

export default {
  parameters: {
    fixedWidth: true,
    order: 4
  },
  title: 'Components/Layer/Component Selected'
}

export const Passive = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      component
      icon={<IconLayerComponent16 />}
      onChange={handleChange}
      value={value}
    >
      Text
    </Layer>
  )
}

export const Focused = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      {...useInitialFocus()}
      component
      icon={<IconLayerComponent16 />}
      onChange={handleChange}
      value={value}
    >
      Text
    </Layer>
  )
}

export const Bold = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      bold
      component
      icon={<IconLayerComponent16 />}
      onChange={handleChange}
      value={value}
    >
      Text
    </Layer>
  )
}

export const Description = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      component
      description="Description"
      icon={<IconLayerComponent16 />}
      onChange={handleChange}
      value={value}
    >
      Text
    </Layer>
  )
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      component
      icon={<IconLayerComponent16 />}
      onChange={handleChange}
      value={value}
    >
      {longText}
    </Layer>
  )
}

export const LongTextDescription = function () {
  const longText = Array(100).fill('Text').join(' ')
  const description = Array(100).fill('Text').join(' ')
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      component
      description={description}
      icon={<IconLayerComponent16 />}
      onChange={handleChange}
      value={value}
    >
      {longText}
    </Layer>
  )
}

export const OnValueChange = function () {
  const longText = Array(100).fill('Text').join(' ')
  const [value, setValue] = useState<boolean>(true)
  function handleValueChange(newValue: boolean) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      component
      icon={<IconLayerComponent16 />}
      onValueChange={handleValueChange}
      value={value}
    >
      {longText}
    </Layer>
  )
}
