/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Disclosure } from './disclosure'

export default { title: 'Components/Disclosure' }

export const Default = function () {
  const [isOpen, setIsOpen] = useState(false)
  function handleClick() {
    setIsOpen(!(isOpen === true))
  }
  const style = { height: '160px', width: '240px' }
  return (
    <div style={style}>
      <Disclosure isOpen={isOpen} onClick={handleClick} title="foo">
        bar
      </Disclosure>
    </div>
  )
}
