/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { spaceHorizontalIcon } from '../../../icons/space-horizontal-icon'
import { TextboxNumeric } from './textbox-numeric'

export default { title: 'Textbox Numeric' }

export const Text = function () {
  const [value, setValue] = useState(42)
  return <TextboxNumeric value={value} onChange={setValue} />
}

export const WithPlaceholder = function () {
  const [value, setValue] = useState('')
  return <TextboxNumeric placeholder={42} value={value} onChange={setValue} />
}

export const NoBorder = function () {
  const [value, setValue] = useState(42)
  return <TextboxNumeric noBorder value={value} onChange={setValue} />
}

export const Disabled = function () {
  const [value, setValue] = useState(42)
  return <TextboxNumeric disabled value={value} onChange={setValue} />
}

export const WithIcon = function () {
  const [value, setValue] = useState(42)
  return (
    <TextboxNumeric
      icon={spaceHorizontalIcon}
      value={value}
      onChange={setValue}
    />
  )
}
