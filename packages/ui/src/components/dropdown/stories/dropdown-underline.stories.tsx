/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconLayerFrame16 } from '../../../icons/icon-16/icon-layer-frame-16.js'
import { Dropdown, DropdownOption } from '../dropdown.js'

export default {
  parameters: {
    fixedWidth: true
  },
  tags: ['3'],
  title: 'Components/Dropdown/Underline'
}

export const Empty = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <div>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const EmptyManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(
    function (index) {
      return { value: `${index + 1}` }
    }
  )
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="underline"
    />
  )
}

export const Placeholder = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
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
      variant="underline"
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
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
      value={value}
      variant="underline"
    />
  )
}

export const FilledManyOptions = function () {
  const [value, setValue] = useState<string>('42')
  const options: Array<DropdownOption> = [...Array(100).keys()].map(
    function (index) {
      return { value: `${index + 1}` }
    }
  )
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      value={value}
      variant="underline"
    />
  )
}

export const Focused = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
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
      variant="underline"
    />
  )
}

export const Disabled = function () {
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <Dropdown
      disabled
      onChange={handleChange}
      options={options}
      value="foo"
      variant="underline"
    />
  )
}

export const OptionDisabled = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { disabled: true, value: 'bar' },
    { value: 'baz' },
    '-',
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
      value={value}
      variant="underline"
    />
  )
}

export const OptionText = function () {
  const [value, setValue] = useState<string>('a')
  const options: Array<DropdownOption> = [
    {
      text: 'foo',
      value: 'a'
    },
    { text: 'bar', value: 'b' },
    { text: 'baz', value: 'c' },
    '-',
    { header: 'Header' },
    { text: 'qux', value: 'd' }
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
      value={value}
      variant="underline"
    />
  )
}

export const Icon = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
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
      icon={<IconLayerFrame16 />}
      onChange={handleChange}
      options={options}
      value={value}
      variant="underline"
    />
  )
}

export const TextIcon = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
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
      icon="W"
      onChange={handleChange}
      options={options}
      value={value}
      variant="underline"
    />
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleValueChange(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Dropdown
      onValueChange={handleValueChange}
      options={options}
      value={value}
      variant="underline"
    />
  )
}

export const TopLeft = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    left: '-8px',
    position: 'fixed',
    top: '-8px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const TopLeftManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(
    function (index) {
      return { value: `${index + 1}` }
    }
  )
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    left: '-8px',
    position: 'fixed',
    top: '-8px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const TopRight = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    position: 'fixed',
    right: '-8px',
    top: '-8px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const TopRightManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(
    function (index) {
      return { value: `${index + 1}` }
    }
  )
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    position: 'fixed',
    right: '-8px',
    top: '-8px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const MiddleLeft = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    left: '-8px',
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const MiddleLeftManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(
    function (index) {
      return { value: `${index + 1}` }
    }
  )
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    left: '-8px',
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const MiddleRight = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    position: 'fixed',
    right: '-8px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const MiddleRightManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(
    function (index) {
      return { value: `${index + 1}` }
    }
  )
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    position: 'fixed',
    right: '-8px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const BottomLeft = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    bottom: '-8px',
    left: '-8px',
    position: 'fixed',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const BottomLeftManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(
    function (index) {
      return { value: `${index + 1}` }
    }
  )
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    bottom: '-8px',
    left: '-8px',
    position: 'fixed',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const BottomRight = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    '-',
    { header: 'Header' },
    { value: 'qux' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    bottom: '-8px',
    position: 'fixed',
    right: '-8px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}

export const BottomRightManyOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [...Array(100).keys()].map(
    function (index) {
      return { value: `${index + 1}` }
    }
  )
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  const style = {
    bottom: '-8px',
    position: 'fixed',
    right: '-8px',
    width: '240px'
  }
  return (
    <div style={style}>
      <Dropdown
        onChange={handleChange}
        options={options}
        value={value}
        variant="underline"
      />
    </div>
  )
}
