/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../hooks/use-initial-focus/use-initial-focus'
import { Text } from '../text/text'
import { RadioButtons, RadioButtonsOption } from './radio-buttons'

export default { title: 'Components/Radio Buttons' }

export const Unselected = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RadioButtons onChange={handleChange} options={options} value={value} />
  )
}

export const Focused = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RadioButtons
      {...useInitialFocus()}
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const Selected = function () {
  const [value, setValue] = useState('bar')
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RadioButtons onChange={handleChange} options={options} value={value} />
  )
}

export const Disabled = function () {
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <RadioButtons
      disabled
      onChange={handleChange}
      options={options}
      value="bar"
    />
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState('bar')
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, disabled: true, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RadioButtons onChange={handleChange} options={options} value={value} />
  )
}

export const BooleanValue = function () {
  const [value, setValue] = useState(false)
  const options: Array<RadioButtonsOption<boolean>> = [
    { children: <Text>foo</Text>, value: true },
    { children: <Text>bar</Text>, value: false }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue === 'true' ? true : false)
  }
  return (
    <RadioButtons onChange={handleChange} options={options} value={value} />
  )
}

export const NumericValue = function () {
  const [value, setValue] = useState(2)
  const options: Array<RadioButtonsOption<number>> = [
    { children: <Text>foo</Text>, value: 1 },
    { children: <Text>bar</Text>, value: 2 },
    { children: <Text>baz</Text>, value: 3 }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(parseInt(newValue, 10))
  }
  return (
    <RadioButtons onChange={handleChange} options={options} value={value} />
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState('bar')
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  return (
    <RadioButtons onValueChange={setValue} options={options} value={value} />
  )
}
