/** @jsx h */
import { h } from 'preact'
import { TextboxNumeric } from './textbox-numeric'

export default { title: 'Textbox Numeric' }

const icon = (
  <svg viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0 0v8h8V7H5c0-2.21-1.79-4-4-4V0H0zm1 4v3h3c0-1.657-1.343-3-3-3z'
      fill-rule='evenodd'
    />
  </svg>
)

function noop () {}

export function Text () {
  return <TextboxNumeric value={42} onChange={noop} />
}

export function WithPlaceholder () {
  return <TextboxNumeric placeholder={42} onChange={noop} />
}

export function NoBorder () {
  return <TextboxNumeric noBorder value={42} onChange={noop} />
}

export function Disabled () {
  return <TextboxNumeric disabled value={42} onChange={noop} />
}

export function WithIcon () {
  return <TextboxNumeric icon={icon} value={42} onChange={noop} />
}
