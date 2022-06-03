/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Disclosure } from '../disclosure'

export default {
  parameters: {
    fixedWidth: true
  },
  title: 'Components/Disclosure'
}

export const Closed = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleClick() {
    setOpen(!(open === true))
  }
  const style = { height: '64px' }
  return (
    <div style={style}>
      <Disclosure onClick={handleClick} open={open} title="foo">
        bar
      </Disclosure>
    </div>
  )
}

export const Open = function () {
  const [open, setOpen] = useState<boolean>(true)
  function handleClick() {
    setOpen(!(open === true))
  }
  const style = { height: '64px' }
  return (
    <div style={style}>
      <Disclosure onClick={handleClick} open={open} title="foo">
        bar
      </Disclosure>
    </div>
  )
}
