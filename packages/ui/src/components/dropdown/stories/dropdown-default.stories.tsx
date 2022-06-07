/** @jsx h */
/* eslint-disable no-console */
import { Fragment, h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { IconLayerFrame16 } from '../../../icons/icon-16/icon-layer-frame-16'
import { VerticalSpace } from '../../../layout/vertical-space/vertical-space'
import { Button } from '../../button/button'
import { Dropdown, DropdownOption } from '../dropdown'

export default {
  parameters: {
    fixedWidth: true,
    order: 1
  },
  title: 'Components/Dropdown/Default'
}

export const Empty = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
    { header: 'Header' },
    { value: 'qux' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '10' },
    { value: '11' },
    { value: '12' },
    { value: '13' },
    { value: '14' },
    { value: '15' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Dropdown onChange={handleChange} options={options} value={value} />
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
      placeholder="placeholder"
      value={value}
    />
  )
}

export const Filled = function () {
  const [value, setValue] = useState<string>('foo')
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

export const LongText = function () {
  const [value, setValue] = useState<string>(Array(20).fill('foo').join(' '))
  const options: Array<DropdownOption> = [
    { value: Array(20).fill('foo').join(' ') },
    { value: Array(20).fill('bar').join(' ') },
    { value: Array(20).fill('baz').join(' ') },
    { separator: true },
    { header: 'Header' },
    { value: Array(4).fill('qux').join(' ') }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Dropdown onChange={handleChange} options={options} value={value} />
}

export const Focused = function () {
  const [value, setValue] = useState<string>('foo')
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

export const OptionDisabled = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { disabled: true, value: 'bar' },
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

export const OptionText = function () {
  const [value, setValue] = useState<string>('a')
  const options: Array<DropdownOption> = [
    {
      text: 'foo',
      value: 'a'
    },
    { text: 'bar', value: 'b' },
    { text: 'baz', value: 'c' },
    { separator: true },
    { header: 'Header' },
    { text: 'qux', value: 'd' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Dropdown onChange={handleChange} options={options} value={value} />
}

export const Icon = function () {
  const [value, setValue] = useState<string>('foo')
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
      icon={<IconLayerFrame16 />}
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const IconDisabled = function () {
  const [value, setValue] = useState<string>('foo')
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
      disabled
      icon={<IconLayerFrame16 />}
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const IconText = function () {
  const [value, setValue] = useState<string>('foo')
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

export const IconTextDisabled = function () {
  const [value, setValue] = useState<string>('foo')
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
      disabled
      icon="X"
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const DynamicallySetOptions = function () {
  const [value, setValue] = useState<null | string>(null)
  const [options, setOptions] = useState<Array<DropdownOption>>([
    { value: 'foo' }
  ])
  function handleClick() {
    setOptions([
      { value: 'foo' },
      { value: 'bar' },
      { value: 'baz' },
      { separator: true },
      { header: 'Header' },
      { value: 'qux' }
    ])
  }
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Fragment>
      <Button onClick={handleClick}>Set</Button>
      <VerticalSpace space="small" />
      <Dropdown
        onChange={handleChange}
        options={options}
        placeholder="placeholder"
        value={value}
      />
    </Fragment>
  )
}

export const FlexParent = function () {
  const [valueA, setValueA] = useState<string>(Array(20).fill('foo').join(' '))
  const optionsA: Array<DropdownOption> = [
    { value: Array(20).fill('foo').join(' ') },
    { value: 'bar' }
  ]
  function handleChangeA(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValueA(newValue)
  }
  const [valueB, setValueB] = useState<string>('qux')
  const optionsB: Array<DropdownOption> = [
    { value: Array(20).fill('baz').join(' ') },
    { value: 'qux' }
  ]
  function handleChangeB(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValueB(newValue)
  }
  const style = { display: 'flex' }
  return (
    <div style={style}>
      <Dropdown onChange={handleChangeA} options={optionsA} value={valueA} />
      <Dropdown onChange={handleChangeB} options={optionsB} value={valueB} />
    </div>
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<string>('foo')
  const options: Array<DropdownOption> = [
    { value: 'foo' },
    { value: 'bar' },
    { value: 'baz' },
    { separator: true },
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
    />
  )
}
