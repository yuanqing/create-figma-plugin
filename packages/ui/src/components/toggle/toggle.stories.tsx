/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../hooks/use-initial-focus/use-initial-focus'
import { Toggle } from './toggle'

export default { title: 'Components/Toggle' }

export const Unselected = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return <Toggle onChange={handleChange} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return <Toggle {...useInitialFocus()} onChange={handleChange} value={value} />
}

export const Selected = function () {
  const [value, setValue] = useState(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return <Toggle onChange={handleChange} value={value} />
}

export const Disabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return <Toggle disabled onChange={handleChange} value={false} />
}

export const OnValueChange = function () {
  const [value, setValue] = useState(true)
  return <Toggle onValueChange={setValue} value={value} />
}
