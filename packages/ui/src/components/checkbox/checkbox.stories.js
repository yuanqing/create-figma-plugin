/** @jsx h */
import { h } from 'preact'
import { Checkbox } from './checkbox'
import { Text } from '../text/text'

export default { title: 'Checkbox' }

export function Normal () {
  return <Checkbox text='Label' />
}

export function Disabled () {
  return <Checkbox text='Text' disabled />
}

export function WithDescription () {
  return (
    <Checkbox text='Text'>
      <Text muted>Description</Text>
    </Checkbox>
  )
}
