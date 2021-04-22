/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Text } from '../../main/text/text'
import { Checkbox } from './checkbox'

export default { title: 'Components/Form/Checkbox' }

export const Unselected = function () {
  const [value, setValue] = useState(false)
  return (
    <Checkbox onChange={setValue} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Selected = function () {
  const [value, setValue] = useState(true)
  return (
    <Checkbox onChange={setValue} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}

export const Disabled = function () {
  const [value, setValue] = useState(false)
  return (
    <Checkbox disabled onChange={setValue} value={value}>
      <Text>Text</Text>
    </Checkbox>
  )
}
