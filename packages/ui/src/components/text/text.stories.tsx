/** @jsx h */
import { h } from 'preact'

import { Text } from './text'

export default { title: 'Components/Text' }

export const Default = function () {
  return <Text>Text</Text>
}

export const Bold = function () {
  return <Text bold>Text</Text>
}

export const Muted = function () {
  return <Text muted>Text</Text>
}

export const Numeric = function () {
  return <Text numeric>3.142</Text>
}

export const Link = function () {
  return (
    <Text>
      <a href="#">Link</a>
    </Text>
  )
}
