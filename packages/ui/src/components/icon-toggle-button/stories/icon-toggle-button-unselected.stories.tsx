/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconEllipsis24 } from '../../../icons/icon-24/icon-ellipsis-24.js'
import { IconToggleButton } from '../icon-toggle-button.js'

export default {
  tags: ['1'],
  title: 'Components/Icon Toggle Button/Unselected'
}

export const Passive = function () {
  const [value, setValue] = useState<boolean>(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <IconToggleButton onChange={handleChange} value={value}>
      <IconEllipsis24 />
    </IconToggleButton>
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
    <IconToggleButton
      {...useInitialFocus()}
      onChange={handleChange}
      value={value}
    >
      <IconEllipsis24 />
    </IconToggleButton>
  )
}

export const Disabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <IconToggleButton disabled onChange={handleChange} value={false}>
      <IconEllipsis24 />
    </IconToggleButton>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<boolean>(false)
  function handleValueChange(newValue: boolean) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <IconToggleButton onValueChange={handleValueChange} value={value}>
      <IconEllipsis24 />
    </IconToggleButton>
  )
}
