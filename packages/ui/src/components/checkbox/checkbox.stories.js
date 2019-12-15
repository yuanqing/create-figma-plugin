/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Checkbox } from './checkbox'
import { Text } from '../text/text'

export default { title: 'Checkbox' }

export const Normal = function () {
  const [value, setValue] = useState(false)
  return (
    <Checkbox name='normal' value={value} onChange={setValue}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Disabled = function () {
  const [value, setValue] = useState(false)
  return (
    <Checkbox disabled name='disabled' value={value} onChange={setValue}>
      <Text>Text</Text>
    </Checkbox>
  )
}
