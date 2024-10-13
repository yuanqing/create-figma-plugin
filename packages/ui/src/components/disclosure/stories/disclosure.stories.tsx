/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { Disclosure } from '../disclosure.js'

export default {
  parameters: {
    fixedWidth: true
  },
  tags: ['1'],
  title: 'Components/Disclosure'
}

export const Closed = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleClick(event: JSX.TargetedMouseEvent<HTMLInputElement>) {
    console.log(event)
    setOpen(!(open === true))
  }
  const style = { height: '64px' }
  return (
    <div style={style}>
      <Disclosure onClick={handleClick} open={open} title="Title">
        Body
      </Disclosure>
    </div>
  )
}

export const Open = function () {
  const [open, setOpen] = useState<boolean>(true)
  function handleClick(event: JSX.TargetedMouseEvent<HTMLInputElement>) {
    console.log(event)
    setOpen(!(open === true))
  }
  const style = { height: '64px' }
  return (
    <div style={style}>
      <Disclosure onClick={handleClick} open={open} title="Title">
        Text
      </Disclosure>
    </div>
  )
}
