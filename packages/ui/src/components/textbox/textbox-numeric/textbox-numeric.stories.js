/** @jsx h */
import { h } from 'preact'
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

function noop () {}

export const Text = function () {
  return <TextboxNumeric value={42} onChange={noop} />
}

export const WithPlaceholder = function () {
  return <TextboxNumeric placeholder={42} onChange={noop} />
}

export const NoBorder = function () {
  return <TextboxNumeric noBorder value={42} onChange={noop} />
}

export const Disabled = function () {
  return <TextboxNumeric disabled value={42} onChange={noop} />
}

export const WithIcon = function () {
  return <TextboxNumeric icon={icon} value={42} onChange={noop} />
}
