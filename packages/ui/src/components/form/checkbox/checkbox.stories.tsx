/* eslint-disable no-console */
/** @jsx h */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus'
import { Text } from '../../main/text/text'
import { Checkbox } from './checkbox'

export default { title: 'Components/Form/Checkbox' }

export const Unselected = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(!(newValue === 'true'))
  }
  return (
    <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Focused = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(!(newValue === 'true'))
  }
  return (
    <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Selected = function () {
  const [value, setValue] = useState(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(!(newValue === 'true'))
  }
  return (
    <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Disabled = function () {
  const [value, setValue] = useState(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(!(newValue === 'true'))
  }
  return (
    <Checkbox disabled onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState(true)
  return (
    <Checkbox onValueChange={setValue} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}
