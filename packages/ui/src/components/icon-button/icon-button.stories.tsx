/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../hooks/use-initial-focus/use-initial-focus'
import { IconEllipsis32 } from '../icon/icon-32/icon-ellipsis-32'
import { IconButton } from './icon-button'

export default { title: 'Components/Icon Button' }

export const Unselected = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <IconButton onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconButton>
  )
}

export const Focused = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <IconButton {...useInitialFocus()} onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconButton>
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
    <IconButton onChange={handleChange} value={value}>
      <IconEllipsis32 />
    </IconButton>
  )
}

export const Disabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <IconButton disabled onChange={handleChange} value={false}>
      <IconEllipsis32 />
    </IconButton>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState(true)
  return (
    <IconButton onValueChange={setValue} value={value}>
      <IconEllipsis32 />
    </IconButton>
  )
}
