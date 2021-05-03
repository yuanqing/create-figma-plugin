/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

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
    <Layer onChange={handleChange} type="frame" value={value}>
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
    <Layer onChange={handleChange} type="frame" value={value}>
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
      onChange={handleChange}
      pageName="Page Name"
      type="frame"
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
      onChange={handleChange}
      pageName="Page Name"
      type="frame"
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
    <Layer onChange={handleChange} type="component" value={value}>
      Text
    </Layer>
  )
}
