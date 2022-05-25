/** @jsx h */
import { h } from 'preact'

import { Text } from '../text'

export default {
  title: 'Components/Text'
}

export const Default = function () {
  return <Text>Text</Text>
}

export const Numeric = function () {
  return <Text numeric>3.142</Text>
}

export const AlignLeft = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <div style={style}>
      <Text align="left">Text</Text>
    </div>
  )
}

export const AlignCenter = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <div style={style}>
      <Text align="center">Text</Text>
    </div>
  )
}

export const AlignRight = function () {
  const style = { backgroundColor: 'var(--figma-color-bg-brand-tertiary)' }
  return (
    <div style={style}>
      <Text align="right">Text</Text>
    </div>
  )
}
