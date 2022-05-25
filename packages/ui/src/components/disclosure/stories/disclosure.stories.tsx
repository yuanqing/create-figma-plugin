/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Disclosure } from '../disclosure'

export default {
  title: 'Components/Disclosure'
}

export const Closed = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleClick() {
    setIsOpen(!(isOpen === true))
  }
  const style = { height: '64px' }
  return (
    <div style={style}>
      <Disclosure isOpen={isOpen} onClick={handleClick} title="foo">
        bar
      </Disclosure>
    </div>
  )
}

export const Open = function () {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  function handleClick() {
    setIsOpen(!(isOpen === true))
  }
  const style = { height: '64px' }
  return (
    <div style={style}>
      <Disclosure isOpen={isOpen} onClick={handleClick} title="foo">
        bar
      </Disclosure>
    </div>
  )
}
