/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { spaceHorizontalIcon } from '../../icons/space-horizontal-icon'
import { Textbox } from './textbox'

export default { title: 'Textbox' }

export const Text = function () {
  const [value, setValue] = useState('Text')
  return <Textbox value={value} onChange={setValue} />
}

export const WithPlaceholder = function () {
  const [value, setValue] = useState('')
  return <Textbox placeholder='Text' value={value} onChange={setValue} />
}

export const NoBorder = function () {
  const [value, setValue] = useState('Text')
  return <Textbox noBorder value={value} onChange={setValue} />
}

export const Disabled = function () {
  const [value, setValue] = useState('Text')
  return <Textbox disabled value={value} onChange={setValue} />
}

export const WithIcon = function () {
  const [value, setValue] = useState('Text')
  return (
    <Textbox icon={spaceHorizontalIcon} value={value} onChange={setValue} />
  )
}
