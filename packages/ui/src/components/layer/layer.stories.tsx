/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { IconLayerComponent16 } from '../icon/icon-16/icon-layer-component-16'
import { IconLayerFrame16 } from '../icon/icon-16/icon-layer-frame-16'
import { Layer } from './layer'

export default { title: 'Components/Layer' }

export const Frame = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>
  )
}

export const Selected = function () {
  const [value, setValue] = useState(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer icon={<IconLayerFrame16 />} onChange={handleChange} value={value}>
      Text
    </Layer>
  )
}

export const PageName = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      icon={<IconLayerFrame16 />}
      onChange={handleChange}
      pageName="Page Name"
      value={value}
    >
      Text
    </Layer>
  )
}

export const LongText = function () {
  const longText = Array(100).fill('Text').join(' ')
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      icon={<IconLayerFrame16 />}
      onChange={handleChange}
      pageName="Page Name"
      value={value}
    >
      {longText}
    </Layer>
  )
}

export const Component = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Layer
      bold
      color="purple"
      icon={<IconLayerComponent16 />}
      onChange={handleChange}
      value={value}
    >
      Text
    </Layer>
  )
}
