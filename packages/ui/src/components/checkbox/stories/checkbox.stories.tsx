/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { Text } from '../../text/text'
import { Checkbox } from '../checkbox'

export default {
  parameters: { fixedWidth: true },
  title: 'Components/Checkbox'
}

export const Unselected = function () {
  const [value, setValue] = useState<boolean>(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const UnselectedFocused = function () {
  const [value, setValue] = useState<boolean>(false)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const UnselectedDisabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <Checkbox disabled onChange={handleChange} value={false}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Selected = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Checkbox onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const SelectedFocused = function () {
  const [value, setValue] = useState<boolean>(true)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Checkbox {...useInitialFocus()} onChange={handleChange} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const SelectedDisabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <Checkbox disabled onChange={handleChange} value={true}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<boolean>(false)
  return (
    <Checkbox onValueChange={setValue} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}
