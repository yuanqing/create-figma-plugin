/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { Tabs, TabsOption } from './tabs'

export default { title: 'Components/Tabs' }

export const Unselected = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<TabsOption> = [
    { children: <div>Foo</div>, value: 'foo' },
    { children: <div>Bar</div>, value: 'bar' },
    { children: <div>Baz</div>, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Tabs onChange={handleChange} options={options} value={value} />
}

export const Selected = function () {
  const [value, setValue] = useState('bar')
  const options: Array<TabsOption> = [
    { children: <div>Foo</div>, value: 'foo' },
    { children: <div>Bar</div>, value: 'bar' },
    { children: <div>Baz</div>, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return <Tabs onChange={handleChange} options={options} value={value} />
}

export const OnValueChange = function () {
  const [value, setValue] = useState('bar')
  const options: Array<TabsOption> = [
    { children: <div>Foo</div>, value: 'foo' },
    { children: <div>Bar</div>, value: 'bar' },
    { children: <div>Baz</div>, value: 'baz' }
  ]
  return <Tabs onValueChange={setValue} options={options} value={value} />
}
