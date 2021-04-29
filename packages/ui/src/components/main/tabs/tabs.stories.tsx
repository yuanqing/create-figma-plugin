/* eslint-disable no-console */
/** @jsx h */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { Tabs } from './tabs'

export default { title: 'Components/Main/Tabs' }

export const Unselected = function () {
  const [value, setValue] = useState<null | string>(null)
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(value)
  }
  return (
    <Tabs
      onChange={handleChange}
      options={[
        { children: <div>Foo</div>, value: 'foo' },
        { children: <div>Bar</div>, value: 'bar' },
        { children: <div>Baz</div>, value: 'baz' }
      ]}
      value={value}
    />
  )
}

export const Selected = function () {
  const [value, setValue] = useState<null | string>('bar')
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(value)
  }
  return (
    <Tabs
      onChange={handleChange}
      options={[
        { children: <div>Foo</div>, value: 'foo' },
        { children: <div>Bar</div>, value: 'bar' },
        { children: <div>Baz</div>, value: 'baz' }
      ]}
      value={value}
    />
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<null | string>(null)
  return (
    <Tabs
      onValueChange={setValue}
      options={[
        { children: <div>Foo</div>, value: 'foo' },
        { children: <div>Bar</div>, value: 'bar' },
        { children: <div>Baz</div>, value: 'baz' }
      ]}
      value={value}
    />
  )
}
