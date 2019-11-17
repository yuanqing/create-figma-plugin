/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { TextboxAutocomplete } from './textbox-autocomplete'

export default { title: 'Textbox Autocomplete' }

const menu = [
  { value: 'foo' },
  { value: 'bar' },
  { value: 'baz' },
  { separator: true },
  { header: 'Header' },
  { value: 'qux' },
  { value: 'quux' },
  { value: 'quuux' },
  { value: 'quuuux' },
  { value: 'quuuuux' }
]

export function Normal () {
  function Component () {
    const [value, setValue] = useState('')
    return <TextboxAutocomplete value={value} menu={menu} onChange={setValue} />
  }
  return <Component />
}

export function Strict () {
  function Component () {
    const [value, setValue] = useState('')
    return (
      <TextboxAutocomplete
        strict
        value={value}
        menu={menu}
        onChange={setValue}
      />
    )
  }
  return <Component />
}
