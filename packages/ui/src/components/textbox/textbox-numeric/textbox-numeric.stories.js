/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { TextboxNumeric } from './textbox-numeric'

export default { title: 'Textbox Numeric' }

const icon = (
  <svg>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M2 3H4V13H2V14H4.5H5V13.5V2.5V2H4.5H2V3ZM12 2H12.5H15V3H13V13H15V14H12.5H12V13.5V2.5V2ZM8 11V5H9V11H8Z'
    />
  </svg>
)

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
  return <TextboxNumeric icon={icon} value={value} onChange={setValue} />
}
