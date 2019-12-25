/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Checkbox } from './checkbox'
import { Text } from '../text/text'

export default { title: 'Checkbox' }

export const Default = function () {
  const [value, setValue] = useState(false)
  return (
    <Checkbox value={value} onChange={setValue}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Disabled = function () {
  const [value, setValue] = useState(false)
  return (
    <Checkbox disabled value={value} onChange={setValue}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const CheckedDisabled = function () {
  const [value, setValue] = useState(true)
  return (
    <Checkbox disabled value={value} onChange={setValue}>
      <Text>Text</Text>
    </Checkbox>
  )
}
