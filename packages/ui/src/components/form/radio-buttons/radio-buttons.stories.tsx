/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus'
import { Text } from '../../main/text/text'
import { RadioButtons } from './radio-buttons'

export default { title: 'Components/Form/Radio Buttons' }

export const Unselected = function () {
  const [value, setValue] = useState<null | string>(null)
  return (
    <RadioButtons
      onValueChange={setValue}
      options={[
        { children: <Text>foo</Text>, value: 'foo' },
        { children: <Text>bar</Text>, value: 'bar' },
        { children: <Text>baz</Text>, value: 'baz' }
      ]}
      value={value}
    />
  )
}

export const Focused = function () {
  const [value, setValue] = useState<null | string>(null)
  return (
    <RadioButtons
      {...useInitialFocus()}
      onValueChange={setValue}
      options={[
        { children: <Text>foo</Text>, value: 'foo' },
        { children: <Text>bar</Text>, value: 'bar' },
        { children: <Text>baz</Text>, value: 'baz' }
      ]}
      value={value}
    />
  )
}

export const Selected = function () {
  const [value, setValue] = useState('bar')
  return (
    <RadioButtons
      onValueChange={setValue}
      options={[
        { children: <Text>foo</Text>, value: 'foo' },
        { children: <Text>bar</Text>, value: 'bar' },
        { children: <Text>baz</Text>, value: 'baz' }
      ]}
      value={value}
    />
  )
}

export const Disabled = function () {
  const [value, setValue] = useState('bar')
  return (
    <RadioButtons
      disabled
      onValueChange={setValue}
      options={[
        { children: <Text>foo</Text>, value: 'foo' },
        { children: <Text>bar</Text>, value: 'bar' },
        { children: <Text>baz</Text>, value: 'baz' }
      ]}
      value={value}
    />
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState('bar')
  return (
    <RadioButtons
      onValueChange={setValue}
      options={[
        { children: <Text>foo</Text>, value: 'foo' },
        { children: <Text>bar</Text>, value: 'bar' },
        { children: <Text>baz</Text>, disabled: true, value: 'baz' }
      ]}
      value={value}
    />
  )
}

export const BooleanValue = function () {
  const [value, setValue] = useState(false)
  return (
    <RadioButtons
      onValueChange={setValue}
      options={[
        { children: <Text>foo</Text>, value: true },
        { children: <Text>bar</Text>, value: false }
      ]}
      value={value}
    />
  )
}

export const NumericValue = function () {
  const [value, setValue] = useState(2)
  return (
    <RadioButtons
      onValueChange={setValue}
      options={[
        { children: <Text>foo</Text>, value: 1 },
        { children: <Text>bar</Text>, value: 2 },
        { children: <Text>baz</Text>, value: 3 }
      ]}
      value={value}
    />
  )
}
