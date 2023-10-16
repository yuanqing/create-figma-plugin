/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { Tabs, TabsOption } from '../tabs.js'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Tabs'
}

export const Passive = function () {
  const [value, setValue] = useState<string>('foo')
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
  const [value, setValue] = useState<string>('foo')
  const options: Array<TabsOption> = [
    { children: <div>Foo</div>, value: 'foo' },
    { children: <div>Bar</div>, value: 'bar' },
    { children: <div>Baz</div>, value: 'baz' }
  ]
  function handleValueChange(newValue: string) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Tabs onValueChange={handleValueChange} options={options} value={value} />
  )
}
