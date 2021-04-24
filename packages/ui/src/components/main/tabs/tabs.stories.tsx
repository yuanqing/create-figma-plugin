/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Tabs } from './tabs'

export default { title: 'Components/Main/Tabs' }

export const Unselected = function () {
  const [value, setValue] = useState<string | null>(null)
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

export const Selected = function () {
  const [value, setValue] = useState<string | null>('bar')
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
