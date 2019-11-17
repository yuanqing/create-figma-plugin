/** @jsx h */
import { h } from 'preact'
import { Textbox } from './textbox'

export default { title: 'Textbox' }

const icon = (
  <svg width='10' height='10'>
    <path d='M7 0H3v1h4V0zM1 1V0H0v1h1zM0 3h1v4H0V3zm9 0h1v4H9V3zm1-2H9V0h1v1zM3 9h4v1H3V9zM1 9H0v1h1V9zm8 1V9h1v1H9z' />
  </svg>
)

function noop () {}

export function Text () {
  return <Textbox value='Text' />
}

export function WithPlaceholder () {
  return <Textbox onChange={noop} placeholder='Text' />
}

export function NoBorder () {
  return <Textbox value='Text' onChange={noop} noBorder />
}

export function Disabled () {
  return <Textbox value='Text' onChange={noop} disabled />
}

export function WithIcon () {
  return <Textbox value='Text' onChange={noop} icon={icon} />
}
