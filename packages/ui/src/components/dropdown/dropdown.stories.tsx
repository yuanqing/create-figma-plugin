/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../hooks/use-initial-focus/use-initial-focus'
import { IconLayerFrame16 } from '../icon/icon-16/icon-layer-frame-16'
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
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>
  )
}

export const Focused = function () {
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
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown
        {...useInitialFocus()}
        onChange={handleChange}
        options={options}
        value={value}
      />
    </div>
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
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        placeholder="Placeholder"
        value={value}
      />
    </div>
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
  const style = { marginTop: '100px' }

  return (
    <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>
  )
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
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown
        disabled
        onChange={handleChange}
        options={options}
        value="foo"
      />
    </div>
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState('Mixed')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { disabled: true, value: 'Mixed' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} />
    </div>
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
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown
        noBorder
        onChange={handleChange}
        options={options}
        value={value}
      />
    </div>
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
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown
        icon={<IconLayerFrame16 />}
        onChange={handleChange}
        options={options}
        value={value}
      />
    </div>
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
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown
        icon="X"
        onChange={handleChange}
        options={options}
        value={value}
      />
    </div>
  )
}

export const Children = function () {
  const [value, setValue] = useState('foo')
  const options: Array<DropdownOption> = [
    {
      children: 'A',
      value: 'foo'
    },
    { children: 'B', value: 'bar' },
    { children: 'C', value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { children: 'D', value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown onChange={handleChange} options={options} value={value} />
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
  const style = { marginTop: '100px' }
  return (
    <div style={style}>
      <Dropdown onValueChange={setValue} options={options} value={value} />
    </div>
  )
}
