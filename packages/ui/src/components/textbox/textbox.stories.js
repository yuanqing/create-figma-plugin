/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Textbox } from './textbox'

export default { title: 'Textbox' }

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
  const [value, setValue] = useState('Text')
  return <Textbox value={value} onChange={setValue} />
}

export const WithPlaceholder = function () {
  const [value, setValue] = useState('')
  return <Textbox placeholder='Text' value={value} onChange={setValue} />
}

export const NoBorder = function () {
  const [value, setValue] = useState('Text')
  return <Textbox noBorder value={value} onChange={setValue} />
}

export const Disabled = function () {
  const [value, setValue] = useState('Text')
  return <Textbox disabled value={value} onChange={setValue} />
}

export const WithIcon = function () {
  const [value, setValue] = useState('Text')
  return <Textbox icon={icon} value={value} onChange={setValue} />
}
