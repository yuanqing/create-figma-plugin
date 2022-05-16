/** @jsx h */
import { h } from 'preact'

import { Text } from '../text'

export default { parameters: { fixedWidth: true }, title: 'Components/Text' }

export const Default = function () {
  return <Text>Text</Text>
}

export const Numeric = function () {
  return <Text numeric>3.142</Text>
}

export const AlignLeft = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <div style={style}>
      <Text align="left">Text</Text>
    </div>
  )
}

export const AlignCenter = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <div style={style}>
      <Text align="center">Text</Text>
    </div>
  )
}

export const AlignRight = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-selected)' }
  return (
    <div style={style}>
      <Text align="right">Text</Text>
    </div>
  )
}

export const InlineMuted = function () {
  return (
    <Text>
      <small>Text</small>
    </Text>
  )
}

export const InlineBold = function () {
  return (
    <Text>
      <strong>Text</strong>
    </Text>
  )
}

export const InlineLink = function () {
  return (
    <Text>
      <a href="#">Link</a>
    </Text>
  )
}
