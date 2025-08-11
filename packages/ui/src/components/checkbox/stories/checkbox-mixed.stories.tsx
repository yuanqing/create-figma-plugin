/* eslint-disable no-console */
import { MIXED_BOOLEAN } from '@create-figma-plugin/utilities'
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { Text } from '../../text/text.js'
import { Checkbox } from '../checkbox.js'

export default {
  tags: ['3'],
  title: 'Components/Checkbox/Mixed'
}

export const Passive = function () {
  const [value, setValue] = useState<boolean | typeof MIXED_BOOLEAN>(
    MIXED_BOOLEAN
  )
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

export const Focused = function () {
  const [value, setValue] = useState<boolean | typeof MIXED_BOOLEAN>(
    MIXED_BOOLEAN
  )
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

export const Disabled = function () {
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <Checkbox disabled onChange={handleChange} value={MIXED_BOOLEAN}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<boolean | typeof MIXED_BOOLEAN>(
    MIXED_BOOLEAN
  )
  function handleValueChange(newValue: boolean) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Checkbox onValueChange={handleValueChange} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}
