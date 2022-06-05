/** @jsx h */
/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { Disclosure } from '../disclosure'

export default {
  parameters: {
    fixedWidth: true,
    order: 1
  },
  title: 'Components/Disclosure/Closed'
}

export const Default = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleClick(event: JSX.TargetedMouseEvent<HTMLInputElement>) {
    console.log(event)
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

export const Focused = function () {
  const [open, setOpen] = useState<boolean>(false)
  function handleClick(event: JSX.TargetedMouseEvent<HTMLInputElement>) {
    console.log(event)
    setOpen(!(open === true))
  }
  const style = { height: '64px' }
  return (
    <div style={style}>
      <Disclosure
        {...useInitialFocus()}
        onClick={handleClick}
        open={open}
        title="foo"
      >
        bar
      </Disclosure>
    </div>
  )
}
