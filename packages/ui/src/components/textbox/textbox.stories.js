/** @jsx h */
import { h } from 'preact'
import { Textbox } from './textbox'

export default { title: 'Textbox' }

function noop () {}

export function Normal () {
  return <Textbox value='Text' />
}

export function Numeric () {
  return <Textbox value={42} onChange={noop} />
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
  return (
    <Textbox
      value='Text'
      onChange={noop}
      icon={
        <svg viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 0v8h8V7H5c0-2.21-1.79-4-4-4V0H0zm1 4v3h3c0-1.657-1.343-3-3-3z'
            fill-rule='evenodd'
          />
        </svg>
      }
    />
  )
}
