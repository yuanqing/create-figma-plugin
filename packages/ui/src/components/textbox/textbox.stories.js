/** @jsx h */
import { h } from 'preact'
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

function noop () {}

export const Text = function () {
  return <Textbox value='Text' onChange={noop} />
}

export const WithPlaceholder = function () {
  return <Textbox placeholder='Text' onChange={noop} />
}

export const NoBorder = function () {
  return <Textbox noBorder value='Text' onChange={noop} />
}

export const Disabled = function () {
  return <Textbox disabled value='Text' onChange={noop} />
}

export const WithIcon = function () {
  return <Textbox icon={icon} value='Text' onChange={noop} />
}
