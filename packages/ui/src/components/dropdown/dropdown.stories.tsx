/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../hooks/use-initial-focus'
import { IconFrame } from '../icon/icon-frame/icon-frame'
import { Dropdown, DropdownOption } from './dropdown'

export default { title: 'Components/Dropdown' }

export const Empty = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Dropdown onChange={handleChange} options={options} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      {...useInitialFocus()}
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      placeholder="Placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Dropdown onChange={handleChange} options={options} value={value} />
}

export const Disabled = function () {
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <Dropdown disabled onChange={handleChange} options={options} value="foo" />
  )
}

export const NoBorder = function () {
  const [value, setValue] = useState('bar')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      noBorder
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const Icon = function () {
  const [value, setValue] = useState('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      icon={<IconFrame />}
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const TextIcon = function () {
  const [value, setValue] = useState('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      icon="X"
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const MenuTop = function () {
  const [value, setValue] = useState('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = { marginTop: '128px' }
  return (
    <div style={style}>
      <Dropdown onChange={handleChange} options={options} top value={value} />
    </div>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  return <Dropdown onValueChange={setValue} options={options} value={value} />
}
