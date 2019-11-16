/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { TextboxAutocomplete } from './textbox-autocomplete'

export default { title: 'Textbox Autocomplete' }

export function Normal () {
  return <Wrapper />
}

function Wrapper () {
  const [value, setValue] = useState('')
  return (
    <TextboxAutocomplete
      value={value}
      options={[
        { value: 'foo' },
        { value: 'bar' },
        { value: 'baz' },
        { value: 'qux' },
        { value: 'quxx' }
      ]}
      onChange={setValue}
    />
  )
}
