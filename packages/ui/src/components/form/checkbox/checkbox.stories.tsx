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
  return (
    <Checkbox
      onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
        console.log(event)
        setValue(!value)
      }}
      value={value}
    >
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Focused = function () {
  const [value, setValue] = useState(false)
  return (
    <Checkbox
      {...useInitialFocus()}
      onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
        console.log(event)
        setValue(!value)
      }}
      value={value}
    >
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Selected = function () {
  const [value, setValue] = useState(true)
  return (
    <Checkbox
      onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
        console.log(event)
        setValue(!value)
      }}
      value={value}
    >
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Disabled = function () {
  const [value, setValue] = useState(false)
  return (
    <Checkbox
      disabled
      onChange={function (event: JSX.TargetedEvent<HTMLInputElement>) {
        console.log(event)
        setValue(!value)
      }}
      value={value}
    >
      <Text>Text</Text>
    </Checkbox>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState(false)
  return (
    <Checkbox disabled onValueChange={setValue} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}
