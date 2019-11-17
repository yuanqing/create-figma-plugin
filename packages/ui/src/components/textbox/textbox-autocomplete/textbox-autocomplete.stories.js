/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { TextboxAutocomplete } from './textbox-autocomplete'

export default { title: 'Textbox Autocomplete' }

const options = [
  { value: 'foo' },
  { value: 'bar' },
  { value: 'baz' },
  { value: 'qux' },
  { value: 'quux' },
  { value: 'quuux' },
  { value: 'quuuux' },
  { value: 'quuuuux' }
]

export function Normal () {
  function Component () {
    const [value, setValue] = useState('')
    return (
      <TextboxAutocomplete
        value={value}
        options={options}
        onChange={setValue}
      />
    )
  }
  return <Component />
}
